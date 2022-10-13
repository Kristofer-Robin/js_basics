let valik = prompt(`Kas soovid istekoha ise valida (ise) või loosiga (loos)`)
let kohaValik;
if(valik == `ise`){
    let kohaValik = prompt(`Kas soovite istuda akna ääres (aken) või muu (muu)`)
    if(kohaValik == `aken`){
        koht = `Aknakoht`
    }else if(kohaValik == `muu`){
        koht = `Vahekäigukoht`
    }
} else if( valik == `loos`) {
    console.log(`Istekoht loositi`)
    let juhuarv = Math.ceil(Math.random() * 3)
    if(juhuarv == 1) {
        koht = `Aknakoht`
    } else {
        koht = `Vahekäigukoht`
    }
}
console.log(koht)
