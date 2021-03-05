var foo = 1;        // 초기에 사용, 요즘에는 쓰지 않는 것이 좋다
console.log(foo);

let foo1 = 1;       // 재할당이 가능
const foo2 = 1;     // 재할당 불가능

// Javascript Type : 
//      primitive :number, string, boolean, undefined, null, symbol
//      reference(객체형)

// expression
console.log('1' == 1);  // 타입 일치 시킨 후에
console.log('1' === 1); // 타입 일치 여부도 확인
console.log(2 ** 2);

console.log(1 * 's');   // NaN

// Class -> Instance (Class는 Instance가 몇 바이트인지 알려줌, 설계도 역할 )
const o = {
    name : 'Lee',
    sayHi() {
        console.log(this.name);
    }
};

o.sayHi();

// 함수
function add(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(1, 2, 3))
console.log(add(1, 2))
console.log(add(1))

function sum() {
    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}
const sum1 = (...args) => args.reduce((pre, cur) => pre + cur, 0);

console.log(sum(1, 2, 3, 4))
console.log(sum(1, 2, 3, 4, 5))

console.log(add1(1, 2)) // 호이스팅
// 함수 선언문
function add1 (a, b) {
    return a + b;
}

// 함수 표현식
const add2 = function(a, b) {
    return a + b;
}
console.log(add2(1, 2))

// lambda
const add3 = (a, b) => {
    return a + b;
}

const person = {
    name : 'Lee',
    sayHi() {
        console.log(`Hi my name is ${this.name}`);
    }
}

person.age = 20;
console.log(person);
delete person.age; // 비추
console.log(person);