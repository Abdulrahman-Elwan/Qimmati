document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsList = document.getElementById("cartItemsList");
    const clearCartButton = document.getElementById("clearCart");
    const subtotalElement = document.getElementById("ubtotal");
    const couponInput = document.getElementById("coupon");
    const couponButton = document.querySelector(".btn-primary");

    function updateSubtotal() {
        let subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        subtotalElement.innerHTML = `Subtotal: <strong>${subtotal.toFixed(2)} SAR</strong>`;
    }

    function applyDiscount() {
        let subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        let discountCode = couponInput.value.trim();

        if (discountCode === "abdelrahman2020") {
            subtotal *= 0.90; // خصم 10%
        }

        subtotalElement.innerHTML = `Subtotal: <strong>${subtotal.toFixed(2)} SAR</strong>`;
    }

    function displayCart() {
        cartItemsList.innerHTML = "";

        if (cart.length === 0) {
            cartItemsList.innerHTML = "<li>السلة فارغة 🛒</li>";
        } else {
            cart.forEach((item, index) => {
                let div = document.createElement("div");
                div.classList.add("cart-item");

                div.innerHTML = `
                    <div class="cart-item-info">
                        <img src="${item.img}" alt="${item.title}">
                    </div>

                    <div class="quantity_price">
                        <span class="product-title">${item.title}</span>
                        <div class="quantity_price2">
                            <div class="cart-item-quantity">
                                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">−</button>
                                <span id="quantity-${index}">${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                            </div>

                            <div class="cart-item-price">
                                <span>${item.price} <img class="sar" src="assets/imge/SAR.png" alt="SAR"></span>
                                <button onclick="removeFromCart(${index})" class="remove-btn">x</button>
                            </div>
                        </div>
                    </div>
                `;

                cartItemsList.appendChild(div);
            });
        }

        updateSubtotal(); // تحديث المجموع بعد تحميل السلة
    }

    window.updateQuantity = function (index, change) {
        if (cart[index]) {
            let newQuantity = parseInt(cart[index].quantity) + change;

            if (newQuantity >= 1) {
                cart[index].quantity = newQuantity;
                localStorage.setItem("cart", JSON.stringify(cart));

                // تحديث الكمية في الوقت الفعلي دون إعادة تحميل الصفحة
                document.getElementById(`quantity-${index}`).textContent = newQuantity;

                // تحديث الإجمالي مباشرة
                updateSubtotal();
            }
        }
    };

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    };

    clearCartButton.addEventListener("click", function () {
        localStorage.removeItem("cart");
        cart = [];
        displayCart();
    });

    couponButton.addEventListener("click", applyDiscount);

    displayCart(); // عرض السلة عند تحميل الصفحة
});
