import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsContainer = document.querySelector(".gallery");
const cardsMarcup = createColorCardsMarkup(galleryItems);
galleryItemsContainer.insertAdjacentHTML("beforeend", cardsMarcup);

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});