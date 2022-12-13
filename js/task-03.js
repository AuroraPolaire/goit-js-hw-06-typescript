const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

const makeGalleryCard = ({ url, alt }) => {
  return `
<li class="gallery__item">
  <img class= "gallery__image" src="${url}" alt="${alt}"
  </li>`;
};

const gallery = images.map(makeGalleryCard).join("");
galleryList.insertAdjacentHTML("afterbegin", gallery);

//! with .createElement and .append //

// const galleryList = document.querySelector(".gallery");

// const makeGalleryCard = (image) => {
//   const { url, alt } = image;
//   const imageListItem = document.createElement("li");
//   const imageItem = document.createElement("img");

//   imageItem.src = url;
//   imageItem.alt = alt;

//   imageListItem.append(imageItem);

//   return imageListItem;
// };

// const gallery = images.map(makeGalleryCard);
// galleryList.append(...gallery);
