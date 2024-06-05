// ============ Service Toggles =================

const servicesButtons = document.querySelectorAll(".service__item");

const servicesRight = document.querySelector(".services__right");

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

// =========== Nav Toggle (small screens)

const navMenu = document.querySelector(".nav__menu");
const navOpenBtn = document.querySelector(".nav__toggle-open");
const navCloseBtn = document.querySelector(".nav__toggle-close");

navOpenBtn.addEventListener("click", () => {
  navMenu.style.display = "flex";
  navCloseBtn.style.display = "inline-block";
  navOpenBtn.style.display = "none";
});

const closeNavHandler = () => {
  navMenu.style.display = "none";
  navCloseBtn.style.display = "none";
  navOpenBtn.style.display = "inline-block";
};

navCloseBtn.addEventListener("click", closeNavHandler);

// close nav menu on click of nav link on small screens

const navItems = navMenu.querySelectorAll("a");
if (window.innerWidth < 767.98) {
  navItems.forEach((item) => {
    item.addEventListener("click", closeNavHandler);
  });
}

// toggle theme button

const themeBtn = document.querySelector(".nav__theme-btn");
const toggleThemeHandler = () => {
  const isDark = document.body.classList.toggle("dark");
  if (isDark) {
    themeBtn.innerHTML = themeBtn.innerHTML.replace("moon", "sun");
    localStorage.setItem("theme-mood", "dark");
  } else {
    themeBtn.innerHTML = themeBtn.innerHTML.replace("sun", "moon");
    localStorage.setItem("theme-mood", "");
  }
  // save current theme settings
  localStorage.setItem("theme-icon", themeBtn.innerHTML);
};
themeBtn.addEventListener("click", toggleThemeHandler);

window.addEventListener("load", () => {
  const themeMood = localStorage.getItem("theme-mood");
  const themeIcon = localStorage.getItem("theme-icon");

  document.body.classList = [themeMood];

  if (themeIcon) themeBtn.innerHTML = themeIcon;
});

// const icons = document.querySelectorAll("i");

// icons.forEach((icon) => {
//   const offset = Math.abs(icon.offsetWidth - icon.offsetHeight);
//   icon.style.paddingInline = offset / 2 + "px";
// });
