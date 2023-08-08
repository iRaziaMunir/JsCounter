let count =0;
const counter = document.getElementById("count");
const addBtn = document.getElementById("addCountBt");
const subtractBtn = document.getElementById("subtractCountBt");
counter.innerText = count;


addBtn.addEventListener("click",()=>{
    count ++; 
    counter.innerText = count;
})


subtractBtn.addEventListener("click",()=>{
    count --; 
    counter.innerText = count;
})