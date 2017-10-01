'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Minesweeper
//Author: Stavros Papadopoulos
var g = new Game(3, 3, 3);
g.playMove(0, 0);

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Game, [{
    key: 'print',
    value: function print() {
      console.log(this._playerBoard.map(function (row) {
        return row.join(' | ');
      }).join('\n'));
      //to be in different
      //lines and be like ' | '...
    }
  }, {
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);
      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        console.log('Game is Over :/ ');
        this._board.print();
      } else if (hasSafeTiles) {
        console.log('Congrats,you won!');
      } else {
        console.log('Current Board: ');
        console.log(this._board.print());
      }
    }
  }]);

  return Game;
}();

var Board = function () {
  function Board(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Board);

    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numerOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Board, [{
    key: 'flipTile',
    value: function flipTile(rowIndex, columnIndex) {
      if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
        console.log('This tile has already been flipped!');
        return;
      } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        this._playerBoard[rowIndex][columnIndex] = 'B';
        return;
      } else {
        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
      }
      this._numberOfTiles--;
    }
  }, {
    key: 'getNumberOfNeighborBombs',
    value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
      var _this = this;

      this._neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      this._numberOfRows = this._bombBoard.length;
      this._numberOfColumns = this._bombBoard[0].length;
      this._numberOfBombs = 0;
      this._neighborOffsets.forEach(function (offset) {
        _this._neighborRowIndex = rowIndex + offset[0];
        _this._neighborColumnIndex = columnIndex + offset[1];
        if (_this._neighborRowIndex >= 0 && _this._neighborRowIndex <= _this._numberOfRows && _this._neighborColumnIndex >= 0 && _this._neighborColumnIndex <= _this._numberOfColumns) {
          if (_this._bombBoard[_this._neighborRowIndex][_this._neighborColumnIndex] === 'B') {
            _this._numberOfBombs++;
          }
        }
      });
      return this._numberOfBombs;
    }
  }, {
    key: 'hasSafeTiles',
    value: function hasSafeTiles() {
      return this._numberOfTiles !== this._numberOfBombs;
    }
  }, {
    key: 'print',
    value: function print() {
      console.log(this._playerBoard.map(function (row) {
        return row.join(' | ');
      }).join('\n')); //to be in different
      //lines and be like ' | '...
    }
  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: 'generatePlayerBoard',
    value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
      var board = [];
      for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (var j = 0; j < numberOfColumns; j++) {
          row.push(' ');
        }
        board.push(row);
      }
      return board;
    }
    // function to generate bombs board "B"

  }, {
    key: 'generateBombBoard',
    value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
      var board = [];
      for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (var j = 0; j < numberOfColumns; j++) {
          row.push(null);
        }
        board.push(row);
      }
    }
  }]);

  return Board;
}();
//function to generate Player's Board

//console.log(generatePlayerBoard(10,10));//Ex of gene 10x10 board " "


var numberOfBombsPlaced = 0;
//The code in your while loop has the potential to place bombs
//on top of already existing bombs. This will be fixed when you learn about
//control flow
while (numberOfBombsPlaced < numberOfBombs) {
  var randomRowIndex = Math.floor(Math.random() * numberOfRows);
  var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
  if (board[randomRowIndex][randomColumnIndex] !== 'B') {
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
}

//function to print the board

var playerBoard = generatePlayerBoard(3, 4); //Set var to pass it below at
var bombBoard = generateBombBoard(3, 4, 5); //printBoardcd
console.log('Player Board: ');
printBoard(playerBoard); //printing player's Board
console.log('Bomb Board');
printBoard(bombBoard); // printing bomb's board


flipTile(playerBoard, bombBoard, 0, 1);
console.log('Updated Player Board:');
printBoard(playerBoard);