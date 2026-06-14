const mostrarLogin = document.getElementById("form-cadastro").style.display = 'none';

const paginaCadastro = document.getElementById("link-cadastro");
const paginaLogin = document.getElementById("link-login");

const formLogin = document.getElementById("form-login");
const formCadastro = document.getElementById("form-cadastro");

paginaCadastro.addEventListener("click", e=> {

    document.getElementById("form-login").style.display = 'none';
    document.getElementById("form-cadastro").style.display = '';

});

paginaLogin.addEventListener("click", e=> {
    document.getElementById("form-login").style.display = '';
    document.getElementById("form-cadastro").style.display = 'none';
});

formCadastro.addEventListener("submit", e=> {
    e.preventDefault();

    const nomeCadastro = document.getElementById("nomeCadastro").value;
    const emailCadastro = document.getElementById("emailCadastro").value;
    const senhaCadastro = document.getElementById("senhaCadastro").value;
    const tipoPerfil = document.getElementById("tipoPerfil").value;

    cadastrarUsuario(nomeCadastro, emailCadastro, senhaCadastro, tipoPerfil);
}); 

function cadastrarUsuario(nomeCadastro, emailCadastro, senhaCadastro, tipoPerfil) {
    fetch("/api/usuario/cadastrarUsuario", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({nomeCadastro, emailCadastro, senhaCadastro, tipoPerfil})
    })
    .then(()=> {
        formCadastro.reset();
    })
}