class Hello {
    greet(nome: string) {
        return `Olá, ${nome}!`
    }
}

const hello = new Hello()

console.log(hello.greet("pedrofsn"))