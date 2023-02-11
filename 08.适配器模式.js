/* 适配器模式：将一个类的接口转换成客户希望的另一个接口。适配器模式让那些接口不兼容的类可以一起工作 */
class TencentMap {
  show() {
    console.log("开始渲染腾讯地图");
  }
}

class BaiduMap {
  dispaly() {
    console.log("开始渲染百度地图");
  }
}

class TencentAdapater extends TencentMap{
  constructor() {
    super();
  }

  dispaly() {
    this.show();
  }
}

function renderMap(map) {
  map.dispaly();
}

renderMap(new TencentAdapater())
renderMap(new BaiduMap())