import restaurantInterior from "../img/restaurant-interior.jpg";

export function createHomePage(mainContainer, body) {
    body.style.background = `url(${restaurantInterior}) no-repeat center center fixed`;
    body.style.backgroundSize = 'cover';

    mainContainer.style.justifyContent = "center";
    mainContainer.style.alignItems = "center";

    const homeButton = document.getElementById("home-button");
    homeButton.classList.add("current-nav-button");

    const mainContent = document.createElement("div");
    mainContent.id = "content";
    mainContainer.appendChild(mainContent);

    const contentHeader = document.createElement("h1");
    contentHeader.textContent = "Welcome to Aman's Restaurant!";
    mainContent.appendChild(contentHeader);

    const contentSubtext = document.createElement("p");
    contentSubtext.classList.add("home-subtext");
    contentSubtext.textContent = "Experience the best dining in town.";
    mainContent.appendChild(contentSubtext);

    const bookTableButton = document.createElement("button");
    bookTableButton.textContent = "Book a table!";
    mainContent.appendChild(bookTableButton);
}


