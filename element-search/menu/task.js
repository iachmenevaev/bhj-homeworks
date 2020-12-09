let arr = Array.from(document.getElementsByClassName('menu__link'));
console.log(arr);
arr.forEach(item => item.onclick = () => {
    if (item.closest('ul').className.includes('menu_main')){
        item.nextElementSibling.classList.toggle('menu_active');
        event.preventDefault();
} 
})