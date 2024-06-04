// ============ Service Toggles =================

const servicesButtons = document.querySelectorAll(".service__item");

const servicesRight = document.querySelector(".services__right");

console.log(servicesButtons);

const getService = (category) => {
  const details = servicesData.find((item) => item.category == category);
  servicesRight.innerHTML = `
  <h3>${details.title}</h3>
  ${details.description.map((paragraph) => `<p>${paragraph}</p>`).join("")}
  `;
};

getService(servicesData[0].category); //front end

function removeAllActiveClasses() {
  servicesButtons.forEach((item) => item.classList.remove("active"));
}
servicesButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // const serviceClass = btn.classList[1];
    const serviceClass = btn.id;
    getService(serviceClass);
    removeAllActiveClasses();
    btn.classList.add("active");
  });
});

// =================== Mix =================
var mixer = mixitup(".projects__container", {
  animation: {
    enable: false,
  },
});
mixer.filter("*");

// Swiper plugin

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

console.log(swiper);
