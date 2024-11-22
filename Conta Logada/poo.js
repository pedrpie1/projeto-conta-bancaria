class Conta {
    constructor(nome, saldoInicial = 1000) {
        this.nome = nome;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        if (isNaN(valor) || valor <= 0) {
            throw new Error("Valor inválido para depósito.");
        }
        this.saldo += valor;
        return `Você depositou $${valor} em sua conta.`;
    }

    sacar(valor) {
        if (isNaN(valor) || valor <= 0) {
            throw new Error("Valor inválido para saque.");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
        return `Você sacou $${valor} de sua conta.`;
    }

    getSaldo() {
        return this.saldo;
    }
}

class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.conta = new Conta(nome);
    }

    realizarDeposito(valor) {
        return this.conta.depositar(valor);
    }

    realizarSaque(valor) {
        return this.conta.sacar(valor);
    }

    obterSaldo() {
        return this.conta.getSaldo();
    }
}

let usuario = new Usuario("Usuário Exemplo");

let nome = document.getElementById("nome");
let saldo = document.getElementById("saldo");
let msgDep = document.getElementById("resposta");

saldo.innerHTML = usuario.obterSaldo();

let btnAdd = document.getElementById("adicionar");
let btnRetirar = document.getElementById("retirar");
let textArea = document.getElementById("textarea");
let msgTextArea = document.getElementById("msgTextArea");
let btnMsg = document.getElementById("btnMsg");

btnAdd.addEventListener("click", () => {
    let depositar = parseFloat(document.getElementById("depositar").value);
    try {
        msgDep.innerHTML = usuario.realizarDeposito(depositar);
        saldo.innerHTML = usuario.obterSaldo();
    } catch (error) {
        alert(error.message);
    }
});

btnRetirar.addEventListener("click", () => {
    let sacar = parseFloat(document.getElementById("sacar").value);
    try {
        msgDep.innerHTML = usuario.realizarSaque(sacar);
        saldo.innerHTML = usuario.obterSaldo();
    } catch (error) {
        alert(error.message);
    }
});

btnMsg.addEventListener("click", () => {
    msgTextArea.innerHTML = textArea.value;
});
