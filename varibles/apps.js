let temp = Number(prompt("Sisestage õhutemperatuur"))
let jah = "Ei ole jäätumise ohtu"
let ei = "On jäätumise oht"
function oht(){
    if(temp > 4){
        console.log(jah)
    }else if (temp <= 4){
        console.log(ei)
    }
}
console.log(oht())