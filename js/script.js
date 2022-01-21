
// Made By Youssef Elnaggar
// 20 / 1 / 2022
let bg  = document.querySelector(".bg");
let dark_button = document.querySelector('.i-dark');
let light_button = document.querySelector('.i-light');
dark_button.addEventListener('click', function(e) {

    e.target.style.display = "none";
    light_button.style.display = "block";
    bg.classList.add('light');
})

light_button.addEventListener('click', function(e) {

    e.target.style.display = "none";
    dark_button.style.display = "block";
    bg.classList.remove('light');
})
