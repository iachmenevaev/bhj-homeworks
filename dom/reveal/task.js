document.addEventListener('scroll', () => {
let array = Array.from(document.getElementsByClassName('reveal'));
array.forEach((item) => {
const viewportHeight = window.innerHeight;
const elementTop = item.getBoundingClientRect().top; 
if( elementTop < viewportHeight ||(!item.offsetWidth && !item.offsetHeight) ){
    item.classList.add("reveal_active");
}
})
})