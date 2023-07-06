const ingredients: string[] = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector(
  "#ingredients"
) as HTMLUListElement;

type MakeList = (ingredients: string[]) => HTMLElement[];

const makeList: MakeList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = ingredient;
    console.log(listItem);
    return listItem;
  });
};

const list = makeList(ingredients);

ingredientsEl.append(...list);

export {};
