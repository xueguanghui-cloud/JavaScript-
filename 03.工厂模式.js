/* 
function UserFactory(role) {
  function User(role, pages) {
    this.role = role;
    this.pages = pages
  }

  switch(role) {
    case "superAdmin":
      return new User("superAdmin", ["home", "user-manage", "right-manage", "news-manage"])
    case "admin":
      return new User("admin", ["home", "user-manage", "news-manage"])
    case "editor":
      return new User("editor", ["home", "news-manage"])
    default:
      return Error("参数错误")
  }
}

console.log(UserFactory("editor")); */




class User{
  constructor(role, pages) {
    this.role = role;
    this.pages = pages;
  }

  static UserFactory(role) {
    switch(role) {
      case "superAdmin":
        return new User("superAdmin", ["home", "user-manage", "right-manage", "news-manage"])
      case "admin":
        return new User("admin", ["home", "user-manage", "news-manage"])
      case "editor":
        return new User("editor", ["home", "news-manage"])
      default:
        return Error("参数错误")
    }
  }

}

console.log(User.UserFactory("superAdmin"));
console.log();