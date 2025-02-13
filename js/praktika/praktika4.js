// 1. Parašykite funkciją, kuri priima skaičių kaip argumentą ir grąžina jo kvadratą.
// (Pvz., kvadratu(4) turi grąžinti 16.)
 function kvadratu (num) {
        return num ** 2;
    }
 
 console.log('1 užduotis');
 console.log(kvadratu(4));
 console.log('.............');
// 2. Parašykite funkciją, kuri patikrina, ar perduotas skaičius yra lyginis.
// (Pvz., arLyginis(8) → true, arLyginis(7) → false.)
function arLyginis(n) {
let result = 0;
if (n % 2 === 0) {
    return true;
} else {
    return false;
}

}
console.log('2 užduotis');
console.log(arLyginis(8));
console.log(arLyginis(7));
console.log('.............');
console.log('.............');
console.log('.............');
console.log('.............');
console.log();





// 3. Sukurkite funkciją, kuri priima du skaičius ir grąžina didesnįjį.
// (Pvz., didesnisSkaicius(5, 8) → 8.)
function didesnisSkaicius(num1, num2){
    if (num1 > num2) {
        return num1;
    } else {
        return num2
    }
}
console.log('3 užduotis');
console.log(didesnisSkaicius(5,8));
console.log('.............');
// 4. Sukurkite funkciją, kuri priima stringą ir grąžina jį atvirkštine tvarka.
// (Pvz., reverseString("JavaScript") → "tpircSavaJ".)
const zod = "JavaScript'"
function atvirksciai (zod) {
        return zod.split('').reverse().join('');
      }
console.log('4 užduotis');
console.log(atvirksciai('Javascript'));
console.log('.............');
      
 
// 5. Parašykite funkciją, kuri skaičiuoja, kiek kartų nurodyta raidė pasikartoja string'e.
// (Pvz., skaiciuotiRaides("banana", "a") → 3.)

const zodis = 'banana';
let count = 0;
function skaiciuotiRaides(zodis) {

for (let i= 0; i< zodis.length; i++) {
    if (zodis[i] === 'a'){
        count++;
    }    
} return count;
}
console.log('5 užduotis');
console.log(skaiciuotiRaides('banana', 'a'));
console.log('.............');
 
// 6. Sukurkite funkciją, kuri priima skaičių ir grąžina "teigiamas", "neigiamas" 
// arba "nulis" naudojant ternary.
function evenOdd(sk) {
    return sk === 0 ? 'nulis' : sk > 0 ? 'teigiamas':'neigimas';
}

console.log('6 užduotis');
console.log(evenOdd(8));
console.log(evenOdd(-2));
console.log(evenOdd(0));
console.log('.............');
// 7. Parašykite funkciją, kuri tikrina, ar žodis prasideda raide "A"(nesvarbu, didžioji 
// ar mažoji).// 
// (Pvz., pradedaA("Automobilis") → true, pradedaA("namas") → false.) 
// node js/intro/praktika4.js

function prasidedaA(word) {
    if (word.toLowerCase().charAt(0).includes('a')) {
        return true;
    } else {
        return false;
    }
}
console.log('7 užduotis');
console.log(prasidedaA('Automobilis'));;
console.log(prasidedaA('namas'));;
console.log('.............');


// 8. Sukurkite funkciją, kuri priima skaičių ir patikrina, ar jis dalus iš 3 ir 5
// (grąžina true arba false).
function arDalus (skaicius) {
    if (skaicius % 3 === 0 && skaicius % 5 === 0) {
        return true;
      }  else {
        return false;
      }
    }
console.log('8 užduotis');
console.log(arDalus(15));;
console.log(arDalus(33));;
console.log('.............');
 
// 9. Naudodami for ciklą, išveskite visus skaičius nuo 10 iki 1 mažėjančia tvarka.
// node js/intro/praktika4.js
console.log('9 užduotis');
for (let i = 10; i >= 1; i--) {
    console.log(i);   
}
console.log('.............');
 
// 10. Parašykite for ciklą, kuris išveda tik lyginius skaičius nuo 2 iki 20.
console.log('10 užduotis');
 for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0 && i !==0) {
        console.log(i);
    }
 }
 console.log('.............');
// 11. Naudodami for ciklą, suskaičiuokite visų skaičių nuo 1 iki 100 sumą ir
//  grąžinkite rezultatą.
let visaSuma = 0;
for (i = 0; i <= 100; i++) {
    visaSuma += i;
}
console.log('11 užduotis');
console.log(visaSuma);
console.log('.............');
// 12. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina jų vidurkį.
// (Pvz., vidurkis([5, 10, 15]) → 10.)
const array = [5, 10, 15];
 function rastiVidurki (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log('12 užduotis');
console.log(rastiVidurki(array));
console.log('.............');
// 13. Naudodami for ciklą, raskite didžiausią skaičių iš pateikto masyvo.
// (Pvz., rastiDidziausia([3, 9, 2, 11, 7]) → 11.)
const arr = [3, 9, 2, 11, 7];
let largest = 0;
for (i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log('13 užduotis');
console.log(largest);
console.log('.............');
// 14. Sukurkite funkciją, kuri priima stringą ir grąžina jį be tarpų.
// (Pvz., beTarpų("Labas pasauli") → "Labaspasauli".)
let stringas = 'Labas pasauli'
function beTarpu (stringas) {
    if (stringas.includes(' ')) {
        return stringas.replace(' ', ''); 
    }
}
console.log('14 užduotis');
console.log(beTarpu('Labas pasauli'));
console.log('.............');
// 15. Parašykite funkciją, kuri patikrina, ar string'e yra daugiau nei 10 simbolių.
// (Pvz., arIlgas("JavaScript") → true, arIlgas("Labas") → false.)
function arIlgas (string) {
    if (string.length >= 10) {
        return true;
    } else {
        return false;
    }
}
console.log('15 užduotis');
console.log(arIlgas('JavaScript'));
console.log(arIlgas('Labas'));
console.log('.............');
// 16. Sukurkite for ciklą, kuris išveda daugybos lentelę 5(nuo 1 iki 10).
console.log('16 užduotis');
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

console.log('.............');
 
// 17. Parašykite funkciją, kuri priima stringą ir pakeičia visas "a" raides į "@".
// (Pvz., keistiRaide("banana") → "b@n@n@".)
function keistiRaide (vaisius) {
    if (vaisius.includes('a')){
        return vaisius.replaceAll('a', '@');
    }
}
console.log('17 užduotis');
console.log(keistiRaide('banana'));
console.log('.............');
 
// 18. Sukurkite funkciją, kuri sugeneruoja stringą "**********"(10 žvaigždučių),
//  naudojant for ciklą. node js/intro/praktika4.js
console.log('18 užduotis');

for (let i = 0; i <= 10; i++) {
    console.log('*');
}
console.log('.............');
// 19. Parašykite funkciją, kuri priima skaičių ir grąžina visus jo 
// daliklius(išskyrus 1 ir patį save).
// (Pvz., dalikliai(12) →[2, 3, 4, 6].)
 
// 20. Sukurkite funkciją, kuri tikrina, ar pateiktas skaičius yra pirminis.
// (Pvz., arPirminis(7) → true, arPirminis(8) → false.)


