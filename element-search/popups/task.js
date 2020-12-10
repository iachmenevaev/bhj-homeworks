let element = document.getElementById('modal_main');
element.classList.add('modal_active');
let cross = Array.from(document.getElementsByClassName('modal__close'));
console.log(cross);
cross.forEach(item => item.onclick = () => {
        item.closest('.modal_active ').classList.remove('modal_active');
})
let elementtwo = document.getElementsByClassName('show-success');
let arr = Array.from(elementtwo);
let butn = arr[0];
let elementthree = document.getElementById('modal_success');
console.log (butn);
butn.onclick = show;
 function show (){
         elementthree.classList.add('modal_active');
 }