
//getElement() => return the element of DOM by selector(.class, #id,...)
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}


// class GALLERY => for objects type gallery. Defines atributes and methods 
class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll('.img')];

    // target: echa DOM element. Use getlements() for code clearing.
    this.modal = getElement('.modal');
    this.modalImg = getElement('.main-img');
    this.imageName = getElement('.image-name');
    this.modalImages = getElement('.modal-images');
    this.closeBtn = getElement('.close-btn');
    this.nextBtn = getElement('.next-btn');
    this.prevBtn = getElement('.prev-btn');

    // bind functions: bind set to ABOVE TARGETS and avoid GLOBAL THIS

    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);

    // container event: for each img open the modal container y load list of images
    this.container.addEventListener(
      'click',
      function (e) {
        // self.openModal();
        if (e.target.classList.contains('img')) {
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }


  // Method: openModal() open modal and load the list of img. This method asign event listeners to the buttons of modal container too.

  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
      .map(function (image) {
        return `<img src="${
          image.src
        }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
      })
      .join('');


    this.modal.classList.add('open');
    this.closeBtn.addEventListener('click', this.closeModal);
    this.nextBtn.addEventListener('click', this.nextImage);
    this.prevBtn.addEventListener('click', this.prevImage);
    this.modalImages.addEventListener('click', this.chooseImage);
  }

  // method setMainImage() => set the clicked img to MAIN IMG in the modal container

  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
  }


 // method closeModal() =>  close the modal container
  closeModal() {
    this.modal.classList.remove('open');
    this.closeBtn.removeEventListener('click', this.closeModal);
    this.nextBtn.removeEventListener('click', this.nextImage);
    this.prevBtn.removeEventListener('click', this.prevImage);
    this.modalImages.removeEventListener('click', this.chooseImage);
  }


   // method nextImage() =>    set the next img to MAIN IMG in the container modal


  nextImage() {
    const selected = this.modalImages.querySelector('.selected');
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove('selected');
    next.classList.add('selected');
    this.setMainImage(next);
  }


  // method prevImage() =>  set the previous img to MAIN IMG in the container modal


  prevImage() {
    const selected = this.modalImages.querySelector('.selected');
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    this.setMainImage(prev);
  }

  // method chooseImage() =>  let change the MAIN IMG selecting another img of carrousel list.


  chooseImage(e) {
    if (e.target.classList.contains('modal-img')) {
      const selected = this.modalImages.querySelector('.selected');
      selected.classList.remove('selected');

      this.setMainImage(e.target);
      e.target.classList.add('selected');
    }
  }
}


//create two gallery objects for each section images types

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));