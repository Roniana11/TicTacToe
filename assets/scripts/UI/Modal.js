export class Modal{

  constructor(contentId){
    this.modalTemplateEl = document.getElementById('modal-template');
    this.contentTemplateEl = document.getElementById(contentId);
  }

  show(){
    if(this.modalTemplateEl.content){
      const modalTemplateContent = document.importNode(this.modalTemplateEl.content, true);
      const contentElement = document.importNode(this.contentTemplateEl.content, true);

     this.modalElement = modalTemplateContent.querySelector('.modal');
     this.backdropElement = modalTemplateContent.querySelector('.backdrop');
     this.modalElement.appendChild(contentElement);
    document.body.insertAdjacentElement('afterbegin', this.modalElement);
    document.body.insertAdjacentElement('afterbegin', this.backdropElement);
  }
  else{
    alert('your broweser does not support this feture')
  }
  }

  hide(){
    if(this.modalElement){
      document.body.removeChild(this.modalElement);
      document.body.removeChild(this.backdropElement);
    }
    this.modalElement= null;
    this.backdropElement= null;
  }
}