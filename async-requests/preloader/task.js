const container = document.getElementById('items');
const loaderElement = document.getElementById('loader');
document.addEventListener('DOMContentLoaded', () => getRateCurrency());
function getRateCurrency() {
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  }
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/',true);
xhr.onload = function currencyReturn(){
    let jsonResponse = xhr.response;
    let currency= JSON.parse(jsonResponse);
    console.log(currency);
    return currency;
    }
    xhr.send();
currencyReturn();
console.log (currency);
};
function addCurrency(currency) {
  const { Valute } = currency;
  console.log(currency);
  loaderElement.classList.remove('loader_active');
  let template = '';
  Object.values(Valute).forEach((element) => {
    template += templateCurrency(element);
  });
container.insertAdjacentHTML('afterbegin', template);
}
function templateCurrency({ CharCode, Value}) {
    return `
    <div class="item__code">
    USD
</div>
<div class="item__value">
    32
</div>
<div class="item__currency">
    руб.
</div>
    `
}

