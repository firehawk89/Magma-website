const benefitsItems = document.querySelectorAll(".items-list__item");

benefitsItems.forEach((benefitsItem) => {
  if (window.matchMedia("(min-width: 768px").matches) {
    benefitsItem.classList.add("wow", "animate__fadeIn", "animate__animated");
  } else {
    benefitsItem.classList.add(
      "wow",
      "animate__fadeInLeft",
      "animate__animated"
    );
  }
});
