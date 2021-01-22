const container = document.getElementById('items');
const loaderElement = document.getElementById('loader');
document.addEventListener('DOMContentLoaded', () => getRateCurrency());
function getRateCurrency() {
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  }
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/',true);

xhr.send();
xhr.onreadystatechange = getCurrency;
 function getCurrency() {
    if(xhr.readyState === 4) {
    const v = JSON.parse(xhr.response).response.Valute;
    loaderElement.classList.remove('loader_active');
    let template = '';
    Object.values(v).forEach((element) => {
template += templateCurrency(element);
        });
 container.insertAdjacentHTML('afterbegin', template);
  }
 }
}
function templateCurrency({ CharCode, Value}) {
  return `
  <div class="item">
  <div class="item__code">${CharCode}</div>
  <div class="item__value">${Value}</div>
  <div class="item__currency">руб.</div>
</div>
`;
}