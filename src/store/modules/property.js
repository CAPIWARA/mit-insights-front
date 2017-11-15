import * as types from '../types'
import axios from 'axios'

const state = {
  property: {
    id: 0
  }
}

const getters = {
  [types.PROPERTY]: (state) => state.property
}

const mutations = {
  [types.PROPERTY]: (state, payload) => {
    state.property = payload
  }
}

const actions = {
  [types.PROPERTY]: async ({ commit }, payload) => {
    const { data: property } = await axios.get('/imovel/' + payload)
    commit(types.PROPERTY, property)
  }
}

export default { state, getters, mutations, actions }
