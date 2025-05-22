import steakImg from "../img/steak.jpg";
import saladImg from "../img/salad.jpg";
import tenderImg from "../img/tender.jpg";
import pizzaImg from "../img/pizza.jpg";

const menuItems = [
    {
        name:        "Rib-Eye Steak",
        img:         steakImg,
        price:       "$35.00",
        description: "Tender rib-eye grilled to perfection, served with garlic butter and rosemary."
    },
    {
        name:        "Caesar Salad",
        img:         saladImg,
        price:       "$20.00",
        description: "Crisp romaine, house-made Caesar dressing, shaved parmesan, and croutons."
    },
    {
        name:        "Chicken Tenders",
        img:         tenderImg,
        price:       "$25.00",
        description: "Hand-breaded chicken strips served with honey mustard, BBQ, or ranch."
    },
    {
        name:        "Hawaiian Chicken Pizza",
        img:         pizzaImg,
        price:       "$30.00",
        description: "Tangy tomato sauce, melted mozzarella, smoked ham, and sweet pineapple."
    },
];

export function createMenuPage(mainContainer, body) {
    body.style.background = "#ae8544";
    body.style.backgroundSize = 'cover';

    const menuButton = document.getElementById("menu-button");
    menuButton.classList.add("current-nav-button");

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "The Menu";
    menuHeader.classList.add("content-header");
    mainContainer.appendChild(menuHeader);

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-container");
    mainContainer.appendChild(menuContent);

    menuItems.forEach(menuItem => {
        const menuItemDiv = formatMenuItem(menuItem);
        menuContent.appendChild(menuItemDiv);
    })
}

function formatMenuItem(menuItem) {
    const menuItemDiv = document.createElement("div")
    menuItemDiv.classList.add("menu-item");

    const itemHeader = document.createElement("h3");
    itemHeader.classList.add("subcontent-header");
    itemHeader.textContent = menuItem.name;
    menuItemDiv.appendChild(itemHeader);

    const itemImage = document.createElement("img");
    itemImage.classList.add("item-image");
    itemImage.setAttribute("src", menuItem.img);
    itemImage.setAttribute("alt", menuItem.name);
    menuItemDiv.appendChild(itemImage);

    const itemText = document.createElement("p");
    itemText.textContent = menuItem.description;
    menuItemDiv.appendChild(itemText);

    const itemPrice = document.createElement("p")
    itemPrice.textContent = menuItem.price;
    menuItemDiv.appendChild(itemPrice);

    return menuItemDiv;
}