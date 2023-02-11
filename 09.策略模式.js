/* 
  策略模式：策略模式定义了一系列的算法，并将每个算法封装起来，使他们可以相互替换，且算法的变化不会影响使用算法的客户，
  策略模式属于对象行为模式，它通过对算法进行封装，把使用算法的责任和算法的实现分割开来，并委派给不同的对象对这些算法及
  进行管理。
  该模式主要解决在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护，它的优点就是算法可以自由切换，同时可
  以避免多重 if...else 判断，且具有良好的扩展性。
*/

/* function calBonus(level, salary) {
  // 存在大量if
  if(level === "A"){
    return salary *= 3;
  }else if (level === "B") {
    return salary *= 2;
  }else if(level === "C") {
    return salary *= 1;
  }
}

console.log(calBonus("A", 10000));
console.log(calBonus("C", 8000)); */


// 使用策略模式
let strategry = {
  "S": (salary) => {
    return salary * 5
  },
  "A": (salary) => {
    return salary * 3
  },
  "B": (salary) => {
    return salary * 2
  },
  "C" : (salary) => {
    return salary * 1
  }
}

function calBonus(level, salary) {
  return strategry[level](salary);
}

console.log(calBonus("S", 20000));
console.log(calBonus("A", 10000));
console.log(calBonus("C", 8000));