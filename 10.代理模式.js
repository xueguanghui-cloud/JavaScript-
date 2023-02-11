/* 
  代理模式（Proxy）：为其他对象提供一种代理以控制对这个对象的访问。
  代理模式使得对象控制具体对象的引用。代理几乎是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西
*/
/* class Star {
  play() {
    console.log("演戏");
  }
}

class StartProxy {
  constructor() {
    this.superStar = new Star();
  }

  talk(price) {
    if(price >= 10000){
      this.superStar.play();
    }else {
      throw new Error("价钱不合适")
    }
  }
}

let jr = new StartProxy();
jr.talk(100000) */

var star = {
  name: "tiechui",
  workprice: 10000
}

let proxy = new Proxy(star, {
  get(target, key) {
    if(key === "workprice"){
      console.log("访问了");
    }
    return target[key]
  },
  set(target, key, value) {
    if(key === "workprice"){
      if(value > 10000){
        console.log("可以合作");
      }
      else{
        throw new Error("价钱不合适")
      }
    }
  }
})

console.log();