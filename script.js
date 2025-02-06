document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const searchBox = document.getElementById("search");
    const scrollToTop = document.getElementById("scrollToTop");

    let cartItems = 0;

    // Add to Cart Functionality
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartItems++;
            cartCount.textContent = cartItems;
        });
    });

    // Search Functionality
    searchBox.addEventListener("input", (e) => {
        const searchText = e.target.value.toLowerCase();
        document.querySelectorAll(".product-card").forEach(card => {
            const name = card.dataset.name.toLowerCase();
            card.style.display = name.includes(searchText) ? "block" : "none";
        });
    });

    // Scroll to Top Button
    window.addEventListener("scroll", () => {
        scrollToTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    scrollToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
