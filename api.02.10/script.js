const selectEstados = document.getElementById("date");
const selectMunicipios = document.getElementById("name");


function popularEstados(){
    
    fetch("https://brasilapi.com.br/api/feriados/v1/{ano}")
    .then(dados=>dados.json())
    .then(dados=>{
        //console.log(JSON.stringify(dados));// imprimir o json de retorno
        dados.forEach(date=>{
            console.log(date);
            const option = document.createElement("option");
            option.value = date.id;
            option.innerHTML = date.nome;
            selectDate.appendChild(option);
            
        });
        popularDate(selectDate.value);// carrega os municipios na primeira execução
    })
    
}
// recebe o nome de um estado e busca os municipuios dele via API pública

function popularMunicipios(date){
    console.log(date)
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${name}/municipios`)
    .then(dados=>dados.json())
    .then(dados=>{
        dados.forEach(name=>{
            console.log(JSON.stringify(dados));
            const opition = document.createElement("option");
            opition.value = municipio.nome;
            opition.innerHTML=municipio.nome;
            selectMunicipios.appendChild(opition);  
        })
        
    });
}

selectEstados.addEventListener("change", function(){
    popularMunicipios(this.value)
})
//chamar a função ao carregar a página

popularEstados();

