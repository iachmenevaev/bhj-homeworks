let element = document.getElementById('modal_main');
element.classList.add('modal_active');
let cross = Array.from(document.getElementsByClassName('modal__close'));
cross.forEach(item => item.onclick = () => {
        item.closest('.modal_active ').classList.remove('modal_active');
})
let elementTwo = document.getElementsByClassName('show-success');
let arr = Array.from(elementTwo);
let butn = arr[0];
let elementThree = document.getElementById('modal_success');
butn.onclick = show;
 function show (){
        element.classList.remove('modal_active');
        elementThree.classList.add('modal_active');
 }