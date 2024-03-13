function inverterString (string) {
    let inverter = " "

    for (let i = string.length - 1; i >= 0; i--){
        inverter += string[i]
    }
    
    return inverter

}

let minhaString = "Olá mundo!"

let stringInvertida = inverterString(minhaString)

console.log(`String original = ${minhaString}`)

console.log(`String invertida = ${stringInvertida}`)