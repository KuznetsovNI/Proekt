
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);


function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
    
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');
    
            } else {

                closeDropdown();
    
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }
};


window.addEventListener('click', function (e) {

    if (e.target.closest('.dropdown-container') === null) {
        closeDropdown();
    }

});

function closeDropdown() { 
    console.log('run');
    
    document.querySelectorAll('.dropdown-container').forEach(function (container) { 
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
        menu.classList.remove('dropdown-active');
    });
}

document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) { 
    dropDownList.onmouseleave = closeDropdown;
});

/* ============================== navbar ============================== */
/* ============================== slider ============================== */

const slider = document.getElementById("slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".greeting__slider_element");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];
const sliderWidth = slider.clientWidth;

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
}

function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

/* ============================== slider ============================== */
/* ============================== support ============================== */

const enabledBox = document.support__main_form_flag.enabled;
const printBlock = document.getElementById("printBlock");

enabledBox.addEventListener("click", (e)=> printBlock.textContent = e.target.checked);

/* ============================== support ============================== */
/* ============================== GLOBAL ============================== */