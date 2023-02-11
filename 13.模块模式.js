/* 
  模块化模式最初被定义为在传统软件工程中为类提供的私有和公共封装的一种方法。

  能够使一个单独的而对象拥有公共/私有的方法和变量，从而屏蔽来自全局作用域的特殊部分，这可以减少我们的函数名与在
  页面中其他脚本区域内定义的函数名冲突的可能性。
*/

/* const obj = (function() {
  var count = 0
  return {
    increse() {
      return count++
    },
    decrese(){
      return count--
    }
  }
})()

console.log(obj.increse()); */

let count = 0
function increase() {
  return ++count
}
function decrease() {
  return --count
}

// export default { increase, decrease }
export { increase, decrease }

console.log();