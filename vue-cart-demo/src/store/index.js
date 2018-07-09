import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);


const state = {
	numTotal:0,
	goodList: [{
      	id: '1',
      	name: '护手霜',
      	num: '0',
      	price: '9.9'
    }, {
      	id: '2',
      	name: '植物精华',
      	num: '0',
      	price: '12.8'
    }, {
      	id: '3',
      	name: '洁面乳',
      	num: '0',
      	price: '3.9'
    }, {
      	id: '4',
      	name: '保湿水',
      	num: '0',
      	price: '5.6'
    }]
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})





