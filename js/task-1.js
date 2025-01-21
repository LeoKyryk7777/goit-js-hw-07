const categories = document.querySelectorAll(".item");
console.log(`Number of categories : ${categories.length}`);
categories.forEach((category) => {
    const title = category.querySelector(`h2`).textContent;
    console.log(`Category: ${title}`);
    const element = category.querySelectorAll(`li`).length;
    console.log(`Elements: ${element}`);
})



