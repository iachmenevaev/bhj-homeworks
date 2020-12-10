// задача 1
setInterval(time,1000);
let element= document.getElementById('timer');
elem = parseInt(element.innerHTML);
function time(){
 if(elem!=0){
 elem -=1;
 element.textContent = elem;
 }
  else   {alert('Вы победили в конкурсе!');
  clearInterval(time);
 }
}
