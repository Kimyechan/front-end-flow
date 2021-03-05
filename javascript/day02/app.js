// 원시값 <-> 객체

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    console.log(`Hi My name is ${this.name}`);
};

const me = new Person('Lee');
console.log(me); // Person { name: 'Lee' }

me.sayHi();

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi My name is ${this.name}`);
    }
}