import "../css/styles.css";
import {createHomePage} from "./homepage";
import {createMenuPage} from "./menu";
import {createAboutPage} from "./about";

const mainContainer = document.getElementById("container");
const body = document.querySelector("body");
const navBar = document.querySelector("nav");
createHomePage(mainContainer, body);

navBar.addEventListener("click", (e) => {
    body.style.transition = "0.2s";
    if (e.target.tagName === "BUTTON" && !e.target.classList.contains("current-nav-button")) {
        resetToTemplate();
    }

    if (e.target.id === "home-button" && !e.target.classList.contains("current-nav-button")) {
        createHomePage(mainContainer, body);
    }
    else if (e.target.id === "menu-button" && !e.target.classList.contains("current-nav-button")) {
        createMenuPage(mainContainer, body);
    }
    else if (e.target.id === "about-button" && !e.target.classList.contains("current-nav-button")) {
        createAboutPage(mainContainer, body);
    }
})

function resetToTemplate() {
    mainContainer.replaceChildren();

    mainContainer.style.justifyContent = "";
    mainContainer.style.alignItems = "";

    const buttonList = navBar.querySelectorAll("button");
    for (let i = 0; i < buttonList.length; i++) {
        if (buttonList[i].classList.contains("current-nav-button")) {
            buttonList[i].classList.remove("current-nav-button");
        }
    }
}