const classificacoes = ['Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante']
let nivelDoHeroi = ''
const nomeHeroi = 'Rafael'

function defineXP() {
    const xpGetter = Math.random() * (10001 - 1001) + 1001
    const xp = Number(xpGetter.toFixed(0))

    return xp;
}

const exp = defineXP();

if (exp <= 2000) {
    nivelDoHeroi = classificacoes[0];
} else if (exp <= 5000) {
    nivelDoHeroi = classificacoes[1]
} else if (exp <= 7000) {
    nivelDoHeroi = classificacoes[2]
} else if (exp <= 8000) {
    nivelDoHeroi = classificacoes[3]
} else if (exp <= 9000) {
    nivelDoHeroi = classificacoes[4]
} else if (exp <= 10000) {
    nivelDoHeroi = classificacoes[5]
} else {
    nivelDoHeroi = classificacoes[6]
}

console.log(`O Herói de nome ${nomeHeroi} está no nível ${nivelDoHeroi}`)

// Seu código tinha uma inconsistência no enunciado, pois estava sem resultado pra entre 5000 a 6.000