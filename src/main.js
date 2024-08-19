import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPictures } from './js/pixabay-api.js';
import { updateGallery, showErrorMessage } from './js/render-functions.js';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  overlay: true,
  close: true,
  className: 'custom-lightbox',
});

const searchFormEl = document.querySelector('.js-search');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

searchFormEl.addEventListener('submit', event => {
  event.preventDefault();

  galleryEl.innerHTML = '';

  const searchStr = event.target.elements.search.value.trim();

  if (!searchStr) return;

  loaderEl.classList.toggle('is-hidden');

  getPictures(searchStr)
    .then(images => {
      if (!images.hits.length) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      updateGallery(images.hits);

      lightbox.refresh();
    })
    .catch(error => {
      showErrorMessage('Unknown error. Please try again!');
      console.error(error);
    })
    .finally(() => {
      loaderEl.classList.toggle('is-hidden');
    });
});
