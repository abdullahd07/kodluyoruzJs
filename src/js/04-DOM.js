let firstItem = document.querySelector("#liste>li:first-Child");
firstItem.innerHTML += " (ilk değer)"

let ulDom = document.querySelector("#liste");
let liDom = document.createElement("li");
let lastItem = document.createElement("li");
liDom.innerHTML = "yeni değer";
lastItem.innerHTML = "son değer";
ulDom.prepend(liDom);
ulDom.append(lastItem);
console.log(firstItem);
