const body = document.body;
const list = body.children[1];

const listItems = list.children;
console.log("Number of categories:", listItems.length);

const firstHeading = listItems[0].firstElementChild;
console.log("Category :", firstHeading.textContent);
console.log("Elements:", listItems[0].children[1].children.length);

const secondHeading = listItems[1].firstElementChild;
console.log("Category:", secondHeading.textContent);
console.log("Elements:", listItems[1].children[1].children.length);

const thirdHeading = listItems[2].firstElementChild;
console.log("Category:", thirdHeading.textContent);
console.log("Elements:", listItems[2].children[1].children.length);
