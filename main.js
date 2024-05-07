function armazenaVitoriaDerrota (vitoria, derrota) {
    let saldoVitorias = vitoria - derrota;
    let nivel = vitoriaDoUsuario(saldoVitorias)
    return `O heroi tem saldo de ${saldoVitorias} vitorias e está no nivel de ${nivel}`
}

function vitoriaDoUsuario (vitoria) {
    if (vitoria <= 10) {
        return 'Ferro'
}   else if (vitoria <= 20) {
        return 'Bronze'
}   else if (vitoria <= 50) {
        return 'Prata'
}   else if (vitoria <= 80) {
        return 'Ouro'
}   else if (vitoria <= 90) {
        return 'Diamante'
}   else if (vitoria <= 100) {
        return 'Lendario'
}   else {
        return 'Imortal'
}

}

let saldo = armazenaVitoriaDerrota(86, 5)
console.log(saldo)