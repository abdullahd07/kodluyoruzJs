let veri = document.querySelector("#veri");
let ekle = document.querySelector("#ekle");
let liste = document.querySelector("#liste")

ekle.addEventListener ("click",addList);
function addList () {
  let item = document.createElement("li") ;// li itemi oluşturuyoruz.
  item.textContent=veri.value; //input değerini iteme atıyoruz.
  liste.append(item); // listeye ekleme yapıyoruz.
  veri.value="";// ekleme işleminden sonra textbox içeriğini boşaltıyoruz.

}