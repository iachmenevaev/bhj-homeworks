const progress = document.getElementById('progress');
const submit = document.getElementById('form');
submit.addEventListener('submit',(e) => {
    e.preventDefault();
    sendFile();
})
function sendFile(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST',' https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.setRequestHeader('content-Type', 'multpart/form-data');
    xhr.upload.addEventListener('progress',(e) => {
        const {loaded,total} = e;
        Progress(loaded,total);
    })
    xhr.send(new FormData(submit));
}
function Progress(loadedData, totalData){
    progress.value = (loadedData/totalData).toFixed(2);
}