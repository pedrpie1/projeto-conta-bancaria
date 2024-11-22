const user = document.getElementById("user");
const senha = document.getElementById("senha");
const btn = document.getElementById("btn");

btn.addEventListener("click", entrar);

function entrar(){
    if (user.value == ""){
        alert("Mensione o nome de usuário");
    } else if (senha.value == ""){
        alert("Digite a senha");
    } else{
        location.href = "Conta Logada/conta.html";
    }
}