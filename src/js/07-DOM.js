let tahmin = document.querySelector('#tahmin');
let tahminEt = document.querySelector('#tahminEt');
let sonuc = document.querySelector('#sonuc');

tahminEt.addEventListener("click", tahminSonuc);

function tahminSonuc() {
    let sayi = Math.floor(Math.random() * 10);
    
    if (tahmin.value == sayi && tahmin.value != ''){
        sonuc.innerHTML = ("Tebrikler Doğru Tahmin :)")
    }
    else if (tahmin.value != sayi && tahmin.value != ''){
        sonuc.innerHTML = ( "Malesef Yanlış Tahmin Tekrar Deneyiniz :(" )
    }
    else if (tahmin.value == ''){
        sonuc.innerHTML = ("Değer Girmeniz Gerekli")
    }
    
}