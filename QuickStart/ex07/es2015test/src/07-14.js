class Person {
    constructor(name, tel, address) {
        this.name = name;
        this.tel = tel;
        this.address = address;
        if (Person.count) { Person.count++; }
        else { Person.count = 1; }
    }
    static getPersonCount() {
        return Person.count;
    }
    toString() {
        return `name=${this.name}, tel=${this.tel}, addres=${this.address}`
    }
}

var p1 = new Person('이몽룡', '010-1111-1111', '경기도');
var p2 = new Person('성춘향', '010-1111-2222', '서울');
console.log(p1.toString());
console.log(Person.getPersonCount());
