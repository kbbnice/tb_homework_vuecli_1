import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    curSeat: "",
    seatData: (function () {
      var list = []
      for (let i = 0; i < Math.floor(Math.random() * 140); i++) {
        list.push(Math.floor(Math.random() * 200 + 1))
      }
      console.log(list)
      return list
    })(),
  },
  mutations: {

    // 当前选择的餐桌
    changeCurSeat(state, index) {
      state.curSeat = index
    },

    // 修改餐桌列表
    deleteSeatData(state, index) {
      state.seatData.splice(index, 1)
    },

    // 修改餐桌列表
    changeSeatData(state, params) {
      state.seatData.splice(params.index, 1, params.data)
    },

    addSeat(state, seatId){
      state.seatData.unshift(seatId)
    }

  },
  actions: {
    changeCurSeatFun(context, index) {
      context.commit('changeCurSeat', index)
    },
    deleteSeatDataFun(context, index) {
      context.commit('deleteSeatData', index)
    },
    changeSeatDataFun(context, params) {
      context.commit('changeSeatData', params)
    },
    addSeatFun(context, params) {
      context.commit('addSeat', params)
    },
  },
  modules: {

  }
})

