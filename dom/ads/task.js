const interval = 1000;
(function tick(){
    let arr = Array.from(document.getElementsByClassName('rotator__case'));
    let index = arr.findIndex(currentValue => currentValue.className.includes('rotator__case_active'));
    let element = arr[index];
    let elementNext =arr[0];
    element.classList.remove( 'rotator__case_active');
    if (index < (arr.length-1)){
    let elementNext = arr[index+1];
    elementNext.classList.add('rotator__case_active');
    elementNext.style.color = "green";
     }
    else {
       elementNext.classList.add('rotator__case_active');
       elementNext.style.color = 'yellow';
       
   }
   setTimeout(tick,interval);
})();