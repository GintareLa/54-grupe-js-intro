
//Masyvo metodas .spread
//spread (...) isspausdina buvusia kopijos reiksme ir gali 
// isideti kokias nori kopijas, bet pasalina []
const a = [1, 2, 3, 4];
const b = [...a];

console.log('a:', a, 'b:', b);

a[0] = 99;
console.log('a:', a, 'b:', b);

b[3] = 88;
console.log('a:', a, 'b:', b);


//spread (...) isspausdina buvusia kopijos reiksme ir gali 
// isideti kokias nori kopijas, bet pasalina []
const c = [1, 11];
const d = [2, 22];
const e = [3, 33];

const f1 = [44,...c,...c, 4];
console.log(f1);
console.log('----------');


const f2 = [...c,...d,...e, 5];
console.log(f2);
console.log('---------------');

const f3 = [...c, 5,...e,...d];
console.log(f3);
console.log('---------------');

const c2 = [...c,...c];
console.log(c2);
console.log('---------------');

const c4 = [...c2,...c2];
console.log(c4);
console.log('---------------');
// nuima [], ...spread
console.log(1, 11);
console.log(...c);
console.log(c);
console.log('--------------');

const g = [[1, 11],[2, 22], [3, 33]];
const g2 = [c, d, e];
console.log(g);
console.log(g2);
console.log('--------------');


const h = [...g];
console.log(h);

g[0][0] = 9;
console.log(g);
console.log(h);
console.log('--------------');

const j = [[...g[0]],[...g[1]], [...g[2]]];
console.log(j);
console.log('--------------');

g[0][1] = 777;
console.log(g);
console.log(h);
console.log(j);
console.log('--------------');
console.log('--------------');

const objA = { name: 'Jonas'};
const objB = { age: '99'};
const objC = { isMarried: 'true'};

const student = {...objA,...objB,...objC};
console.log(student);
console.log('--------------');

//isspausdina vis tiek tik viena karta
const objAA = {...objA,...objA};
console.log(objAA);
console.log('--------------');

const objD1 = { title: 'Labas', desc: 'rytas' };
const objD2 = { country: 'Lietuva' };
const objD3 = { desc: 'vakaras' };

const objD = {
    ...objD3,
    ...objD2,
    ...objD1,
};
console.log(objD);
console.log('--------------');
console.log('--------------');

const k = [[4],[5, 55],[6, 66, 666]];
let l1 = [];
for(let i=0; i< k.length; i++) {
    const innerArray = k[i];
    l1= l1.concat(...innerArray);
}

console.log(l1);
console.log('--------------');

const k2 = [[4],[5, 55],7, [6, 66, 666]];
const l2 = [];
for(let i=0; i< k2.length; i++) {
    const innerArray = k2[i];
console.log(i, '-->', k2[i], Array.isArray(k2[i]));
    if(Array.isArray(k2[i])) {
        l2.push(...k2[i]);
    } else {
        l2.push(k2[i]);
    }
}
console.log(l2);
console.log('--------------');
const k3 = [[4], [5, 55], 7, [6, 66, 666]];
const l3 = [];

for (let i = 0; i < k3.length; i++) {
    const innerArray = k3[i];

    if (Array.isArray(innerArray)) {
        l3.push(...innerArray);
    } else {
        l3.push(innerArray);
    }
}

console.log(l3);










