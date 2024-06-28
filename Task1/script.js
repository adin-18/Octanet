document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const flavourBtns = document.querySelectorAll('.flavour-btn');
  const navToggle = document.getElementById('navToggle');
  const navClose = document.getElementById('navClose');
  const navMenu = document.getElementById('navMenu');
  const productName = document.getElementById('productName');
  const productDescription = document.getElementById('productDescription');

  let currentRotation = 0;

  const products = {
    mango: {
      name: "Mango Madness",
      description: "Experience the rich and refreshing taste of mango."
    },
    strawberry: {
      name: "Strawberry Splash",
      description: "Enjoy the sweet and tangy flavor of strawberries."
    },
    guava: {
      name: "Guava Groove",
      description: "Savor the exotic and tropical taste of guava."
    }
  };

  function updateProductInfo(flavor) {
    productName.textContent = products[flavor].name;
    productDescription.textContent = products[flavor].description;
  }

  flavourBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      currentRotation = index * -120;
      slider.style.transform = `rotateY(${currentRotation}deg)`;
      updateProductInfo(btn.dataset.flavor);
    });
  });

  navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });

  navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });

  // Auto-rotate slider
  setInterval(() => {
    currentRotation -= 120;
    slider.style.transform = `rotateY(${currentRotation}deg)`;
    const currentFlavor = flavourBtns[Math.abs(currentRotation / 120) % 3].dataset.flavor;
    updateProductInfo(currentFlavor);
  }, 5000);

  // Add 3D effect to slider
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.transform = `rotateY(${index * 120}deg) translateZ(300px)`;
  });

  // Initial product info
  updateProductInfo('mango');
});