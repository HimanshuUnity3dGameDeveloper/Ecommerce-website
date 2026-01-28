const bar = document.querySelector("#bar");
const closebtn = document.querySelector("#close");
const nav = document.querySelector("#navbar");

if(bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add("active");
    })
}

if(closebtn){
    closebtn.addEventListener("click", ()=>{
        nav.classList.remove("active");
    })
}
