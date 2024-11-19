 const searchIcon = document.getElementById('search-icon');
    const searchOverlay = document.getElementById('search-overlay');

    searchIcon.addEventListener('click', () => {
        searchOverlay.classList.toggle('active'); // Toggle overlay visibility
    });

document.addEventListener('click', (event) => {
        if (!searchOverlay.contains(event.target) && !searchIcon.contains(event.target)) {
            searchOverlay.classList.remove('active');
        }
    });
