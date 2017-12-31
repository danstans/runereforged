import Vue from 'vue'

const state = {
  secondaryPathColor: '#cdbe91',
  possibleSecondayPaths: [],
  secondaryPathSelected: null,
  secondaryTiers: [null, null, null],
  secondaryNumRuneTiers: 0,
  twoRunesSelected: false
}

const getters = {
  getSecondaryPathColor: function (state) {
    return state.secondaryPathColor
  },
  getPossibleSecondaryPaths: function (state) {
    return state.possibleSecondayPaths
  },
  getSecondaryPathSelected: function (state) {
    return state.secondaryPathSelected
  },
  getTwoRunesSelected: function (state) {
    return state.twoRunesSelected
  },
  getSecondaryNumRunes: function (state) {
    return state.secondaryNumRuneTiers
  },
  getSecondaryTiers: function (state) {
    return state.secondaryTiers
  }
}

const mutations = {
  MUTATE_POSSIBLE_SECONDARY_RUNES: function (state, possibleSecondayPaths) {
    state.possibleSecondayPaths = possibleSecondayPaths
  },
  MUTATE_SECONDARY_PATH_SELECTED: function (state, secondaryPath) {
    state.secondaryPathSelected = secondaryPath
  },
  MUTATE_SECONDARY_COLOR: function (state, secondaryColor) {
    state.secondaryPathColor = secondaryColor
  },
  MUTATE_SECONDARY_TIER: function (state, payload) {
    if (state.secondaryTiers[payload.runeTier] === null && state.secondaryNumRuneTiers < 2) {
      state.secondaryNumRuneTiers += 1
      Vue.set(state.secondaryTiers, payload.runeTier, payload.rune)
      if (state.secondaryNumRuneTiers === 2) {
        state.twoRunesSelected = true
      }
    } else if (state.secondaryTiers[payload.runeTier] === null && state.secondaryNumRuneTiers === 2) {
      if (state.secondaryTiers[0] && state.secondaryTiers[1]) {
        Vue.set(state.secondaryTiers, 0, null)
        Vue.set(state.secondaryTiers, 2, payload.rune)
      } else if (state.secondaryTiers[0] && state.secondaryTiers[2]) {
        Vue.set(state.secondaryTiers, 2, null)
        Vue.set(state.secondaryTiers, 1, payload.rune)
      } else if (state.secondaryTiers[1] && state.secondaryTiers[2]) {
        Vue.set(state.secondaryTiers, 1, null)
        Vue.set(state.secondaryTiers, 0, payload.rune)
      }
    } else if (state.secondaryTiers[payload.runeTier] !== null) {
      Vue.set(state.secondaryTiers, payload.runeTier, payload.rune)
    }
  },
  RESET_SECONDARY_RUNES: function (state) {
    state.secondaryPathColor = '#cdbe91'
    state.possibleSecondayPaths = []
    state.secondaryPathSelected = null
    state.secondaryTiers = [null, null, null]
    state.secondaryNumRuneTiers = 0
    state.twoRunesSelected = false
  }
}

const actions = {
  updatePossibleSecondaryPaths: function (context, payload) {
    var newList = payload.paths.slice(0)
    newList.splice(payload.primaryIndex, 1)
    context.commit('MUTATE_POSSIBLE_SECONDARY_RUNES', newList)
  },
  updateSecondaryPath: function (context, payload) {
    context.commit('MUTATE_SECONDARY_PATH_SELECTED', payload.secondaryRunes)
    switch (payload.secondaryRunes.pathId) {
      case 8000:
        context.commit('MUTATE_SECONDARY_COLOR', '#c8aa6e')
        break
      case 8100:
        context.commit('MUTATE_SECONDARY_COLOR', '#ca3e3f')
        break
      case 8200:
        context.commit('MUTATE_SECONDARY_COLOR', '#9faafc')
        break
      case 8300:
        context.commit('MUTATE_SECONDARY_COLOR', '#49aab9')
        break
      case 8400:
        context.commit('MUTATE_SECONDARY_COLOR', '#a1d586')
        break
    }
  },
  updateSecondaryTier: function (context, payload) {
    context.commit('MUTATE_SECONDARY_TIER', payload)
  },
  resetSecondaryRunes: function (context) {
    context.commit('RESET_SECONDARY_RUNES')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
