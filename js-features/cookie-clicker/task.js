const image = document.getElementById('cookie');



function changeSizes() {
    
    let element = document.getElementById('clicker__counter');
     let counter = parseInt(element.innerHTML);   
    counter+=1;
    element.textContent = counter;
    if (counter%2 ==0){
        image.width = 240;
        image.height = 220; 
    }else{
        image.width = 270;
        image.height = 260; 
    }
    }
    image.onclick = changeSizes;
