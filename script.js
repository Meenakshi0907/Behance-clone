//sorting most viewed most liked and recommended 
document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.querySelector('.sort select');
    const thumbnailsContainer = document.querySelector('.thumbnail-header');
    const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
    const thumbnails1 = Array.from(document.querySelectorAll('.thumbnail'));

    sortSelect.addEventListener('change', function() {
        const sortBy = this.value;

        // Sort thumbnails based on the selected option
        let sortedThumbnails;
        if (sortBy === 'Recommended') {
            sortedThumbnails = thumbnails1;// Recommended is default, no sorting needed
        } else if (sortBy === 'Most Liked') {
            sortedThumbnails = thumbnails.sort((a, b) => {
                const likesA = parseInt(a.querySelector('.likes').textContent.trim());
                const likesB = parseInt(b.querySelector('.likes').textContent.trim());
                return likesB - likesA;
            });
        } else if (sortBy === 'Most Viewed') {
            sortedThumbnails = thumbnails.sort((a, b) => {
                const viewsA = parseInt(a.querySelector('.views').textContent.trim());
                const viewsB = parseInt(b.querySelector('.views').textContent.trim());
                return viewsB - viewsA;
            });
        }

        // Clear the thumbnails container and append sorted thumbnails
        thumbnailsContainer.innerHTML = '';
        sortedThumbnails.forEach(thumbnail => thumbnailsContainer.appendChild(thumbnail));
    });
});

// JavaScript for Image Popup
document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail-img img');
    const modal = document.getElementById('popup-modal');
    const modalImg = document.getElementById('popup-img');
    const closeBtn = document.querySelector('.close-btn');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

//Search bar 
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const searchByImageBtn = document.getElementById('searchByImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const suggestions = document.getElementById('suggestions');

    searchInput.addEventListener('input', function() {
        showSuggestions(searchInput.value);
    });

    searchByImageBtn.addEventListener('click', function() {
        showImageSuggestions(searchInput.value);
    });

    function showSuggestions(value) {
        const searchInput = value.toLowerCase();
        const images = Array.from(document.getElementsByClassName('thumbnail'));
        const titles = images.map(image => image.querySelector('.thumbnail-info h4').innerText.toLowerCase());
        suggestions.innerHTML = '';

        if (searchInput) {
            const filteredTitles = titles.filter(title => title.includes(searchInput));
            filteredTitles.forEach(title => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.innerText = title;
                suggestionItem.onclick = () => {
                    document.getElementById('searchInput').value = title;
                    suggestions.innerHTML = '';
                    // Display only the selected image
                    images.forEach(image => {
                        const imageTitle = image.querySelector('.thumbnail-info h4').innerText.toLowerCase();
                        if (imageTitle === title) {
                            image.style.display = 'block';
                        } else {
                            image.style.display = 'none';
                        }
                    });
                };
                suggestions.appendChild(suggestionItem);
            });
        } else {
            // If the search input is empty, display all images
            images.forEach(image => {
                image.style.display = 'block';
            });
        }
    }

    function showImageSuggestions(value) {
        const searchInput = value.toLowerCase();
        const images = Array.from(document.getElementsByClassName('thumbnail'));
        suggestions.innerHTML = '';

        if (searchInput) {
            images.forEach(image => {
                const imageTitle = image.querySelector('.thumbnail-info h4').innerText.toLowerCase();
                if (imageTitle.includes(searchInput)) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        } else {
            // If the search input is empty, display all images
            images.forEach(image => {
                image.style.display = 'block';
            });
        }
    }
});


function inputclick(){
    window.location.replace("login.html");
    return false;
}

