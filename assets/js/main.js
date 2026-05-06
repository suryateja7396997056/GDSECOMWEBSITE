// Main Scripts for GDS Jewellers

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Update cart count on load
  updateCartCount();

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // Floating WhatsApp Button functionality
  const floatingWa = document.querySelector('.floating-wa');
  if (floatingWa) {
    floatingWa.addEventListener('click', (e) => {
      e.preventDefault();
      const OWNER_WHATSAPP_NUMBER = "919876543210"; // Placeholder
      window.open(`https://wa.me/${OWNER_WHATSAPP_NUMBER}`, '_blank');
    });
  }
});

// Toast Notification
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;

  container.appendChild(toast);

  // Remove toast after animation (3s)
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Global Cart Functions
function getCart() {
  const cartStr = localStorage.getItem('gds_cart');
  return cartStr ? JSON.parse(cartStr) : [];
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const countElements = document.querySelectorAll('.cart-count');
  
  countElements.forEach(el => {
    el.innerText = count;
  });
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) return;

  const existingItemIndex = cart.findIndex(item => item.id === product.id);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += parseInt(quantity);
  } else {
    cart.push({
      ...product,
      quantity: parseInt(quantity)
    });
  }

  localStorage.setItem('gds_cart', JSON.stringify(cart));
  updateCartCount();
  showToast("Product added to cart");
}
