// == != > < >= <= - võrdlusoperaatorid -> true / false

// loogilised operaatorid
// AND - &&
// OR - ||
// NOT - !

/*
if(tingimus){
   tegevused, mis sooritatakse, kui
   vastus tingimusele on true
} else {
    tegevused, mis sooritatakse, kui
    vastus tingimusele on fasle
}
 */

/*
if(tingimusi){
   kui see kehtib, siis edasi pole vaja kontrollida
   kui aga mitte, vaadatakse järgmine tingimus
} else {
   täidetakse siis, kui kõik eelmised ei sobinud
}
*/

/*
if(tingimus1){
    if(tingimus)
 */
let vanus = Number(prompt('Sisestage oma vanus'))
let sugu = prompt('Sisestage oma sugu')
let treening = Number(prompt('Sisestage treeningu tüüp'))
// kontroll ja väljastus
let plusisagedus;

if(sugu == 'm' || sugu == 'M'){
    {console.log('mees')
    } else if(sugu == 'n' || sugu == 'N'){
        console.log('naine')
    }
    if(sugu == 'm' || sugu == 'M'){
        pulsisagedus = 220 - vanus
    } else if(sugu == 'n' || sugu == 'N'){
        pulsisagedus = 206 - 0.88 * vanus
    }
    let minPulsisagedus;
    let maxPulsisagedus;

    if(treening == 1){
        minPulsisagedus = 0.5 * pulsisagedus
        maxPulsisagedus = 0.7 * pulsisagedus
    } else if(treening == 2){
        minPulsisagedus = 0.7 * pulsisagedus
        maxPulsisagedus = 0.8 * pulsisagedus
    } else if(treening == 3){
        minPulsisagedus = 0.8 * pulsisagedus
        maxPulsisagedus = 0.87 * pulsisagedus
    }
/*
console.log('Pulsisagedus peab olema vahemikus ' +
Math.round (minPulsisagedus) + " kuni " + Math.round (maxPulsisagedus))

    console.log('Pulsisagedus peab olema vahemikus ${minPulsisagedus} kuni ${maxPulsisagedus}')
    See on lihtsam viis lahetada seda ül
 */