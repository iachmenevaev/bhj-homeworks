let elements = Array.from(document.getElementsByClassName('tab'));
let elementstab = Array.from(document.getElementsByClassName('tab__content'));
elements.forEach(item => item.addEventListener('click',() => {
    let index = elements.indexOf(item);
    let indexTwo = elements.findIndex(currentValue => currentValue.className.includes('tab_active'));
    console.log(index);
    console.log(indexTwo);
    let elementNotActiveContent = elementstab[index];
    let elementNotActive = elements[index];
    let elementActive = elements[indexTwo];
    let elementActiveContent = elementstab[indexTwo];
   
    elementActive.classList.remove('tab_active');
    console.log(elementActiveContent);
    elementActiveContent.classList.remove('tab__content_active');
    console.log(elementActiveContent);
    item.classList.toggle('tab_active');
    elementNotActiveContent.classList.toggle('tab__content_active');
}));
