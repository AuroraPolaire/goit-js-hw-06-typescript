interface Image {
  url: string;
  alt: string;
}

const images: Image[] = [
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

const galleryList = document.querySelector(".gallery") as HTMLUListElement;

type MakeGalleryCard = (url: string, alt: string) => string;

const makeGalleryCard: MakeGalleryCard = (url, alt) => {
  return `
<li class="gallery__item">
  <img class= "gallery__image" src="${url}" alt="${alt}" />
  </li>`;
};

const gallery = images
  .map(({ url, alt }) => makeGalleryCard(url, alt))
  .join("");
galleryList.insertAdjacentHTML("afterbegin", gallery);
