let exploreButton = document.getElementById("exploreXButton");
let  explore = document.getElementById("explore");
window.onload = function () {
    document.querySelector('.right-container').classList.add('animate');
    document.querySelector('.left-container').classList.add('animate');
    document.querySelector('.about').classList.add('animate');
    document.querySelector('.explore').classList.remove('d-none');
};
exploreButton.onclick = function () {
    explore.classList.add("d-none");
    exploreButton.classList.add("testimonial-card")

};

