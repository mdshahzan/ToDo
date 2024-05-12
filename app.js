let addBtn = document.querySelector(".submit");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
addBtn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = input.value;
    
    let btn = document.createElement("button");
    btn.classList.add("delete");
    btn.innerText = "Delete";
    li.appendChild(btn)
    
    ul.appendChild(li);
  input.value = "";
    
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName== "BUTTON"){
       let list = event.target.parentElement;
       list.remove();
    }
    
})