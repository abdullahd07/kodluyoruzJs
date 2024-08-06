let info = document.querySelector("#info");
let examGrade = prompt("Sınav Notunuzu Giriniz:");
let textInfo;

const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

if (examGrade >= 0 && examGrade <= 100) {
   
if (examGrade.trim() === "") {
    textInfo = "Boş değer girdiniz!";
} else if (examGrade >= 90 && examGrade <= 100) {
    textInfo = SMILE+ "AA =>" + examGrade;
} else if (examGrade >= 85 && examGrade < 90) {
    textInfo = SMILE+ "BA =>" + examGrade;
} else if (examGrade >= 80 && examGrade < 85) {
    textInfo = SMILE+ "BB =>" + examGrade;
} else if (examGrade >= 75 && examGrade < 80) {
    textInfo = SMILE+ "CB =>" + examGrade;
} else if (examGrade >= 70 && examGrade < 75) {
    textInfo = SMILE+ "CC =>" + examGrade;
} else if (examGrade >= 65 && examGrade < 70) {
    textInfo = SMILE+ "DC =>" + examGrade;
} else if (examGrade >= 60 && examGrade < 65) {
    textInfo = SMILE+ "DD =>" + examGrade;
} else if (examGrade >= 50 && examGrade < 60) {
    textInfo = SMILE+ "FD =>" + examGrade;
} else if (examGrade <= 49 && examGrade >= 0) {
    info.classList.replace("text-primary","text-danger")
    textInfo = FROWN + "FF =>" + examGrade ;
} else {
    textInfo = "Lütfen geçerli bir not giriniz!";
}
}
else  {
    textInfo="0-100 Arasında Bir Değer Giriniz"
}
info.innerHTML=textInfo;