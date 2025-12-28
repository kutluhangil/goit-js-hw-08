import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

// 1️⃣ HTML markup oluştur
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join("");

// 2️⃣ Tek seferde DOM'a ekle
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// 3️⃣ SimpleLightbox başlat
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});