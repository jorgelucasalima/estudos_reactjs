//esse é meu nome
//var nome = "Lucas";

/*
esse é meu nome
*/



// web Storege



var nome = ''
if (typeof localStorage.nome == 'undefined') {
    localStorage.nome = prompt('Digite seu nome :')

}

nome = localStorage.nome
document.getElementById('nome').innerHTML = nome




/*
//temporizadores

function acao() {
    document.write("Executando ... </br>");

}

//executa unica vez
//setTimeout(acao,3000)

//executa de tempo em tempo
var timer = setInterval(acao,1000)
//



/*

//switch

document.write("</br> escolha seu pedido: ")
document.write("</br> (0 - Vale sorvete) ")
document.write("</br> (1 - Vale presente) ")
document.write("</br> (2 - vale feijão) ")
document.write("</br> (3 - Vale um aviso) </br></br>")

function pedir(){

    x = prompt('oque deseja pedir :')
    switch(x){
        case "0":
            alert("o x vale 0")
            break
        case "1":
            alert("o x vale presente")
            break
        case "2":
            alert("o x vale 2")
            break
        case "3":
            alert("Vai tomar um suco")
            break
        default:
            alert("XAU")
            break
    
    }
}



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

*/