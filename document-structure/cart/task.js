const controlBtn = [...document.getElementsByClassName('product__quantity-control')];
const counters = [...document.getElementsByClassName('product__quantity-value')];
const btn = [...document.getElementsByClassName('product__add')];
const cartContainer = document.querySelector('.cart__products');
const cart =[];

controlBtn.forEach((item) => item.addEventListener('click',(e) => {
    const counter = (e.target.closest('.product__quantity-controls')).querySelector('.product__quantity-value');
    let counterValue = parseInt((e.target.closest('.product__quantity-controls')).querySelector('.product__quantity-value').textContent);
    const mark = e.target.innerText;
    let element = document.getElementById('clicker__counter');
    console.log
    console.log(counterValue);
    console.log(typeof mark);
    if (mark == "-" && counterValue == 0){
        counter.textContent = 0;
    }
    else if (mark == "+"){
        counterValue+=1;
        counter.textContent = counterValue;
      }
    else if (mark == "-"){
        counterValue-=1;
        counter.textContent = counterValue;
    }
       
}))

 btn.forEach((btn) => btn.addEventListener('click',(e) =>{
     e.preventDefault();
     const currentElement = e.target;
     addProductInCart(currentElement);
   }))
   function addProductInCart(elem){
    const id = +elem.closest('.product').dataset.id;
    console.log(id);
    const imgURL = elem
      .closest('.product')
      .querySelector('.product__image')
      .getAttribute('src');
    const productCount = +elem
      .previousElementSibling.querySelector('.product__quantity-value')
      .textContent;
    console.log(productCount);
    const findProduct = cart.find((product) => id === product.id);
    if (findProduct) {
      const cartElement = document
        .querySelector(`.cart__product[data-id="${findProduct.id}"]`)
        .querySelector('.cart__product-count');
      cartElement.textContent = +cartElement.textContent + productCount;
      return;
    }
    const cartObject = {
      id,
      imgURL,
      productCount,
    };
    cart.push(cartObject);
   
       const template = templateProduct(cartObject);
       cartContainer.insertAdjacentHTML('afterbegin', template);
     }

     function templateProduct({ id, imgURL, productCount }) {
        return `
          <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${imgURL}" alt="Cart picture">
            <div class="cart__product-count">${productCount}</div>
          </div>
        `;
      }
