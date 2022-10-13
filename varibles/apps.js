const nimi = prompt("Sisestage oma nimi");
let lubatud = prompt("Sisestage lubatud kiirus", 0);
let tegelik = prompt("Sisestage tegelik kiirus",0);
console.log(nimi + ",","kiiruse ületamise eest on teie trahv", (tegelik - lubatud)*3, "\u20AC");