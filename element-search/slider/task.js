let left = document.querySelector(".slider__arrow");
let right =  document.querySelector(".slider__arrow_next");
left.onclick = Changeslide;
right.onclick = Changeslide;
let slides = Array.from(document.getElementsByClassName('slider__item'));
function Changeslide(){
    let index = slides.findIndex(currentValue => currentValue.className.includes('slider__item_active'));
    let element = slides[index];
    let elementNext =slides[0];
    element.classList.remove( 'slider__item_active');
    if (index < (slides.length-1)){
    let elementNext = slides[index+1];
    elementNext.classList.add('slider__item_active');
    }
    else {
       elementNext.classList.add('slider__item_active');
   }
 }
