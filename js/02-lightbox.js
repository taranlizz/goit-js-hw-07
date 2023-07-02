import { galleryItems } from "./gallery-items.js";

const refs = {
  galleryListEl: document.querySelector(".gallery"),
  galleryLinkEl: document.querySelector(".gallery__link"),
  galleryImgEl: document.querySelector(".gallery__image"),
};

refs.galleryListEl.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);

createSimpleLightbox();

function createSimpleLightbox() {
  return new SimpleLightbox(".gallery .gallery__link", {
    captionSelector: ".gallery__image",
    captionsData: "alt",
    captionDelay: 250,
  });
}

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description } = {}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}
