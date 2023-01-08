
function quotes(){
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then((data)=>{
        let random = Math.floor(Math.random()*data.length);
        document.querySelector('.text-area').innerHTML = data[random].text;
        document.querySelector('#author').innerHTML = data[random].author;
    })
}

document.addEventListener('DOMContentLoaded',function () {
    quotes();
})
document.querySelector('#btn').addEventListener('click',function () {
    quotes();
})