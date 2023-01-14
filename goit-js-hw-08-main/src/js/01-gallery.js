import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const GALLERY = document.querySelector('.gallery');
showPreviewOfGalleryItems(galleryItems);
const lightbox = new SimpleLightbox('.gallery .gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showPreviewOfGalleryItems(galleryItems) {
  for (const item of galleryItems) {
    const htmlElement = `
      <div class="gallery__item">
        <a class="gallery__link" href=${item.original}>
          <img
            class="gallery__image"
            src=${item.preview}
            data-source=${item.original}
            alt=${item.description}
          />
        </a>
      </div>
    `;
    GALLERY.insertAdjacentHTML('beforeend', htmlElement);
  }
}
