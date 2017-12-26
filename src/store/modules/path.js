const state = {
  pathSelected: false,
  backgroundImg: '',
  primaryPath: ''
}

const getters = {
  getPathSelected: function (state) {
    return state.pathSelected
  },
  getBackgroundImg: function (state) {
    return state.backgroundImg
  },
  getPrimaryPath: function (state) {
    return state.primaryPath
  }
}

const mutations = {
  MUTATE_PATH_SELECTED: function (state, pathBool) {
    state.pathSelected = pathBool
  },
  MUTATE_BACKGROUND_IMG: function (state, imgVal) {
    state.backgroundImg = imgVal
  },
  MUTATE_PRIMARY_PATH: function (state, pathId) {
    state.primaryPath = pathId
  },
  RESET_STATES: function (state) {
    state.pathSelected = false
    state.backgroundImg = ''
    state.primaryPath = ''
  }
}

const actions = {
  changePathSelected: function (context, payload) {
    console.log(payload.pathVal)
    context.commit('MUTATE_PATH_SELECTED', 'newStuff')
  },
  changePrimaryPath: function (context, payload) {
    context.commit('MUTATE_PRIMARY_PATH', payload.pathId)
    switch (payload.pathId) {
      case 8000:
        context.commit('MUTATE_BACKGROUND_IMG', '/static/precision/environment.jpg')
        break
      case 8100:
        context.commit('MUTATE_BACKGROUND_IMG', '/static/domination/environment.jpg')
        break
      case 8200:
        context.commit('MUTATE_BACKGROUND_IMG', '/static/sorcery/environment.jpg')
        break
      case 8300:
        context.commit('MUTATE_BACKGROUND_IMG', '/static/inspiration/environment.jpg')
        break
      case 8400:
        context.commit('MUTATE_BACKGROUND_IMG', '/static/resolve/environment.jpg')
        break
    }
  },
  resetState: function (context) {
    context.commit('RESET_STATES')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
