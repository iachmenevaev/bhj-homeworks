let left = document.querySelector(".slider__arrow");
let right =  document.querySelector(".slider__arrow_next");

left.onclick = Changeslide;
right.onclick = Changeslide;
let slides = Array.from(document.getElementsByClassName('slider__item'));
function Changeslide(){
    let Index = slides.findIndex(currentValue => currentValue.className.includes('slider__item_active'));
    let element = slides[Index];
    if (Index < (slides.length-1)){
        element.classList.remove( 'slider__item_active');
    let elementNext= slides[Index+1];
    elementNext.classList.add('slider__item_active');
    }
    else {
       let elementNext =slides[0];
       element.classList.remove( 'slider__item_active')
       elementNext.classList.add('slider__item_active');
   }
 }
