/* 
FUNCTION - funcija - perpanaudojamas logikos blokas
100 sveikieji skaiciai
1.21 
*/
function kainaSuPvm(bazineKaina) {
    console.log('gauta kaina:', bazineKaina);
    return bazineKaina * 1.21;


}
const price1 = kainaSuPvm(100);
const price2 = kainaSuPvm(200);
const price3 = kainaSuPvm(5);

console.log(price1);
console.log(price2);
console.log(price3);



// lyginis -> kvadratu
//nelyginis -> n*2+1

function algoritmas(n) {
    let result = 0;

    if (n % 2 === 0) {
        result = n * n;
    } else {
        result = n * 2 + 1;

    }
    return result;

}
console.log(algoritmas(2));
console.log(algoritmas(3));
console.log(algoritmas(4));
console.log(algoritmas(5));
console.log(algoritmas(6));
console.log(algoritmas(7));
console.log(algoritmas(8));
console.log(algoritmas(9));
console.log(algoritmas(10));