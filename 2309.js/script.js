// arquivos script.js
// pegar todos dd(s)
const dds = document.querySelectorAll("dd");
console.log(dds);
for(const dd of dds){
    dd.classList.add("ocultar");

}

const dts = document.querySelectorAll("dt");
for(const dt of dts){
    dt.addEventListener("click", function(){
        console.log(dt);
        const dd = dt.nextElementSibling;
        dd.classList.toggle("ocultar");
    });
}

// https://www.w3schools.com/jsref
