const modalWindow = document.querySelector('.modal');
document.addEventListener('DOMContentLoaded',() =>{
    modalWindow.classList.add('modal_active');
})
modalWindow.addEventListener('click', (e) => {
    const currentTarget = e.target;
    if( currentTarget.classList.contains('modal__close')){
        modalWindow.classList.remove('modal_active');
        setCookie('user_cook','jhfgcdrghfbcgfm545',{
            path:'/',
            expires: new Date (Date.now()+1000000),
        });
      }
  });
function setCookie(name,value,options = {}){
    options = {
        path:'/',
        ...options,

    };
    if (options.expires instanceof Date ){
        options.expires.toUTCString();
    }
 let updated =`${encodeURIComponent(name)} =${encodeURIComponent(value)}`;

for (const optionKey in options){
    updated +=`;${optionKey}`;
    const optionValue = options[optionKey];
    if (optionValue !== true){
        updated +=`=${optionValue}`;
    }
}
document.cookie = updated;
}
function getCookie(name){
    const matches = document.cookie.match(
        new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`,
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1,
  });
}
