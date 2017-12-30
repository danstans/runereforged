const state = {
  pathSelected: false,
  backgroundImg: '',
  primaryPathId: null,
  primaryPathTitle: '',
  primaryPathSubtitle: '',
  primaryColor: 'black',
  primaryRuneImg: ''
}

const getters = {
  getPathSelected: function (state) {
    return state.pathSelected
  },
  getBackgroundImg: function (state) {
    return state.backgroundImg
  },
  getPrimaryPath: function (state) {
    return state.primaryPathId
  },
  getPrimaryPathTitle: function (state) {
    return state.primaryPathTitle
  },
  getPrimaryPathSubtitle: function (state) {
    return state.primaryPathSubtitle
  },
  getPrimaryColor: function (state) {
    return state.primaryColor
  },
  getPrimaryRuneImg: function (state) {
    return state.primaryRuneImg
  }
}

const mutations = {
  MUTATE_PATH_SELECTED: function (state, pathBool) {
    state.pathSelected = pathBool
  },
  MUTATE_BACKGROUND_IMG: function (state, imgVal) {
    state.backgroundImg = imgVal
  },
  MUTATE_PRIMARY_PATH_ID: function (state, pathId) {
    state.primaryPathId = pathId
  },
  MUTATE_PRIMARY_PATH_TITLE: function (state, pathTitle) {
    state.primaryPathTitle = pathTitle
  },
  MUTATE_PRIMARY_PATH_SUBTITLE: function (state, pathSubtitle) {
    state.primaryPathSubtitle = pathSubtitle
  },
  MUTATE_PRIMARY_COLOR: function (state, primaryColor) {
    state.primaryColor = primaryColor
  },
  MUTATE_PRIMARY_RUNE_IMG: function (state, primaryRuneImg) {
    state.primaryRuneImg = primaryRuneImg
  },
  RESET_STATES: function (state) {
    state.pathSelected = false
    state.backgroundImg = ''
    state.primaryPathId = ''
    state.primaryPathTitle = ''
    state.primaryPathSubtitle = ''
    state.primaryColor = 'black'
    state.primaryRuneImg = ''
  }
}

const actions = {
  changePathSelected: function (context, payload) {
    context.commit('MUTATE_PATH_SELECTED', 'newStuff')
  },
  changePrimaryPath: function (context, payload) {
    context.commit('MUTATE_PRIMARY_PATH_ID', payload.pathId)
    switch (payload.pathId) {
      case 8000:
        context.commit('MUTATE_PRIMARY_PATH_TITLE', 'Precision')
        context.commit('MUTATE_PRIMARY_PATH_SUBTITLE', 'Improved attacks and sustained damage')
        context.commit('MUTATE_PRIMARY_COLOR', '#c8aa6e')
        context.commit('MUTATE_PRIMARY_RUNE_IMG', '/static/precision/precision-small.png')
        context.commit('MUTATE_BACKGROUND_IMG', '/static/precision/environment.jpg')
        break
      case 8100:
        context.commit('MUTATE_PRIMARY_PATH_TITLE', 'Domination')
        context.commit('MUTATE_PRIMARY_PATH_SUBTITLE', 'Burst damage and target access')
        context.commit('MUTATE_PRIMARY_COLOR', '#ca3e3f')
        context.commit('MUTATE_PRIMARY_RUNE_IMG', '/static/domination/domination-small.png')
        context.commit('MUTATE_BACKGROUND_IMG', '/static/domination/environment.jpg')
        break
      case 8200:
        context.commit('MUTATE_PRIMARY_PATH_TITLE', 'Sorcery')
        context.commit('MUTATE_PRIMARY_PATH_SUBTITLE', 'Empowered abilities and resource manipulation')
        context.commit('MUTATE_PRIMARY_COLOR', '#9faafc')
        context.commit('MUTATE_PRIMARY_RUNE_IMG', '/static/sorcery/sorcery-small.png')
        context.commit('MUTATE_BACKGROUND_IMG', '/static/sorcery/environment.jpg')
        break
      case 8300:
        context.commit('MUTATE_PRIMARY_PATH_TITLE', 'Inspiration')
        context.commit('MUTATE_PRIMARY_PATH_SUBTITLE', 'Creative tools and rule bending')
        context.commit('MUTATE_PRIMARY_COLOR', '#49aab9')
        context.commit('MUTATE_PRIMARY_RUNE_IMG', '/static/inspiration/inspiration-small.png')
        context.commit('MUTATE_BACKGROUND_IMG', '/static/inspiration/environment.jpg')
        break
      case 8400:
        context.commit('MUTATE_PRIMARY_PATH_TITLE', 'Resolve')
        context.commit('MUTATE_PRIMARY_PATH_SUBTITLE', 'Durability and crowd control')
        context.commit('MUTATE_PRIMARY_COLOR', '#a1d586')
        context.commit('MUTATE_PRIMARY_RUNE_IMG', '/static/resolve/resolve-small.png')
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
