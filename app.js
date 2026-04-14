// Elementlarni tanlab olish
const heading = document.querySelector('#mainTitle');
const button = document.querySelector('.btn');
const box = document.querySelector('.box');

// Yangi element yaratish
const newText = document.createElement('p');
newText.textContent = "Bu yangi qo‘shilgan matn ✨";

// Button bosilganda ishlaydi
button.addEventListener('click', () => {
    box.appendChild(newText);

    // Style berish
    newText.style.color = "blue";
    newText.style.fontSize = "18px";
    newText.style.marginTop = "10px";

    // Sarlavhani o‘zgartirish
    heading.textContent = "Matn qo‘shildi ✅";
});
