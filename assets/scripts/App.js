import {Modal} from "./UI/Modal.js";
import {GameLogic} from "./Logic/game.js";
import {UIHelper} from "./UI/UIHelper.js";


class App {

  static init() {
    this.formModal = new Modal('form-template');
    this.initGameBtn = document.getElementById('initGameButton');
    this.connectInitGameBtn();
  }

  static connectInitGameBtn() {
    this.initGameBtn.addEventListener('click', this.initGameHandler.bind(this));
  }

  static initGameHandler (){
    this.formModal.show();
    this.connectSubmitEventToForm();
  }


  static connectSubmitEventToForm() {
    this.gameDetailsForm =  document.getElementById('gameDetailsForm');
      this.gameDetailsForm.onsubmit = this.onSubmitGameForm.bind(this);
  }

   static onSubmitGameForm(event) {
    event.preventDefault();
    //this.player2 = this.gameDetailsForm.querySelector('input[name = choose-player]:checked').value;
    this.player1 = this.gameDetailsForm.querySelector('#player1-input-name').value;
    this.player2 = this.gameDetailsForm.querySelector('#player2-input-name').value;
    this.boardSize = this.gameDetailsForm.querySelector('#boardsize').value;

    this.formModal.hide();
    this.initGameBtn.className ='button';
    this.resumeGameBtn = document.getElementById('resumeGameButton');
    this.resumeGameBtn.style.display ='block';
    this.resumeGameBtn.addEventListener('click', UIHelper.resumeGame.bind(UIHelper));
    document.getElementById('scores').style.display = 'flex';

    GameLogic.startGame(+this.boardSize,this.player1,this.player2);
  }
}

App.init();
