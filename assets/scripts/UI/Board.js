import { Square } from './Square.js';
import { UIHelper } from './UIHelper.js';

export class Board {
  constructor(size, onClickHandler) {
    this.boardElement = document.createElement('ul');
    this.boardElement.style.gridTemplateColumns = `repeat(${size},1fr)`;
    this.size = size;
    this.onSqauerClick = onClickHandler;
    this.render();
  }

  render() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const newSquare = new Square();
        newSquare.square.id = '' + i + j;
        this.boardElement.appendChild(newSquare.square);
      }
    }
    this.boardElement.addEventListener('click', (event) => {
      this.onSqauerClick(event.target.closest('button'));
    });

    document.getElementById('board');
    document.getElementById('game').appendChild(this.boardElement);
  }

  remove() {
    document.getElementById('game').removeChild(this.boardElement);
  }

  disableBoard(){
    const buttons = this.boardElement.getElementsByTagName('button');
    for(let btn of buttons){
      btn.disabled = true;
      btn.className ='disabled';
    }
  }

  clear(){
    const buttons = this.boardElement.getElementsByTagName('button');
    for(let btn of buttons){
      btn.innerText ='';
      btn.disabled = false;
      btn.className ='square_button';
    }
  }
}
