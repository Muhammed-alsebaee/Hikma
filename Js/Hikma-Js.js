document.getElementById("myBtn").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})

let toggle = document.getElementById('toggleDark');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
    }
});