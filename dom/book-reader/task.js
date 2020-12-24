let arr = Array.from(document.getElementsByClassName('font-size'));
console.log(arr);
arr.forEach( item => item.onclick = () => {
let element = document.getElementById('book');
    console.log(item);
 if(item.className.includes('font-size_small') === true){
    element.classList.remove('book_fs-big');
    element.classList.add('book_fs-small');
 }else if(item.className.includes('font-size_big') === true){
    element.classList.remove('book_fs-small');
    element.classList.add('book_fs-big');
}else{
    element.classList.remove('book_fs-small');
    element.classList.remove('book_fs-big');
}
event.preventDefault();
});
