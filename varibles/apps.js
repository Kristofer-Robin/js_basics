let valik = Number(prompt('Kas soovid istekohta ise valida +
"ise" või loosida "loos"'))

if(valik == 'ise'){
    let kohtValik = prompt('Kas soovite istuda akna ääres +
    "aken" või muu "muu"')
    console.log('Valisite ise.')
    if(kohaValik == 'aken'){
        koht = 'Aknakoht.'
    } else if(kohaValik == 'muu'){
        koht = 'Vahekäigukoht.'
    }
} else if(valik == 'loos'){
    console.log('Istekoht loositi.')
    let juhuarv = Math.ceil(Math.random() * 3)
    if(juhuarv == 1) {
        koht = 'Aknakoht.'
    } else {
        koht = 'Vahekäigukoht.'
    }
}
console.log(koht)
