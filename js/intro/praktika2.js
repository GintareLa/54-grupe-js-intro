/**
 * Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina "true", jei jis teigiamas, ir 
 * "false", jei neigiamas arba nulis.
 * //galimas sprendimas 
 * return num > 0;
 */
 function oddEven(num) {
   if (num <= 0) {
        return 'False';
    } else if (num > 0 ) {
        return 'True';
    }
 }
console.log('Pirma užduotis');
console.log(oddEven(9));
console.log(oddEven(0));
console.log(oddEven(-18));
console.log('......');

/**
 * Užduotis Nr. 2
 * Parašykite funkciją, kuri priima skaičių nuo 1 iki 12 ir grąžina mėnesio pavadinimą.
 */
 function week(day) {
    switch (day) {
        case 1:
            return "Sausis";
        case 2:
            return "Vasaris";
        case 3:
            return "Kovas";
        case 4:
            return "Balandis"; 
        case 5:
            return "Gegužė"; 
        case 6:
            return "Birželis"; 
        case 7:
            return "Liepa"; 
        case 8:
            return "Rugpjūtis"; 
        case 9:
            return "Rugsėjis"; 
        case 10:
            return "Spalis"; 
        case 11:
            return "Lapkritis"; 
        case 12:
            return "Gruodis"; 
        default: 
            return "Įveskite skaičių nuo 1-12";
    }
 }
 console.log('Antra užduotis');
 console.log(week(1));
 console.log(week(2));
 console.log(week(3));
 console.log(week(4));
 console.log(week(5));
 console.log(week(6));
 console.log(week(7));
 console.log(week(8));
 console.log(week(9));
 console.log(week(10));
 console.log(week(11));
 console.log(week(12));
 console.log(week('klm'));
 console.log('......');
/**
 * Užduotis Nr. 3
 * Parašykite funkciją, kuri priima du skaičius ir grąžina "Pirmas didesnis", "Antras didesnis" arba "Lygūs".
 */
function maxMinEqual(n1, n2) {
    if (n1 === n2) {
          return 'Skaičiai yra lygūs';  
    }  else if (n1 > n2) {
         return 'Pirmas didesnis';
    }  else if  (n1 < n2) {
         return 'Antras didesnis';
    } else {
        return 'Klaida, įveskite du skaičius'
    }
    
}

console.log('Trečia užduotis');
console.log(`Pateikiame skaičius (1, 1). ${maxMinEqual(1, 1)}`);
console.log(`Pateikiame skaičius (2, 1). ${maxMinEqual(2, 1)}`);
console.log(`Pateikiame skaičius (2, 10). ${maxMinEqual(2, 10)}`);
console.log(`Pateikiame skaičius ('kl', 10). ${maxMinEqual('kl', 10)}`);
console.log('......');
 
/**
 * Užduotis Nr. 4
 * Parašykite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir grąžina ją Farenheito laipsniais.
 * P.S.: Dirbame tik su skaičiais, be "°C" ir "°F".
 °C = (°F − 32) 5/9
 °F = (°C × 1,8) + 32
 // 
 //
 */
  function celFar(temp) {
   return (temp * 1.8 + 32);
  }
  console.log('Ketvirta užduotis');
  console.log(`Pateikiame Celsijaus temp skaičiais (10). ${celFar(10)}`);
  console.log(`Pateikiame Celsijaus temp skaičiais (-5). ${celFar(-5)}`);
  console.log('......');
/**
 * Užduotis Nr. 5
 * Parašykite funkciją, kuri priima teigiamą skaičių ir grąžina visų 
 * jo skaitmenų sumą.
 * P.S.: Jei pateikiamas vienženklis skaičius - grąžiname 
 * tą patį skaičių.
 * 
 * sprendimas*/
 function skaiciuSuma(skaicius) {
    let suma = 0;
    skaicius = skaicius.toString();
 
    for (let i = 0; i < skaicius.length; i++) {
        suma += Number(skaicius[i]);
    }
 
    return suma;
}
    console.log('Penkta užduotis');
    console.log(skaiciuSuma(123));
    console.log(skaiciuSuma(1234));
    console.log('......');
 
 /*function sumaSkaiciu(num) {
    let sum = 0;
    while (num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }
 }
 
 console.log('Penkta užduotis');
 console.log(sumaSkaiciu(123));
 console.log('......');
/**
 * Užduotis Nr. 6
 * Parašykite funkciją, kuri grąžina atsitiktinį procentą nuo
 *  0 iki 100 (sveikasis skaičius).
 */
 function apvalinimas (){

 }
 for let (i =0, i <100, i ++) {
    console.log
 }
/**
 * [BONUS] Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina masyvą su jo daugybos 
 * lentelės rezultatais iki 10.
 */