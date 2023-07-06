const list: HTMLUListElement = document.querySelector("#categories")!;

const listItems: HTMLLIElement[] = [...list.children] as HTMLLIElement[];
console.log(`Number of categories:`, listItems.length);

listItems.forEach((item: HTMLLIElement, index: number) => {
  console.log(`Category:`, item.firstElementChild!.textContent);
  console.log(`Elements:`, item.lastElementChild!.children.length);
});

export {};
