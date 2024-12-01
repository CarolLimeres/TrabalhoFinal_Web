// pegando todas as imagens com a classe específica:
function filterCategory(type) {
  let images = document.querySelectorAll(".portfolio img");

  images.forEach((image) => {
    if (image.classList.contains(type)) {
      image.classList.remove("hide");
    } else {
      image.classList.add("hide");
    }
  });
}

function showAll() {
  let images = document.querySelectorAll(".portfolio img");

  images.forEach((image) => {
    image.classList.remove("hide");
  });
}
