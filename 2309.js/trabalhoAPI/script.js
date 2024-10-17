const nomeDDD=document.getElementById("DDD");
const form=document.querySelector("form");
const estadoDiv=document.getElementById("estado");
console.log(nomeDDD);


form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(nomeDDD.value);

    fetch(`https://brasilapi.com.br/api/ddd/v1/${nomeDDD.value}`)
    .then(response => response.json())
    .then(result => {             
        const estado=`Este DDD pertence ao Estado ${result.state}`;
        const p=document.createElement("p");
        p.innerHTML=estado;
        estadoDiv.innerHTML="";
        estadoDiv.appendChild(p);

        
    })
    .catch(error => console.log('error', error));
});