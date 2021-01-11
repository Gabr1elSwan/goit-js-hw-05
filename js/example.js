const Account = function ({ login, email }) {
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function () {
    console.log(`login: ${this.login}, email: ${this.email}`);
}


const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com


const userInfo = {
    login: 'Poly',
    email: 'poly@mail.com',
}

// console.log(userInfo.login);

const { login, email } = userInfo
console.log(login);
console.log(email);