class User {
  constructor(name, role, pages) {
    this.name = name
    this.role = role
    this.pages = pages
  }

  welcome() {
    console.log("欢迎回来", this.name);
  }

  dataShow() {
    throw new Error("抽象方法需要被实现")
  }
}

class SuperAdmin extends User {
  constructor(name) {
    super(name, "superAdmin", ["home", "user-manage", "right-manage", "news-manage"])
  }

  dataShow() {
    console.log("superAdmin - dataShow")
  }

  addRight() {}
  addUser() {}
}

class Admin extends User {
  constructor(name) {
    super(name, "admin", ["home", "user-manage", "news-manage"])
  }

  dataShow() {
    console.log("admin - dataShow")
  }
  addUser() {}
}

class Editor extends User {
  constructor(name) {
    super(name, "editor", ["home", "news-manage"])
  }

  dataShow() {
    console.log("editor - dataShow")
  }
}

function getAbstractUserFactory(role) {
  switch(role) {
    case "superAdmin":
      return SuperAdmin;
    case "admin":
      return Admin;
    case "editor":
      return Editor;
    default:
      throw new Error("参数错误")
  }
}

const UserClass = getAbstractUserFactory("superAdmin")
const user = new UserClass("codexgh");
console.log(user);

console.log();