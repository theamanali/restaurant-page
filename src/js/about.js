export function createAboutPage(mainContainer, body) {
  body.style.background = "#ae8544";
  body.style.backgroundSize = "cover";

  const aboutButton = document.getElementById("about-button");
  aboutButton.classList.add("current-nav-button");

  const aboutHeader = document.createElement("h1");
  aboutHeader.textContent = "About Us";
  aboutHeader.classList.add("content-header");
  mainContainer.appendChild(aboutHeader);

  const aboutWrapper = document.createElement("div");
  aboutWrapper.classList.add("about");
  mainContainer.appendChild(aboutWrapper);

  const contactInfoContainer = document.createElement("div");
  contactInfoContainer.classList.add("about-div");
  aboutWrapper.append(contactInfoContainer);

  const contactInfoHeader = document.createElement("h3");
  contactInfoHeader.textContent = "Contact Information";
  contactInfoHeader.classList.add("subcontent-header");
  contactInfoContainer.append(contactInfoHeader);

  const contactInfoPhone = document.createElement("p");
  contactInfoPhone.textContent = "Phone number: (123)-456-7890";
  contactInfoContainer.append(contactInfoPhone);

  const contactInfoEmail = document.createElement("p");
  contactInfoEmail.textContent = "Email address: contact@amansrestaurant.com";
  contactInfoContainer.append(contactInfoEmail);

  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("about-div");
  aboutWrapper.append(hoursContainer);

  const hoursHeader = document.createElement("h3");
  hoursHeader.textContent = "Hours";
  hoursHeader.classList.add("subcontent-header");
  hoursContainer.append(hoursHeader);

  const weekdayHours = document.createElement("p");
  weekdayHours.textContent = "Monday - Friday: 10:00 AM - 10:00 PM";
  hoursContainer.append(weekdayHours);

  const saturdayHours = document.createElement("p");
  saturdayHours.textContent = "Saturday: 11:00 AM - 11:00 PM";
  hoursContainer.append(saturdayHours);

  const sundayHours = document.createElement("p");
  sundayHours.textContent = "Sunday: Closed";
  hoursContainer.append(sundayHours);

  const addressContainer = document.createElement("div");
  addressContainer.classList.add("about-div");
  aboutWrapper.append(addressContainer);

  const addressHeader = document.createElement("h3");
  addressHeader.textContent = "Address";
  addressHeader.classList.add("subcontent-header");
  addressContainer.append(addressHeader);

  const address = document.createElement("p");
  address.textContent = "123 Foodie Street, Flavor Town, Culinary City, 12345";
  addressContainer.append(address);

  const mapIframe = document.createElement("iframe");
  mapIframe.width = "100%";
  mapIframe.height = "100%";
  mapIframe.style.border = "0";
  mapIframe.loading = "lazy";
  mapIframe.allowFullscreen = true;
  mapIframe.src =
    "https://www.google.com/maps/embed/v1/view?zoom=14&center=47.6516%2C-122.3082&key=AIzaSyCU5LV8sJIlZ-BqmPaCOhdLr-6s045ZSyQ";
  aboutWrapper.append(mapIframe);
}
