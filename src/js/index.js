import "../css/styles.css";
import {createHomePage} from "./homepage";

const mainContainer = document.getElementById("container");
const navBar = document.querySelector("nav");
createHomePage(mainContainer);

navBar.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && !e.target.classList.contains("current-nav-button")) {
        resetToTemplate();
    }

    if (e.target.id === "home-button" && !e.target.classList.contains("current-nav-button")) {
        createHomePage(mainContainer);
    }
    else if (e.target.id === "menu-button") {
        createMenuPage(mainContainer);
    }
    else if (e.target.id === "about-button") {
        createAboutPage(mainContainer);
    }
})

function resetToTemplate() {
    mainContainer.replaceChildren();
}