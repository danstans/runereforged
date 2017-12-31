const state = {
  primaryPath: null,
  primaryKeystone: null,
  primaryTier1: null,
  primaryTier2: null,
  primaryTier3: null,
  secondaryPath: null,
  secondaryTier1: null,
  secondaryTier2: null,
  runePath: null
}

const mutations = {
  MUTATE_PRIMARY_PATH: function (state, payload) {
    state.primaryPath = payload.pathId
  },
  MUTATE_PRIMARY_KEYSTONE: function (state, keystoneId) {
    state.primaryKeystone = keystoneId
  },
  MUTATE_PRIMARY_TIER: function (state, payload) {
    switch (payload.tier) {
      case 0:
        state.primaryTier1 = payload.runes.pathId
        break
      case 1:
        state.primaryTier2 = payload.runes.pathId
        break
      case 2:
        state.primaryTier3 = payload.runes.pathId
        break
    }
  },
  MUTATE_SECONDARY_PATH: function (state, pathId) {
    state.secondaryPath = pathId
  },
  MUTATE_SECONDARY_TIER_1: function (state, pathId) {
    state.secondaryTier1 = pathId
  },
  MUTATE_SECONDARY_TIER_2: function (state, pathId) {
    state.secondaryTier2 = pathId
  },
  CHECK_PATH_COMPLETE: function (state) {
    if (state.primaryPath && state.primaryKeystone && state.primaryTier1 && state.primaryTier2 &&
      state.primaryTier3 && state.secondaryPath && state.secondaryTier1 && state.secondaryTier2) {
      state.runePath = state.primaryPath + '-' + state.primaryKeystone + '-' + state.primaryTier1 + '-' + state.primaryTier2 + '-' +
      state.primaryTier3 + '-' + state.secondaryPath + '-' + state.secondaryTier1 + '-' + state.secondaryTier2
    } else {
      state.runePath = null
    }
  },
  RESET_RUNE_TIER: function (state) {
    state.secondaryTier1 = null
    state.secondaryTier2 = null
  },
  RESET_RUNE_PATH: function (state) {
    state.primaryPath = null
    state.primaryKeystone = null
    state.primaryTier1 = null
    state.primaryTier2 = null
    state.primaryTier3 = null
    state.secondaryPath = null
    state.secondaryTier1 = null
    state.secondaryTier2 = null
  }
}

const actions = {
  updatePrimaryPath: function (context, payload) {
    // console.log('updating the primary path val')
    context.commit('MUTATE_PRIMARY_PATH', payload)
    context.commit('CHECK_PATH_COMPLETE')
  },
  updatePrimaryKeystone: function (context, payload) {
    // console.log('updating the primary keystone val')
    context.commit('MUTATE_PRIMARY_KEYSTONE', payload.keystone.keystoneId)
    context.commit('CHECK_PATH_COMPLETE')
  },
  updatePrimaryTiers: function (context, payload) {
    // console.log(payload.tier)
    // console.log(payload.runes)
    context.commit('MUTATE_PRIMARY_TIER', payload)
    context.commit('CHECK_PATH_COMPLETE')
  },
  updateSecondaryRunePath: function (context, payload) {
    // console.log(payload.secondaryRunes.pathId)
    context.commit('MUTATE_SECONDARY_PATH', payload.secondaryRunes.pathId)
    context.commit('CHECK_PATH_COMPLETE')
  },
  updateSecondaryRuneTier: function (context, payload) {
    // console.log(payload.runes)
    var firstOne = true
    payload.runes.forEach(element => {
      if (element !== null) {
        console.log(element.pathId)
        if (firstOne) {
          context.commit('MUTATE_SECONDARY_TIER_1', element.pathId)
          firstOne = false
        } else {
          context.commit('MUTATE_SECONDARY_TIER_2', element.pathId)
        }
      }
    })
    context.commit('CHECK_PATH_COMPLETE')
  },
  resetRuneTier: function (context) {
    context.commit('RESET_RUNE_TIER')
    context.commit('CHECK_PATH_COMPLETE')
  },
  resetRunePath: function (context, payload) {
    context.commit('RESET_RUNE_PATH')
  }
}

export default {
  state,
  mutations,
  actions
}
