import Vue from 'vue'

const state = {
  tierRunes: [],
  possibleRunes: null
}

const getters = {
  getTierRunes: function (state) {
    return state.tierRunes
  },
  getPossibleRunes: function (state) {
    return state.possibleRunes
  }
}

const mutations = {
  MUTATE_POSSIBLE_RUNES: function (state, possibleRunes) {
    state.possibleRunes = possibleRunes
  },
  MUTATE_TIER_RUNES: function (state, payload) {
    Vue.set(state.tierRunes, payload.tier, payload.runes)
  },
  RESET_TIER: function (state) {
    state.tierRunes = []
    state.possibleRunes = null
  }
}

const actions = {
  updatePossibleRunes: function (context, runes) {
    context.commit('MUTATE_POSSIBLE_RUNES', runes)
  },
  updateTierRunes: function (context, payload) {
    context.commit('MUTATE_TIER_RUNES', payload)
  },
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
