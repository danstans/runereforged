const state = {
  keystoneSelected: false,
  possibleKeystones: null
}

const getters = {
  getKeystoneSelected: function (state) {
    return state.keystoneSelected
  },
  getPossibleKeystones: function (state) {
    return state.possibleKeystones
  }
}

const mutations = {
  MUTATE_KEYSTONE_SELECTED: function (state, selectVal) {
    state.keystoneSelected = selectVal
  },
  MUTATE_POSSIBLE_KEYSTONES: function (state, keystoneList) {
    state.possibleKeystones = keystoneList
  },
  RESET_KEYSTONE: function (state) {
    state.keystoneSelected = false
    state.possibleKeystones = null
  }
}

const actions = {
  selectKeystone: function (context, payload) {
    context.commit('MUTATE_KEYSTONE_SELECTED', payload.keystone)
  },
  updatePossibleKeystones: function (context, payload) {
    context.commit('MUTATE_POSSIBLE_KEYSTONES', payload.keystones)
  },
  resetKeystone: function (context) {
    context.commit('RESET_KEYSTONE')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
