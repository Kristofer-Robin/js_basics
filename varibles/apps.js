// kasutaja sisen
let kordamise_arv = Number(promt('Sisestage mitu korda äratada'))

let kord = 1 // tsükli juhtimismuutuja algväärtus
// korduvad tegevused
while(kord <= kordamise_arv){
    console.log(`Tõuse ja sära - ${kord}. kord`)
    kord++
}