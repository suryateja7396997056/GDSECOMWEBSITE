// Cart and Checkout Logic

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  if (currentPage === 'cart.html') {
    renderCartPage();
  }

  if (currentPage === 'checkout.html') {
    renderCheckoutSummary();
    setupWhatsAppCheckout();
  }
});

// Render Cart Page
function renderCartPage() {
  const cartContainer = document.getElementById('cart-items-container');
  const cartSummary = document.getElementById('cart-summary');
  const cart = getCart();

  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart-msg">
        <i class="fa-solid fa-cart-shopping"></i>
        <h2>Your cart is empty</h2>
        <p style="margin: 15px 0;">Looks like you haven't added any items to your cart yet.</p>
        <a href="products.html" class="btn btn-primary">Shop Products</a>
      </div>
    `;
    if (cartSummary) cartSummary.style.display = 'none';
    return;
  }

  if (cartSummary) cartSummary.style.display = 'block';

  let html = `
    <table class="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
  `;

  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    html += `
      <tr>
        <td>
          <div class="cart-item-info">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div>
              <div class="cart-item-title">${item.name}</div>
              <div style="font-size: 0.9rem; color: var(--text-grey-brown);">${item.category}</div>
            </div>
          </div>
        </td>
        <td>${formatPrice(item.price)}</td>
        <td>
          <div class="qty-selector" style="width: fit-content; height: 35px;">
            <button class="qty-btn" style="height: 100%; width: 30px;" onclick="updateCartItemQty(${index}, -1)">-</button>
            <input type="number" class="qty-input" style="height: 100%; width: 40px;" value="${item.quantity}" readonly>
            <button class="qty-btn" style="height: 100%; width: 30px;" onclick="updateCartItemQty(${index}, 1)">+</button>
          </div>
        </td>
        <td style="font-weight: 600;">${formatPrice(itemTotal)}</td>
        <td>
          <button class="remove-btn" onclick="removeCartItem(${index})"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  cartContainer.innerHTML = html;

  // Update Summary
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryTotal = document.getElementById('summary-total');

  if (summarySubtotal) summarySubtotal.innerText = formatPrice(subtotal);
  if (summaryTotal) summaryTotal.innerText = formatPrice(subtotal);
}

function updateCartItemQty(index, change) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    localStorage.setItem('stimpt_cart', JSON.stringify(cart));
    updateCartCount();
    renderCartPage();
  }
}

function removeCartItem(index) {
  const cart = getCart();
  if (cart[index]) {
    cart.splice(index, 1);
    localStorage.setItem('stimpt_cart', JSON.stringify(cart));
    updateCartCount();
    renderCartPage();
    showToast("Item removed from cart");
  }
}

// Render Checkout Summary
function renderCheckoutSummary() {
  const orderItemsContainer = document.getElementById('checkout-order-items');
  const checkoutSubtotal = document.getElementById('checkout-subtotal');
  const checkoutTotal = document.getElementById('checkout-total');
  const cart = getCart();

  if (!orderItemsContainer) return;

  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  let html = '';
  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    html += `
      <div class="order-item">
        <div>
          <div style="font-weight: 600;">${item.name}</div>
          <div style="font-size: 0.9rem; color: var(--text-grey-brown);">Qty: ${item.quantity}</div>
        </div>
        <div style="font-weight: 600;">${formatPrice(itemTotal)}</div>
      </div>
    `;
  });

  orderItemsContainer.innerHTML = html;

  if (checkoutSubtotal) checkoutSubtotal.innerText = formatPrice(subtotal);
  if (checkoutTotal) checkoutTotal.innerText = formatPrice(subtotal);
}

// Setup WhatsApp Checkout
function setupWhatsAppCheckout() {
  const checkoutForm = document.getElementById('checkout-form');
  const OWNER_WHATSAPP_NUMBER = "919876543210"; // Placeholder

  if (!checkoutForm) return;

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('c-name').value;
    const phone = document.getElementById('c-phone').value;
    const address = document.getElementById('c-address').value;
    const city = document.getElementById('c-city').value;
    const pincode = document.getElementById('c-pincode').value;
    const notes = document.getElementById('c-notes').value;

    const cart = getCart();
    let orderDetails = '';
    let total = 0;

    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      orderDetails += `${index + 1}. ${item.name}
   Quantity: ${item.quantity}
   Price: ₹${item.price.toLocaleString('en-IN')}
   Total: ₹${itemTotal.toLocaleString('en-IN')}

`;
    });

    let message = `Hello STIMPT Jewelers, I want to place an order.

*Customer Details:*
Name: ${name}
Phone: ${phone}
Address: ${address}
City: ${city}
Pincode: ${pincode}

*Order Details:*
${orderDetails}*Grand Total: ₹${total.toLocaleString('en-IN')}*
`;

    if (notes) {
      message += `
Note:
${notes}
`;
    }

    message += `
Please confirm availability and delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show completion message
    showToast("Your order details are ready on WhatsApp. Please click send to confirm.");
    
    // Clear cart (optional based on preference, here we leave it until confirmed)
  });
}
