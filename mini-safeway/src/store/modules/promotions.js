const state = {
  promoCodes: [ ]
}

const getters = {
  getPromoCodes (state) {
    return state.promoCodes
  }
}

const actions = {
}

const mutations = {
  setPromoCodes (state, promoCodes) {
    state.promoCodes = promoCodes
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
