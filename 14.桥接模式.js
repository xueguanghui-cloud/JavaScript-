/* 
  桥接模式：将抽象部分与它实现部分分离，使它们都可以独立变化
  使用场景：一个类存在两个或多个独立变化的维度，且这两个维度都需要扩展；

  优点：把抽象与实现隔离开，有助于独立的管理各组成部分；
  缺点：每使用一个桥接元素都要增加一次函数调用，这对应用程序的性能会有一些负面影响---提供了系统的复杂度
*/
function Aodi1(engine) {
  this.engine = engine
}


function Aodi2(engine) {
  this.engine = engine
}

Aodi1.prototype.platform = function() {
  console.log("aodi 平台");
}

Aodi1.prototype.loadEngine = function() {
  this.engine.run();
}

Aodi2.prototype.platform = function() {
  console.log("aodi 平台");
}

Aodi2.prototype.loadEngine = function() {
  this.engine.run();
}

function V6() {
  this.run = function() {
    console.log("V6 发动机");
  }
}

function V8() {
  this.run = function() {
    console.log("V8 发动机");
  }
}

let aodi1 = new Aodi1(new V6())
let aodi2 = new Aodi1(new V8())

aodi1.loadEngine();
aodi2.loadEngine();

let aodi3 = new Aodi2(new V6())
aodi3.loadEngine();