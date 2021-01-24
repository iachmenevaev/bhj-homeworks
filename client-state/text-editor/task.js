const textarea = document.getElementById('editor');
document.addEventListener('DOMContentLoaded',() => getDataFromStorage());
textarea.addEventListener('input',() => setDataToLocalStorage());
function setDataToLocalStorage(){
    localStorage.setItem('text', textarea.value);

}
function getDataFromStorage(){
    textarea.value = localStorage.getItem('text');
}