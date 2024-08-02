let content = document.querySelector("#content");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let item = document.querySelector("#item");
let replace = document.querySelector("#replace");
let paragraf = document.querySelector(".paragraf");
let contains = document.querySelector("#contains");

add.addEventListener("click",addEvent);
remove.addEventListener("click",removeEvent);
replace.addEventListener("click",replaceClass);
item.addEventListener("click",itemList);
contains.addEventListener("click",isContains);


function addEvent (){
    content.classList.add ('color');
}

function removeEvent (){
    content.classList.remove ('color','colorTwo');
}

function replaceClass (){
    
    content.classList.replace ('color','colorTwo');
}

function itemList () {   
    console.log(paragraf.classList.item(0))
    console.log(paragraf.classList.contains("paragraf"));
}

function isContains (){
    alert(paragraf.classList.contains("paragraf"))
}