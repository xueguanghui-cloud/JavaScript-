/* var employee1 = {
  name: "codexgh",
  age: 100
}

var employee2 = {
  name: "tiechui",
  age: 29
} */


// 构造器函数
function Employee(name, age) {
  this.name = name
  this.age = age

  this.say = function() {
    console.log(this.name  + ": " + this.age);
  }
}

var employee1 = new Employee("codexgh", 100);
var employee2 = new Employee("tiechui", 20);
employee1.say()
employee2.say()

console.log();