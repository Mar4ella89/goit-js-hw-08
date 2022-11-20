// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(SimpleLightbox)

const ref = {
  imgRef: document.querySelector('div.gallery'),
};

const creatImgList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></div>`
  )
  .join('');

const imgAdd = () => {
  ref.imgRef.insertAdjacentHTML('beforeend', creatImgList);
};

imgAdd();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  disableScroll: false,
  scrollZoom: false,
});
