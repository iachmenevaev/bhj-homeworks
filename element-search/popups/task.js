let element = document.getElementById('modal_main');
console.log(element);
element.classList.add('modal_active');
element.onclick = close;
 function close() {
    element.classList.remove('modal_active');
     element.classList.toggle('modal__close');
 }
let elementtwo = document.getElementsByClassName('show-success');
let arr = Array.from(elementtwo);
let butn = arr[0];
let elementthree = document.getElementById('modal_success');
console.log (butn);
butn.onclick = show;
 function show (){
         elementthree.classList.add('modal_active');
 }