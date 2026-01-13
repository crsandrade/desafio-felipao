class Hero {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar() {
        return `O ${this.tipo} atacou usando ${this.ataque}`
    }
}

// Cria heróis
const heroi1 = new Hero("Arceus", "62", "Mago", "Magia")
const heroi2 = new Hero("Motub", "31", "Guerreiro", "Espada")
const heroi3 = new Hero("Slys", "581", "Monge", "Artes Marciais")
const heroi4 = new Hero("Nema", "25", "Ninja", "Shuriken")


// Heróis atacam
console.log(heroi1.atacar())
console.log(heroi2.atacar())
console.log(heroi3.atacar())
console.log(heroi4.atacar())