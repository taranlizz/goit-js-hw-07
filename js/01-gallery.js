import { galleryItems } from "./gallery-items.js";

const refs = {
  galleryListEl: document.querySelector(".gallery"),
  galleryLinkEl: document.querySelector(".gallery__link"),
};

refs.galleryListEl.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);
refs.galleryListEl.addEventListener("click", onImgClick);

function onImgClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  createBasicLightbox(evt.target.dataset.source);
}

function createBasicLightbox(source) {
  const instance = basicLightbox.create(`<img src=${source}>`, {
    onShow: () => document.addEventListener("keydown", onEscClose),
    onClose: () => document.removeEventListener("keydown", onEscClose),
  });

  instance.show();

  function onEscClose(evt) {
    if (evt.code === "Escape") instance.close();
  }
}

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description } = {}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}
