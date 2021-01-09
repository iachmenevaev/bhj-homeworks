const messages = Array.from(document.querySelectorAll( 'a' ));
console.log(messages);

messages.forEach((item) => item.addEventListener('click', (e) => {
    console.log(item);
    e.preventDefault();
    showMessages(e.target);
}));
function showMessages(element){
const link = element;
const mess = Array.from(document.querySelectorAll( '.tooltip' ));
    if (link.nextElementSibling && link.nextElementSibling.classList.contains('tooltip')) {
        link.nextElementSibling.remove();
        return;
      }
    if (mess.length) {
        mess.forEach((item) => item.remove());
      }
const { left, bottom } = link.getBoundingClientRect();
const template = createElement(left, bottom, element.title);
      link.insertAdjacentHTML('afterend', template);
    
}
function createElement(left,bottom,title){
    return `
    <div class="tooltip tooltip_active" style="left: ${left}px; top: ${bottom}px">${title}</div>
  `;
}