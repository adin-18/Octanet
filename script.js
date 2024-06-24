document.addEventListener('DOMContentLoaded', function() {
    const flavourButtons = document.querySelectorAll('.flavour-btn');
    const productName = document.getElementById('product-name');
    const flavourDescription = document.getElementById('flavour-description');
    const productImage = document.getElementById('product-image');
  
    flavourButtons.forEach(button => {
      button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const description = this.getAttribute('data-description');
        const image = this.getAttribute('data-image');
  
        productName.textContent = name;
        flavourDescription.textContent = description;
        productImage.src = image;
        productImage.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
          productImage.style.transform = 'scale(1)';
        }, 100);
      });
    });
  });
  