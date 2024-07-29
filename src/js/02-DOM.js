document.addEventListener("DOMContentLoaded", function () {

    let paragraf = document.querySelector("p");

    if (paragraf) {
        paragraf.innerHTML = "DOM Manipülasyonu yaptık!";
        paragraf.style.color ="red"
    }
    else {
        console.log("paragraf id değeri bulunamadı")
    }

    



    let btn = document.querySelector("#btnClick");

    if (btn) {
        btn.addEventListener("click", clicked)
    }
    else

        function clicked() {
            alert("Butona Tıklandı");
        }

});
