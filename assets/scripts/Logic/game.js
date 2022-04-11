import { GameBoard } from './gameBoard.js';
import { Computer } from './Computer.js';
import { UIHelper } from '../UI/UIHelper.js';

export class GameLogic {
  static startGame(boardSize, player1, player2) {
    UIHelper.initUIGame(boardSize, player1, player2);
    GameBoard.initBoard(boardSize);
    this.player1 = { id: 1, name: player1, sign: 'X', score: 0 };
    this.player2 = { id: 2, name: player2, sign: 'O', score: 0 };
    this.currentPlayer = this.player1;
    this.isGameOver = false;
  }

  static checkMove(move) {
    GameBoard.update(move, this.currentPlayer.sign);
    const gameStatus = GameBoard.checkBoardStatus();

    if(gameStatus === 0){
      this.currentPlayer =
      this.currentPlayer.id === this.player1.id
        ? this.player2
        : this.player1;
    }
    else{
      this.endGame(gameStatus);
    }
  }

  static endGame(status) {
    if (status === 1) {
      UIHelper.showMessage(`The winner is ${this.currentPlayer.name}!`);
      this.currentPlayer.score++;
      UIHelper.updateUIScore(this.currentPlayer.id, this.currentPlayer.score);
    } else {
      UIHelper.showMessage(`Its a tie!`);
    }
    GameBoard.setAllEntries();
    UIHelper.disableBoard();
  }
}
