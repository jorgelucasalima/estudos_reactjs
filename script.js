//esse é meu nome
//var nome = "Lucas";

/*
esse é meu nome
*/

//função Entrar

function entrar() {
    var area = document.getElementById('area');
    var texto = prompt("Digite Seu nome : ");

    if (texto == '' || texto == null) {
        alert("Digite seu nome novamente..")
        area.innerHTML = 'Bem vindo .. '
    }else{
        area.innerHTML = 'Bem vindo ' + texto
    }

    
}

function entrar2(nome) {
    var area = document.getElementById('area2')
    var texto = prompt('Digite seu Sobrenome : ')
    var idade = prompt('Digite sua Idade : ')

    area.innerHTML = 'Seu nome é ' + nome + " " + texto + " " + idade
}