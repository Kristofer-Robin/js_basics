// kasutaja sisend
let poialpoisid = number(prompt('Mitu pöialpoisi tahab õunu'))
let lumivalgeke0unad = 14
let poialpoiss = 1
while(poialpoiss <= poialpoisid){
    let ounad = Math.ceil(Math.random() * 2)
    console.log(ounad)
    lumivalgeke0unad = lumivalgeke0unad - ounad
    poialpoiss++
}
console.log(`Lumivalgekesel jäi ${lumivalgeke0unad}`)