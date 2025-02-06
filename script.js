// JavaScript for Search Functionality and Back to Top Button
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-input');
    const searchForm = document.querySelector('.navSearch form');

    // Redirect to search results on form submission
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;
        }
    });

    // Back to Top Functionality
    const backToTopButton = document.querySelector('.back_to_top');
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
