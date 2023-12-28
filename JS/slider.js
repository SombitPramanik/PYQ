const slides = document.querySelectorAll(".slide");
let count = 0;
const maxCount = slides.length - 1;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
    console.log(count);
};

const next = () => {
    count++;
    if (count > maxCount) {
        count = 0; // Reset to 0 if it goes beyond the maximum index
    }
    slideImage();
};

const prev = () => {
    count--;
    if (count < 0) {
        count = maxCount; // Set to the maximum index if it goes below 0
    }
    slideImage();
};

// const left = document.getElementById("left");
// const right = document.getElementById("right");

// if(document.body.classList == "dark-mode"){
//     left.style.filter= "invert(100%)";
//     right.style.filter= "invert(100%)";

// }