import * as types from '../types'

const state = {
  step: 1,
  steps: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
}

const getters = {
  [types.STEP]: (state) => state.step,
  [types.STEPS]: (state) => state.steps,
  [types.STEPS_CAN]: (state) => {
    const { length, 0: first, [length - 1]: last } = state.steps
    const can = {
      next: state.step !== last,
      prev: state.step !== first
    }
    return can
  }
}

const mutations = {
  [types.STEP]: (state, payload) => {
    state.step = payload
  },
  [types.STEPS]: (state, payload) => {
    state.steps = payload
  }
}

const actions = {
  [types.STEPS_NEXT]: ({ commit, getters }, payload) => {
    const step = getters[types.STEP]
    commit(types.STEP, step + 1)
  },
  [types.STEPS_PREV]: ({ commit, getters }, payload) => {
    const step = getters[types.STEP]
    commit(types.STEP, step - 1)
  }
}

export default { state, getters, mutations, actions }
