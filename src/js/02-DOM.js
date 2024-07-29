document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector("#btnClick");

    if (btn)
    {
        btn.addEventListener("click",clicked)
        console.log ("bulundu")
            }
            else 
            console.log ("bulunamadı")

    function clicked(){
           alert("Butona Tıklandı");
           console.log ("tr test");
           } 
});
