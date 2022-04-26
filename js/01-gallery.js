import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


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

galleryItemsContainer.addEventListener("click", onClickGallery);

function onClickGallery(event) {
  event.preventDefault();
  const isgalleryImageEl = event.target.classList.contains("gallery__image");
  if (!isgalleryImageEl) {
    return;
  }

  const urlSource = event.target.dataset.source;
    createModal(urlSource);
}

function createModal(x) {
  const instance = basicLightbox.create(
    `
    <div class="modal">
<img src="${x}"/>
    </div>
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscClose);
        function onEscClose(event) {
          if (event.code == "Escape") {
            instance.close();
            document.removeEventListener("keydown", onEscClose);
          }
        }
      },
    }
  );

  instance.show();
}



