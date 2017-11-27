'use strict';

function addContact(name, mobile) {
    var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '없음';
    var email = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '없음';

    var str = 'name=' + name + ', mobile=' + mobile + ', home=' + home + ', address=' + address + ', email=' + email;
    console.log(str);
}

addContact('홍길동', '01020031625');
addContact('이몽룡', '01020031621', '023332222', '서울시');