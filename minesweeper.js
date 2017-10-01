//Minesweeper
//Author: Stavros Papadopoulos
const g=new Game(3,3,3);
g.playMove(0,0);
class Game{
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
    this._board=new Board(numberOfRows,numberOfColumns,numberOfBombs);
  }
  print(){
    console.log(this._playerBoard.map(row=>row.join(' | ')).join('\n'));
    //to be in different
    //lines and be like ' | '...
  }

  playMove(rowIndex,columnIndex){
    this._board.flipTile(rowIndex,columnIndex)
    if(this._board.playerBoard[rowIndex][columnIndex]==='B'){
      console.log('Game is Over :/ ');
      this._board.print();
    }
    else if (hasSafeTiles) {
      console.log('Congrats,you won!');
    }
    else{
      console.log('Current Board: ')
      console.log(this._board.print());
    }
  }
}
class Board{
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
    this._numberOfBombs=numberOfBombs;
    this._numberOfTiles=numberOfRows*numerOfColumns;
    this._playerBoard=Board.generatePlayerBoard(numberOfRows,numberOfColumns);
    this._bombBoard=Board.generateBombBoard(numberOfRows,numberOfColumns,numberOfBombs);
  }
  get  playerBoard(){
    return this._playerBoard;
  }
  flipTile(rowIndex, columnIndex){
    if(this._playerBoard[rowIndex][columnIndex]!==' '){
      console.log('This tile has already been flipped!');
      return;
    }
    else if(this._bombBoard[rowIndex][columnIndex]==='B'){
      this._playerBoard[rowIndex][columnIndex]='B';
      return;
    }
    else{
      this._playerBoard[rowIndex][columnIndex]=this.getNumberOfNeighborBombs(rowIndex,columnIndex);
    }
    this._numberOfTiles--;
  }
  getNumberOfNeighborBombs(rowIndex, columnIndex){
    this._neighborOffsets=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    this._numberOfRows=this._bombBoard.length;
    this._numberOfColumns=this._bombBoard[0].length;
    this._numberOfBombs=0;
    this._neighborOffsets.forEach(offset=>{
       this._neighborRowIndex=rowIndex+offset[0];
       this._neighborColumnIndex=columnIndex+offset[1];
      if(this._neighborRowIndex>=0&&this._neighborRowIndex<=this._numberOfRows&&this._neighborColumnIndex>=0&&this._neighborColumnIndex<=this._numberOfColumns){
        if(this._bombBoard[this._neighborRowIndex][this._neighborColumnIndex]==='B'){
          this._numberOfBombs++;
        }
      }
    });
    return this._numberOfBombs;
  }
hasSafeTiles(){
  return this._numberOfTiles!==this._numberOfBombs;
  }

static generatePlayerBoard(numberOfRows,numberOfColumns){
  let board=[];
  for (let i = 0; i <numberOfRows; i++) {
    let row=[];
    for (let j = 0; j <numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}
// function to generate bombs board "B"
static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
  let board=[];
  for (let i = 0; i < numberOfRows; i++) {
    let row=[];
    for (let j = 0; j <numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }
}
print(){
  console.log(this._playerBoard.map(row =>row.join(' | ')).join('\n'));//to be in different
  //lines and be like ' | '...
}

}
//function to generate Player's Board

//console.log(generatePlayerBoard(10,10));//Ex of gene 10x10 board " "
  let numberOfBombsPlaced=0;
//The code in your while loop has the potential to place bombs
//on top of already existing bombs. This will be fixed when you learn about
//control flow
  while (numberOfBombsPlaced<numberOfBombs) {
    let randomRowIndex=Math.floor(Math.random()*numberOfRows);
    let randomColumnIndex=Math.floor(Math.random()*numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex]!=='B'){
      board[randomRowIndex][randomColumnIndex]='B'
      numberOfBombsPlaced++;
    }
 }


//function to print the board

let playerBoard=generatePlayerBoard(3,4);//Set var to pass it below at
let bombBoard=generateBombBoard(3,4,5);//printBoardcd
console.log('Player Board: ');
printBoard(playerBoard);//printing player's Board
console.log('Bomb Board');
printBoard(bombBoard);// printing bomb's board


flipTile(playerBoard,bombBoard,0,1);
console.log('Updated Player Board:');
printBoard(playerBoard);
