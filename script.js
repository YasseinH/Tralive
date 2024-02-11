let nav = document.querySelector("header .container nav");
let bars = document.querySelector(".fa-bars");
bars.addEventListener('click', () => {
    nav.classList.toggle('active');
});