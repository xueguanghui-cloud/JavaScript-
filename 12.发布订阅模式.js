/* 
  发布订阅模式：
    1. 观察者和目标要相互知道；
    2. 发布者和订阅者不需要互相知道，通过第三方实现调用，属于经过解耦后的观察者模式；
*/

// publist 发布
// sunscribe 订阅
/* const pubSub = {
  list: [],
  publish() {
    this.list.forEach(item => item())
  },
  subscribe(cb) {
    this.list.push(cb)
  }
}

function testA() {
  console.log("testA");
}

function testB() {
  console.log("testB");
}

pubSub.subscribe(testA)
pubSub.subscribe(testB)

pubSub.publish() */



const pubSub = {
  message: {},
  publish(type, data) {
    if(!this.message[type]) return;

    this.message[type].forEach(item => item(data))
  },
  subscribe(type, cb) {
    if(!this.message[type]){
      this.message[type] = [cb];
    }else{
      this.message[type].push(cb);
    }    
  },
  unsubscribe(type, cb) {
    if(!this.message[type]) return;
    if(!cb) {
      // 取消所有当前type事件
      this.message[type] && (this.message[type].length=0);
    } else {
      this.message[type] = this.message[type].filter(item => item !== cb)
    }
  }
}

function testA(data) {
  console.log("testA" + data);
}

function testB(data) {
  console.log("testB" + data);
}

function testC(data) {
  console.log("testC" + data);
}


pubSub.subscribe("A", testA)
pubSub.subscribe("A", testC)
pubSub.subscribe("B", testB)
pubSub.subscribe("C", testC)


pubSub.publish("A", 111);
pubSub.publish("B", 2342);


console.log();