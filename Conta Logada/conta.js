let nome = document.getElementById("nome");
let nomeUser = document.getElementById("user")
let saldo = document.getElementById("saldo");
let textArea = document.getElementById("textarea");
let msgTextArea = document.getElementById("msgTextArea");

let msgDep = document.getElementById("resposta");

let saldoPadrao = 1000;

let btnAdd = document.getElementById("adicionar");
let btnRetirar = document.getElementById("retirar");
let btnMsg = document.getElementById("btnMsg");

saldo.innerHTML = saldoPadrao;

function adicionar(){
    let depositar = parseFloat(document.getElementById("depositar").value);
    if (isNaN(depositar)){
        alert("Valor inválido.")
    } else{
        let saldoAtual = saldo.innerHTML =  saldoPadrao + depositar;
        saldoPadrao = saldoAtual;
        msgDep.innerHTML = "você depositou $" + depositar + " em sua conta";
    }
}

function retirar(){
    let sacar = parseFloat(document.getElementById("sacar").value);
    if (isNaN(sacar)){
        alert("Valor inválido.")
    } else{
        let saldoAtual =  saldo.innerHTML = saldoPadrao - sacar;
        saldoPadrao = saldoAtual;
        msgDep.innerHTML = "você sacou $" + sacar + " de sua conta";
    }
}

function comentario(){
    msgTextArea.innerHTML = textArea.value;
}

btnAdd.addEventListener("click", adicionar);
btnRetirar.addEventListener("click", retirar);
btnMsg.addEventListener("click", comentario);