import { createStore, Store } from 'vuex'

export interface State {
  count: number
}

export const store = createStore<State>({
  state: {
    count: 0
  },

  mutations: {
    // 將state設定為參數
    Loaded(state) {
      // state的isLoading true/false 互轉
      state.count = state.count++
    },
    increment(state: { count: number }) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    isEven(state) {
      return state.count % 2 === 0
    }
  }
})
