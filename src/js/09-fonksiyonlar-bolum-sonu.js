var username = prompt("Kullanıcı Adınızı Giriniz");
var date = document.querySelector("#date");
var welcome = document.querySelector("#welcome");

welcome.innerHTML= "Merhaba, "+ username +"! Hoşgeldin!";



function zaman() {

    let now = new Date() // Date() metodu JS'nin hazır olarak tarih verdiği bir uygulama 

    let day = now.toLocaleDateString('tr-TR', { weekday: 'long' }) // tr-TR ile day ogemize gun isimlerini turkce olarak almasini sagladik.

    let time = now.toLocaleTimeString('tr-TR')  //anlik zamanı yine turkiyeye göre ayarladık ve atamasini gerceklestirdik.

    let myClock = document.querySelector("#date") // DOM ile saati yazdıracağımız div' e ulaştık

    myClock.innerHTML = time + ' ' + day // dom ile ulastigimiz div'e innerHTML ile ekrana cikti vermemiz saglandi

    

}
setInterval (zaman)