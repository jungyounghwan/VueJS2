function addContact(name, mobile, home='없음', email='없음') {
    var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;
    console.log(str);
}

addContact('홍길동', '01020031625');
addContact('이몽룡', '01020031621', '023332222', '서울시');