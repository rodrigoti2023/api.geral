// json
// JvaScript Object Notation

// objetos em JS

const t1 = {
    titulo:"Tarefa 01",
    desc:"Descrição da tarefa",
    imprimir: function(){
        return `${this.titulo} - ${this.desc}`
    }

};

//pbjeto só com dados

const t2 = {
    titulo: "Tarefa 02",
    desc: "Descrição da tarefa 3"
}

//transfotrmei em json para api
const x = JSON.stringify(t2);
// fazer o contrario, transforma em objeto de novo
const y = JSON.parse(x);