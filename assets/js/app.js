import { api_key } from "./env.js";

document.addEventListener("DOMContentLoaded", function () {
  const api_url = "https://api.pexels.com/v1/search?query=nature&per_page=15";
  const image_grid = document.getElementById("image_grid");

  fetch(api_url, {
    headers: {
      Authorization: api_key,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.photos.forEach((photo) => {
        const img_element = document.createElement("img");
        img_element.src = photo.src.original;
        img_element.alt = photo.photographer;
        img_element.classList.add("loaded");
        image_grid.appendChild(img_element);
      });
    })
    .catch((error) => console.error(error));
});
