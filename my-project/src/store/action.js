// import ajax from '../config/ajax'

export default {
	addNum({ commit, state }, id) {
		commit('ADD', 1);
	},
	jianNum({ commit, state }, id) {
		commit('JIAN', 1);
	}
}