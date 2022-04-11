
export class GameBoard {

  static initBoard(boardSize) {
    this.size = boardSize;
    this.board = [];
    this.board.length = boardSize;
    for(let i=0;i< this.board.length;i++){
      let row = [];
      row.length = boardSize;
      this.board[i] = row;
    }

    this.gameStatus = {
      noWinYet: 0,
      aWin: 1,
      tie:2,
    }
    this.setAllEntries();
  }

  static update(move,sign) {
    this.board[move[0]][move[1]] = sign;
    this.lastMove = move;
  }

  static setAllEntries() {
    this.board.forEach((row) => row.fill(''));
  }

  static isBoardFull() {
    for(let i=0;i< this.board.length;i++){
      for(let j=0;j< this.board.length;j++){
        if(this.board[i][j] ===''){
          return false;
        }
    }
    }
    return true;
    }

    static checkBoardStatus(){

      let gameStatus = this.gameStatus.aWin ;

      const isBoardFull = this.isBoardFull();
      const isWin = this.checkWin(this.lastMove[0],this.lastMove[1]);
      if(!isWin){
        if(isBoardFull){
          gameStatus = this.gameStatus.tie; 
        }
        else{
          gameStatus = this.gameStatus.noWinYet
        }
      }
      return gameStatus;

    }

    static checkWin(row, col){
      const sign = this.board[row][col];
      const rowWin = this.checkRow(row,sign);
      const colWin = this.checkColumn(col,sign);
      if( row === col){
        var leftDiagonalWin = this.checkLeftToRightDiagonal(sign);
      }
      if( row + col === this.size -1){
        var rightDiagonalWin = this.checkRightToLeftDiagonal(sign);
      }

      return  leftDiagonalWin || rightDiagonalWin || rowWin || colWin;

    }


    static checkRow(row,sign){
      let returnStatus = this.gameStatus.aWin;
      this.board[row].forEach( colEntry => {
        if(colEntry !== sign){
          returnStatus =this.gameStatus.noWinYet;
        }
      })
      return returnStatus;
    }

    static checkColumn(col,sign){
      let returnStatus = this.gameStatus.aWin;
      this.board.forEach( row => {
        if(row[col] !== sign){
          returnStatus =this.gameStatus.noWinYet;
        }
      })
      return returnStatus;
    }

    static checkLeftToRightDiagonal(sign){
      for(let i =0; i< this.size; i++){
        if(this.board[i][i] !== sign){
          return this.gameStatus.noWinYet;
        }
      }
      return this.gameStatus.aWin;
    }
    static checkRightToLeftDiagonal(sign){
      const rowLength = this.size -1;
      for(let i = 0; i < this.size; i++){
        if(this.board[i][rowLength-i] !== sign){
          return this.gameStatus.noWinYet;
        }
      }
      return this.gameStatus.aWin;
    }
}
