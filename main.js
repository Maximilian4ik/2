// let res = document.querySelector('#res');
// res.innerHTML = '<p>Новый текст</p>';
// alert('wewe')

// Переопределяем функцию console.log
console.log = function (message) {
  var consoleOutput = document.getElementById("res");
  consoleOutput.innerHTML += message + "<br>";
};

// Примеры использования console.log
// console.log('Привет, мир!');
// console.log('Это вывод на странице.');

// let a = 'This error occurs when we try to set the innerHTML property for an element that does not exist or was not found using the querySelector method. In this case, most likely the element was not found and the variable to which we are trying to assign the innerHTML property has a value of null. To avoid this error, it is necessary to make sure that the element exists and was correctly found before modifying its properties.'
// b = 'a';

// function resh1(text, char){
//   let newmas = [];
//   text = text.split(' ');
//   for (let i = 0; i < text.length; i++){
//     text[i].split('');
//     if(text[i][0] === char){
//       newmas.push(text[i])
//     }
//   }
//   return newmas
// }

// function backspace(str){
//   str = str.split('');
//   for(let i =0; i < str.length; i++){
//     if(str[i] === '#' && i !== 0){
//       str.splice(i-1, 2)
//       // i -= 2;
//     }
//   }
//   return str
// }

// let a = 'a#bc#d';

// function braces(str){
//   let staples = ['(', ')', '{', '}', '[', ']'];
//   str = str.split('');
//   let center = str.length/2;
//   for(let i = center; i > str.length; i--){
//     if(str[i] === staples){

//     }
//   }
// }

//// document.getElementById('res').innerHTML = backspace(a);

class product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}


const bread = new product('Bread', 20, 3)

const cola = new product('Cola', 30, 4)

// console.log(cola.getTotalPrice());

class BankAccount {
  constructor(accountNumber, ownerName){
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = 0;
  }

  deposit(amount){
    this.balance += amount;
  }

  withdraw(amount){
    if(amount <= this.balance){
      this.balance -= amount
    } else {
      console.log('balance < 0')
    }
  }

  getBalance(){
    return this.balance
  }
}


const BankAccount_1 = new BankAccount('12345', 'Andrey');
 
// console.log(BankAccount_1.getBalance())

class Car{
  constructor(brand, model, year, color, mileage){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
  }

  drive(distance){
    this.mileage += distance;
  }

  paint(color){
    this.color = color;
  }
}

const daewo = new Car('Daewo', 'Lanos', 2004, 'red', 100000)

daewo.drive(200000);  
// daewo.paint('Black')
console.log(daewo.color)