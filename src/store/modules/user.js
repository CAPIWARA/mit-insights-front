import * as types from '../types'
import axios from 'axios'

const state = {
  user: null
}

const getters = {
  [types.USER]: (state) => state.user
}

const mutations = {
  [types.USER]: (state, payload) => {
    state.user = payload
  }
}

const actions = {
  [types.USER_CREATE]: async ({ commit }, payload) => {
    const { data: user } = await axios.post('/user', payload)
    commit(types.USER, user)
  }
}

export default { state, getters, mutations, actions }
