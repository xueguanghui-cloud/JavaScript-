
// 构造器函数
/* function Employee(name, age) {
  this.name = name
  this.age = age

  this.say = function() {
    console.log(this.name  + ": " + this.age);
  }
} */

// 构造函数模式
/* function Employee(name, age) {
  this.name = name
  this.age = age
}
Employee.prototype.say = function() {
  console.log(this.name  + ": " + this.age);
}

var employee1 = new Employee("codexgh", 100);
var employee2 = new Employee("tiechui", 20);
employee1.say()
employee2.say() */


// 类模式
class Employee {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say() {
    // 存放在类的原型上
    console.log(this.name + ": " + this.age);
  }
}

var employee1 = new Employee("codexgh", 100);
var employee2 = new Employee("tiechui", 20);

employee1.say()
employee2.say()
console.log(employee1);

console.log();