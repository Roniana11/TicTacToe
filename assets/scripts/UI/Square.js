
export class Square {

  constructor() {
    this.create();
  }
  create(){
    this.square = document.createElement('li');
    this.square.appendChild(document.createElement('button'));
    this.square.className = 'square';
    this.square.firstElementChild.className = 'square_button';
  }
}
