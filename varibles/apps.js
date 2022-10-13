let eap = prompt("Sisestage ainepunktide arv");
let nadal = prompt("Sisestage nädalate arv");
let ajakulu = (eap * 26 / nadal);
console.log("Nädala eeldatav ajakulu on", Math.round(ajakulu,0),"h");