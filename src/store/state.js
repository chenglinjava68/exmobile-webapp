export default {
  Tabbar: {
    active: 0,
    show: false,
    tabbarItemList: [
      {
        name: '主页',
        icon: 'home-o',
        dot: false,
        info: '',
        to: '/',
        replace: true
      },
      {
        name: '分类',
        icon: 'apps-o',
        dot: false,
        info: '',
        to: '/category',
        replace: true
      },
      {
        name: '拼团',
        icon: 'bag-o',
        dot: false,
        info: '',
        to: '/group',
        replace: true
      },
      {
        name: '购物车',
        icon: 'shopping-cart-o',
        dot: false,
        info: '',
        to: '/shopcart',
        replace: true
      },
      {
        name: '我的',
        icon: 'user-o',
        dot: false,
        info: '',
        to: '/mine',
        replace: true
      }
    ]
  }
}
