function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

const navigation = document.querySelector("#navigation");

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 3,
      setWrapperSize: true,
    },
  },
});

const swiper1 = new Swiper(".Swiper-content", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination2",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let copyIcon = document.getElementById("copy-icon");
let email = document.getElementById("email");
let tooltipText = document.querySelector(".tooltip-text");

copyIcon.addEventListener("click", function () {
  let tempElement = document.createElement("textarea");
  tempElement.value = email.textContent;

  document.body.appendChild(tempElement);

  tempElement.select();
  tempElement.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(tempElement);

  copyIcon.classList.remove("fa-copy");
  copyIcon.classList.add("fa-check");
  copyIcon.setAttribute("aria-label", "Copiado");

  tooltipText.textContent = "Copiado";

  setTimeout(function () {
    copyIcon.classList.remove("fa-check");
    copyIcon.classList.add("fa-copy");
    copyIcon.setAttribute("aria-label", "Copiar");

    tooltipText.textContent = "Copiar";
  }, 3000);
});

const openModal = document.querySelector("#openModal");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog button");
let currentScrollPosition = window.scrollY || window.pageYOffset;

openModal.onclick = function (event) {
  event.preventDefault();
  currentScrollPosition;
  modal.showModal();
};

buttonClose.onclick = function () {
  modal.close();
};

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`);

window.addEventListener("scroll", onScroll);
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(portfolio);
  activateMenuAtCurrentSection(contact);
}

onScroll();
