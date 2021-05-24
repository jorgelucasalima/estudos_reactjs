//esse é meu nome
//var nome = "Lucas";

/*
esse é meu nome
*/





// for = para
for (a = 0; a < 10; a++) {
    document.write("</br> O valor do a é :" + a);
}




//while = enquanto

x = 0
while (x < 10) {
    document.write("</br> o valor do x é " + x)
    x++
}




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


if (lista.indexOf('mano') > -1) {
    alert('Esse nome está na lista')
}else{
    alert('Seu nome não está na lista')
}

