import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/cart',
        component: r => require.ensure([], () => r(require('../page/cart')), 'cart')
    }]
}]