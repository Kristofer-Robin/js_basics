let inimesteArv = prompt("Sisestage inimeste arv",0)
let bussiKohad = 50
let bussideArv = Math.floor(inimesteArv/bussiKohad)
let inimesteJaak = inimesteArv % bussiKohad
console.log("Bussis on", bussiKohad, "kohta, inimesi mahtus bussidesse ", bussideArv * bussiKohad,"seega teile tuleb järgi ",
    bussideArv, "bussi ning maha jääb", inimesteJaak, "inimest.")
if(inimesteJaak == 0){
    console.log("Bussis on", bussiKohad, "kohta, inimesi mahtus bussidesse ", bussideArv * bussiKohad,"seega teile tuleb järgi ",
        bussideArv, "bussi")
}