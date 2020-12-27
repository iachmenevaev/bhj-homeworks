const sideButton = document.querySelector('.chat-widget__side-text');
sideButton.onclick = () => {
    const chart = document.querySelector('.chat-widget');
     chart.classList.add('chat-widget_active');
}
document.addEventListener('keyup', (e) =>{
    const tekst = document.getElementById('chat-widget__input');
    const messages = document.querySelector( '.chat-widget__messages' );
if ( tekst.value !== "" && e.key =="Enter"){
messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">09:21</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
`;
let arr = document.getElementsByClassName('message__text');
let arrTwo = document.getElementsByClassName('message__time')
let index = arr.length-1;
arr[index].innerHTML = tekst.value;
let mydate = new Date();
let h = mydate.getHours(); //Hours
let m = mydate.getMinutes();//Minutes
let time = h + ':' + m;
arrTwo[index].innerHTML = time; 
tekst.value = "";
index=index+1;
messages.innerHTML += `
   <div class="message">
     <div class="message__time">09:21</div>
     <div class="message__text">
       Добрый день, мы ещё не проснулись. Позвоните через 10 лет
     </div>
   </div>
 `;
let botArray =['Давай досвидания!',
                  'К сожалению, все операторы заняты.Выпейте кофе с виски.',
                  'Мы не будем ничего вам продавать',
                  'Хватит жадничать,покупайте уже']
let  getRandomArrIndex = Math.floor( (Math.random() * botArray.length) + 0);
let  getAnswer = botArray[getRandomArrIndex];
arr[index].innerHTML = getAnswer;
arrTwo[index].innerHTML = time; 
   }
})
