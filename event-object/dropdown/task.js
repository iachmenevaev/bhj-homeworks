let arr = Array.from(document.getElementsByClassName('dropdown__value'));
let drop = arr[0];
drop.onclick = () => {
   drop.nextElementSibling.classList.toggle('dropdown__list_active');
        event.preventDefault();
} 

let arrdroplist = Array.from(document.getElementsByClassName('dropdown__item'));
  
for ( let i = 0; i < arrdroplist.length; i ++ ) {
    function handler(){
         let element = arrdroplist[i];
        console.log(element);
        let elementTwo = element.querySelector(".dropdown__link");
        console.log(elementTwo);
        drop.textContent = elementTwo.innerHTML;
        event.preventDefault();
            }
    arrdroplist[i].addEventListener("click", handler);
}
          
      
    
  