const state = {
  keystoneSelected: false,
  possibleKeystones: null
}

const getters = {
}

const mutations = {
  RESET_TIER: function (state) {
    state.keystoneSelected = false
    state.possibleKeystones = null
  }
}

const actions = {
  resetTier: function (context) {
    context.commit('RESET_TIER')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
