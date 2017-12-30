const state = {
  secondaryPathColor: '#cdbe91',
  possibleSecondayPaths: [],
  secondaryPathSelected: null
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
  RESET_SECONDARY_RUNES: function (state) {
    state.secondaryPathColor = '#cdbe91'
    state.possibleSecondayPaths = []
    state.secondaryPathSelected = null
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
