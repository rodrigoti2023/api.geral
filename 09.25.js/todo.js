const form = document.querySelector("form");
const inputTitulo = document.getElementById("titulo");
const textareaDesc = document.getElementById("desc");
const divTarefas = document.getElementById("tarefas");


// tarefas iniciais
const tarefas = getTarefas();
   
function getTarefas(){
    const tarefasJSON = localStorage.getItem("tarefas");
    try {
        const tarefas = JSON.parse(tarefasJSON);
        return tarefas
    } catch (error) {
        return [];        
    }
}

function atualizarLista(){
    divTarefas.innerHTML = "";
    tarefas.forEach(t => {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.innerHTML = t.titulo;
        p.innerHTML = t.desc;
        div.appendChild(h3);
        div.appendChild(p);
        divTarefas.append(div);
    });
}
// salvar nova tarefa

form.addEventListener("submit", e=>{
    e.preventDefault();
    const novaTarefa = {
        titulo: inputTitulo.value,
        desc:textareaDesc.value,
    };
    tarefas.push(novaTarefa); // adicionar o obj final do array tarefas
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    atualizarLista();
});

atualizarLista();