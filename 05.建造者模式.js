class Navbar{
  init() {
    console.log("navbar init");
  }

  getData() {
    console.log("navbar getData");
    return new Promise((resolove)=> {
      setTimeout(() => {
        resolove("navbar 111")
      }, 1000);
    })
  }

  render() {
    console.log("navbar render");
  }
}

class Listbar{
  init() {
    console.log("Listbar init");
  }

  getData() {
    console.log("Listbar getData");
    return new Promise((resolove)=> {
      setTimeout(() => {
        resolove("Listbar 222")
      }, 1000);
    })
  }

  render() {
    console.log("Listbar render");
  }
}

class Creator{
  async startBuild(builder) {
    await builder.init()
    await builder.getData()
    await builder.render()
  }
}

const op = new Creator();
op.startBuild(new Navbar())
op.startBuild(new Listbar())
