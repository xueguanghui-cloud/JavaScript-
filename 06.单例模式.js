/* var Singleton = (function(){
  var instance
  function User(name, age) {
    this.name = name
    this.age = age
  }
  return function() { 
    if(!instance){
      // 创建实例
      instance = new User("codexgh", 18)
    }
    return instance
  }
})()

console.log(Singleton() === Singleton()); */

class Singleton {
  constructor(name, age) {
    if(!Singleton.instance) {
      this.name = name
      this.age =  age
      Singleton.instance = this;
    }
    return Singleton.instance
  }
}

console.log(new Singleton() === new Singleton("codexgh", 18));
console.log();