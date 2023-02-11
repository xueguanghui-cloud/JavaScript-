/* 装饰器模式：能够更好的对已有功能进行扩展，这样不会更改原有的代码，对其他业务产生影响，这样方便我们在较少的改动下对软件功能进行扩展 */
Function.prototype.before = function(beforeFun) {
  var _this = this;
  return function() {
    // 先进行前置函数调用
    beforeFun.apply(this.arguments)

    // 执行原来的函数
    return _this.apply(this, arguments)
  }
}

Function.prototype.after = function(afterFun) {
  var _this = this;
  return function() {
    // 先进行前置函数调用
    var result = _this.apply(this.arguments)
    afterFun.apply(this, arguments)
    // 执行原来的函数
    return result
  }
}

function test() {
  console.log('11111');
}

var test1 = test.before(function() {
  console.log("00000");
}).after(function() {
  console.log("22222");
})
test1();
console.log();