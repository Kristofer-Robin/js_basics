/**
 * documentation
 * comment
 * style
 *
 * variables - avr, let, const
 *
 * let variableName = value // mutable
 * const constName = value // immutable
 *
 */

// this is simple comment

/*
console.log("first row")
console.log("second row")
console.log("third row") */

let numberOne = 5
let numberTwo = 2.5
const season = "Autumn"
// season ) "Spring" ! error
console.log(numberOne)
console.log(numberTwo)
console.log(season + season)


// kasutaja sisend
let inimesed = 100
let kohtiBussis = 40

// arvutus
let bussidTäidetud = Math.floor(imimesed / kohtiBussis)
let mahaJaanud = inimesed % kohtiBussis
// tulemuse väljastamine
console.log(inimesed + ' inimeste sõidutamiseks läheb välja ' + bussidTäidetud + ' bussi ')
if(mahaJaanud != 0) {
    console('ja ' + mahaJaanud + 'inimest on jäänud maha')
}

// == != > < >= <= - võrdlusoperaatorid -> true / false

/*
if(tingimus){
   tegevused, mis sooritatakse, kui
   vastus tingimusele on true
} else {
    tegevused, mis sooritatakse, kui
    vastus tingimusele on fasle
}
 */