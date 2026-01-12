const randomWin = Math.floor(Math.random() * (100 - 1) + 1)


function defineRank(wins) {
    if (wins <= 10) {
        return 'Ferro'
    } else if (wins <= 20) {
        return 'Bronze'
    } else if (wins <= 50) {
        return 'Prata'
    } else if (wins <= 80) {
        return 'Ouro'
    } else if (wins <= 90) {
        return 'Diamante'
    } else if (wins <= 100) {
        return 'Lendário'
    } else {
        return 'Imortal'
    }
}


console.log(`O Herói tem saldo de ${randomWin} vitórias e está no nível ${defineRank(randomWin)}`)