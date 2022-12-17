const list = document.querySelector("#categories");

const listItems = [...list.children];
console.log(`Number of categories:`, listItems.length);

listItems.forEach((item, index) => {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
});
