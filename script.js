function verificar() {
    var v1 = document.getElementById('valor1')
    //var v2 = document.getElementById('valor2')
    var res = document.getElementById('res')
    var valor1 = Number(v1.value)
    //var valor2 = Number(v2.value)
    var s = valor1 
    conta.innerText = `Resultado é: ${s}`
    if(s == '8'){
        conta.innerText = ` ${s} PARABÉNS, GANHOU UM RAFF!`
    }else{
        conta.innerText = `não é o ${s} tente novamente! :(`
    }
}       
