const signContainer = document.getElementById('signin');
const form = document.getElementById('signin__form');
const signElement = document.getElementById('signin');
const welcContainer = document.getElementById('welcome');
const loginElement = document.querySelector('.login__page');
document.addEventListener('DOMContentLoaded', () => {
      signElement.classList.add('signin_active');
})

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    submitForm();
})
function addWelcContainer(id){
    welcContainer.firstElementChild.textContent = id;
    welcContainer.classList.add('welcome_active');
   }
function submitForm(){
   let formData = new FormData(form); 
   let xhr = new XMLHttpRequest();
   xhr.open('POST','https://netology-slow-rest.herokuapp.com/auth.php');
   xhr.send(formData);
   xhr.onreadystatechange = getResponce;
   function getResponce(){
 if(xhr.readyState === 4) {
     const { success, user_id } =JSON.parse(xhr.response);
  if (!success) {
       alert('Неверный логин/пароль');
       return;
     }
    localStorage.setItem('userID', user_id);
    addWelcomeBlock(user_id);
  }
 function addWelcomeBlock(id) {
     welcContainer.firstElementChild.textContent = id;
     welcContainer.classList.add('welcome_active');
    signElement.classList.remove('signin_active');
       
  }
 }
}
