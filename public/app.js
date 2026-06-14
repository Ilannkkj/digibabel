//lógica para capturar os dados do HTML
const formLogin = document.getElementById('form-login');
const formCadastro = document.getElementById('form-cadastro');

form.addEventListener('submit', e=>{
    e.preventDefault(); //evitar o formulário recarregar a página
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    console.log(nome);
    console.log(email);

    logarUsuario(nome, email); //chamar a função cadastrar usuário
});

form.addEventListener('submit', e=>{
    e.preventDefault(); //evitar o formulário recarregar a página
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    console.log(nome);
    console.log(email)
    console.log(senha);

    cadastrarUsuario(nome, email, senha); //chamar a função cadastrar usuário
});

function logarUsuario(nome, email){
    fetch('/api/users/logar', { //caminho para o servidor (backend)
        method: 'GET',
        headers: {'Content-Type':'application/json'}, //mensagem é do tipo JSON
        body: JSON.stringify({nome, email}) //converter o objeto em uma string json
    })
    .then(()=>{
        form.reset(); //limpar o formulário
    })
}

const linkCadastro = document.getElementById('link-cadastro');
const formLogin = document.getElementById('form-login');
const formCadastro = document.getElementById('form-cadastro');

linkCadastro.addEventListener('click', (e) => {
    e.preventDefault();

    formLogin.classList.add('escondido');
    formCadastro.classList.add('escondido');
})

function cadastrarUsuario(nome, email, senha){
    fetch('/api/users/cadastrar', { //caminho para o servidor (backend)
        method: 'POST',
        headers: {'Content-Type':'application/json'}, //mensagem é do tipo JSON
        body: JSON.stringify({nome, email, password}) //converter o objeto em uma string json
    })
    .then(()=>{
        form.reset(); //limpar o formulário
    })
}

function mostrarCadastro() {
    document.getElementById('form-login').classList.add('escondido');
    document.getElementById('form-cadastro').classList.remove('escondido');
}

function mostrarLogin() {
    document.getElementById('form-cadastro').classList.add('escondido');
    document.getElementById('form-login').classList.remove('escondido');
}