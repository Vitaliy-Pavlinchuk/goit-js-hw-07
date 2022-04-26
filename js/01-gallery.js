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
    
const isGalleryImageEl = event.target.classList.contains("gallery__image");
if (!isGalleryImageEl) {
    return;
}
    
    const largeImgLink = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
<img src="${largeImgLink}" alt="${event.target.alt}">
`);
    instance.show();
}




