const email = document.querySelector("#email");
const user = document.querySelector("#user");
const senha = document.querySelector("#senha");
const confirmSenha = document.querySelector("#confirmSenha");
const btnCriarConta = document.querySelector("#btnCriarConta");

// CONFERE SE TUDO ESTÁ COLOCADO CORRETAMENTE
function conferirCadastro(){
    if (email.value == ""){
        alert("Adicione o seu E-Mail");
    } else if(user.value == ""){
        alert("Crie um nome de usuário");
    } else if(senha.value == ""){
        alert("Crie uma senha");
    } else if(confirmSenha.value == ""){
        alert("Confirme a sua senha");
    } else{
        let loginPage = "../index.html";
        location.href = loginPage;
    }
}

btnCriarConta.addEventListener("click", conferirCadastro);