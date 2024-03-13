
const numero = 34 // Um número aleatório já incluído no código para checar se pertence a sequência Fibonacci

function fibonacci (n) {
    let x = [0, 1]

    for (let i = 2; i < n; i++) {
        x[i] = x [i - 1] + x [i - 2]
    }
    return x

}

function checarFibonacci (numero, numeroFibonacci) {
    return numeroFibonacci.includes(numero)
}

const numeroFibonacci = fibonacci(numero)

if (checarFibonacci(numero, numeroFibonacci)) {
    console.log(`O número ${numero} está na sequência Fibonacci`)
} else {
    console.log(`O número ${numero} não está na sequência Fibonacci`)
}

