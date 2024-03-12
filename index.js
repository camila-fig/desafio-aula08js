// Descrição rápida da rotina alimentar de pessoas distintas

let pessoa1 = {
    manha: "tomar café com leite e comer um sanduíche",
    tarde: "almoçar algo saudável em casa e comer grãos como lanche da tarde",
    noite: "jantar bife de frango ou peixe com saladas"
};

function rotina (m, t, n){
    this.manha = m
    this.tarde = t
    this.noite = n
}

let pessoa2 = new rotina ("tomar café preto sem açucar", "almoçar em restaurante self-service", "comer lanche leve em casa" );
let pessoa3 = new rotina ("tomar suco e comer pão", "almoçar e lanchar na lanchonete da empresa", "comer ovos com salada em casa");
let pessoa4 = new rotina ("tomar chá com bolo", "almoçar em casa e comer fruta como lanche da tarde", "jantar em restaurante self-service");

let simulador = parseInt(prompt('De qual pessoa você deseja obter as informações de rotina alimentar? (Escreva um número de 1 a 4)'))

switch (simulador){
    case 1:
        for (const propriedade in pessoa1) {
        console.log(pessoa1[propriedade]);
        }
    break;
    case 2:
        for (const propriedade in pessoa2) {
            console.log(pessoa2[propriedade]);
            }
    break;
    case 3:
        for (const propriedade in pessoa3) {
            console.log(pessoa3[propriedade]);
            }
    break;
    case 4:
        for (const propriedade in pessoa4) {
            console.log(pessoa4[propriedade]);
            }
    break;
    default:
        alert("O número escolhido deve ser de 1 até 4.")
}

    