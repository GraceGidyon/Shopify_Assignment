// JavaScript for adding items to the cart
const cartIcon = document.querySelector('.cart-icon');
let cartCount = 0;

const cart = {};

function addItem(event) {
    event.preventDefault();
    const productId = event.target.getAttribute('data-id');
    const productName = event.target.getAttribute('data-name');

    if (!cart[productId]) {
        cart[productId] = {
            name: productName,
            quantity: 1
        };
    } else {
        cart[productId].quantity++;
    }

    updateCartCount();
    updateCartList();

    const quantitySpan = event.currentTarget.querySelector('.quantity');
    if (quantitySpan) {
        quantitySpan.textContent = cart[productId].quantity;
    }
}

function updateCartCount() {
    cartCount = Object.values(cart).reduce((total, product) => total + product.quantity, 0);
    cartIcon.textContent = `Cart (${cartCount})`;
}

function updateCartList() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';

    for (const productId in cart) {
        const product = cart[productId];
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} x ${product.quantity}`;
        cartList.appendChild(listItem);
    }
}