//---COMENTARIOS EXEMPLOS
//esse é meu nome
//var nome = "Lucas";

/*
esse é meu nome
*/


//Some Every


/*

let nomes = [
    {nome:"Lucas", idade:12},
    {nome:"Juli", idade:13},
    {nome:"Mano", idade:22},
    {nome:"Manooo", idade:133},
]

//console.log(nomes.some(nome => nome === "Ayra"))


console.log(nomes.every(nome => nome.idade >= 12))



/*
//includes
//let nomes = ["Lucas", "Juliana", "Mano"]
//console.log(nomes.includes('Luca'))

//endsWith

let nome = "Lucas"
//console.log(nome.endsWith('cas'))



//startsWith

console.log(nome.startsWith('luc'))





//função anonima
function adicionar (...numeros){

    let total = numeros.reduce((total,proximo) => {
        return total + proximo
    })

    console.log(total)
}

adicionar(1,2,3,4,5)









const listaNumeros = [1,2,3,4,5,6,7,8]
const novaListaNumeros = listaNumeros.map(function(item, index) {
    return item * 5
})

console.log(novaListaNumeros)


const soma = listaNumeros.reduce()









function cadastrar(usuarios, ...novosusuarios) {
    let totalusuarios = [
        ...usuarios,
        ...novosusuarios
    ]

    return console.log(totalusuarios)

}


let usuarios = ["Lucas", "Douglas"]
let novosusuarios = cadastrar(usuarios, "henrique")


// web Storege


/*

function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo:"engenheiro",
        status:'aceito',
    }

    return novosDados
}

console.log (cadastroPessoa({nome:"Manoel", sobrenome:"Neto",idade:23}))


// variavel se
var nome = "lucas"
let nome = "lucas"
const nome = "lucas"


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