// Užduotis: Ką grąžins ši funkcija su pateiktais pavyzdžiais?
// Parašykite atsakymus šalia kiekvieno pavyzdžio

function processNumber(num) {
    if (num < 3) {
        return num * 4;
    } else if (num >= 3 && num < 8) {
        return num + 6;
    } else if (num >= 8 && num < 15) {
        let result = num - 5;
        if (result % 2 === 0) {
            return result / 2 + 3;
        } else {
            return result * 2 - 1;
        }
    } else if (num >= 15 && num < 25) {
        return num % 4 === 0 ? num * 2 : num - 7;
    } else {
        let adjusted = num % 5 === 0 ? num + 12 : num - 6;
        return adjusted % 2 === 0 ? adjusted / 3 : adjusted * 2;
    }
}

// Pavyzdžiai:
console.log(processNumber(2)); // ???
console.log(processNumber(6)); // ???
console.log(processNumber(10)); // ???
console.log(processNumber(14)); // ???
console.log(processNumber(18)); // ???
console.log(processNumber(22)); // ???
console.log(processNumber(27)); // ???
console.log(processNumber(35)); // ???