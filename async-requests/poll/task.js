const pollBlock = document.querySelector('.poll');
const titleBlock = document.getElementsByClassName('poll__title');
const answerBlock = document.getElementById('poll__answers');
document.addEventListener('DOMContentLoaded', () => getNames());
document.addEventListener('click',(e)=> {
    const currentTarget = e.target;
    if (currentTarget.classList.contains('poll__answer')){
        showModal();
    }
else if (currentTarget.classList.contains('modal__close')){
    deleteModal(currentTarget);
}
});
function getNames(){
fetch('https://netology-slow-rest.herokuapp.com/poll.php')
    .then((response) => response.json())
    .then((response) => addPoll(response))
    .catch((err) => console.log(err));
}

function showModal(){
    const modal =
` <div class="modal__wrapper modal__active">
<div class="modal__body">
  <div class="modal__content">
    <div class="modal__text">
     <p>Спасибо, ваш голос засчитан!</p>
    </div>
    <hr>
    <button class="modal__close">Закрыть</button>      
  </div>
</div>  
</div> 
`;

pollBlock.insertAdjacentHTML('afterbegin',modal);
document.body.querySelector('.wrapper').classList.add('wrapper__modal');
}
function deleteModal(currentTarget){
    currentTarget.closest('.modal__wrapper').classList.remove('modal__active');
    currentTarget.closest('.modal__wrapper').remove();
    
}
function addPoll(currency){
    const { title, answers } = currency.data;
    const template = answers.map((answer) => `<button class="poll__answer">${answer}</button>`).join(' ');
    titleBlock.textContent = title;
    answerBlock.insertAdjacentHTML('afterbegin', template);
}
