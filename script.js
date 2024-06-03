
function highlightAndRedirect(event, element) {
    event.preventDefault();
    
    // Додайте клас "highlighted" до батьківського елемента
    element.parentNode.classList.add('highlighted');
    
    // Змініть кольори елементів в середині "product-details" при наведенні
    var productDetails = element.querySelector('.product-details');
    var elementsToHighlight = productDetails.querySelectorAll('h3, .price, .btn');
    for (var i = 0; i < elementsToHighlight.length; i++) {
        elementsToHighlight[i].classList.add('highlighted');
    }
    
    // Затримка на 500 мс перед перенаправленням на сторінку dress.html
    setTimeout(function() {
        window.location.href = element.getAttribute('href');
    }, 500);
}
// Отримуємо елементи з HTML
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Додаємо обробник події для кнопки пошуку
searchButton.addEventListener('click', () => {
  const searchQuery = searchInput.value;
  // Виконуємо необхідні дії з введеними даними пошуку (наприклад, перенаправлення на сторінку з результатами)
  // Тут ви можете виконати потрібну логіку для вашого веб-сайту
  console.log(`Виконано пошук: ${searchQuery}`);
});
function toggleDropdown(element) {
    const dropdownContent = element.nextElementSibling;
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}
