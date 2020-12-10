
for (let index = 1; index <= 9; index++) {
   function getHole(index){
   let holeClick = document.getElementById(`hole${index}`);
   return holeClick;
 }
 let hole = getHole(index);
 let dead = document.getElementById("dead");
 let lost = document.getElementById("lost");

function holecheck(){
  if ( hole.className.includes ('hole_has-mole') === true) {
         let counter = parseInt(dead.innerHTML);   
          counter+=1;
          dead.textContent = counter;
   }else{
          let counterLost = parseInt(lost.innerHTML);   
          counterLost+=1;
          lost.textContent = counterLost;
  }
    if (dead.textContent === "10") {
          alert ("Вы победили!");
          dead.textContent = 0;
          lost.textContent = 0;
    } else if (lost.textContent === "5") {
           alert ("Вы проиграли");
           dead.textContent = 0;
           lost.textContent = 0;
    }
  }
    hole.onclick = holecheck;     
}
