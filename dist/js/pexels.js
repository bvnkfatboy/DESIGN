const apiKey = "563492ad6f9170000100000106478257df94462d9ac138827daa8b38";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let page_num = 1;
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

async function fetchPhotos() {
    const data = await fetch(
      `https://api.pexels.com/v1/curated?page=${page_num}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: apiKey
        }
      }
    );
    const response = await data.json();
    console.log(response);
    display_images(response);
  }
  
  function display_images(response) {
    response.photos.forEach((image) => {



      const photo = document.createElement("div");
      photo.innerHTML = `<img src=${image.src.large}>
      `;
      document.querySelector(".image-container").appendChild(photo);
    });
  }

  
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        page_num++;
        fetchPhotos(page_num);
    }
})
  
  fetchPhotos(page_num);