import { Modal } from "./Modal.js";
import { Board } from "./Board.js";
import {GameLogic} from "../Logic/game.js";

export class UIHelper{

  static initUIGame(size,player1,player2){
    this.createBoard(size);
    this.setPlayersNames(player1,player2);
    this.currentSign = 'X';
  }

  static createBoard(size){
    if(this.gameBoard){
      this.gameBoard.remove();
    }
    this.gameBoard = new Board(size, this.onPlayerMove.bind(this));
  }

  static setPlayersNames(player1,player2){
    const player = document.getElementById('player1-name').innerText = player1;
    document.getElementById('player2-name').innerText = player2;
  }

  static updateUIScore(playerId, score){
    document.getElementById(`player${playerId}-score`).innerText = score;
  }

  static onPlayerMove(sqaureElementBtn){
    sqaureElementBtn.innerText = this.currentSign;
    sqaureElementBtn.disabled= true;
    sqaureElementBtn.className= 'disabled';

    const sqaureId = sqaureElementBtn.parentElement.id;
    const playerMoveValues = sqaureId.split('');
    this.move = playerMoveValues.map( el => +el);

    this.currentSign = this.currentSign ==='X' ? 'O': 'X';
    GameLogic.checkMove(this.move);
  }

  static showMessage(text){
    const messageModal = new Modal('message-template');

    const messageTemplateEl = document.getElementById('message-template');
    messageTemplateEl.content.querySelector('p').innerText = text;
    messageModal.show();
    document.getElementById('ok-button').addEventListener('click', () =>{
      messageModal.hide();
    });

  }
static disableBoard(){
  this.gameBoard.disableBoard();
}

static resumeGame(){
  console.log(this);
  this.gameBoard.clear();
  this.currentSign = 'X';
}

  
}