import * as types from '../types'

const state = {
  documents: {
    cpf: null
  }
}

const getters = {
  [types.DOCUMENTS]: (state) => state.documents
}

const mutations = {
  [types.DOCUMENTS]: (state, payload) => {
    state.documents = {
      ...state.documents,
      ...payload
    }
  }
}

const actions = {
  [types.DOCUMENTS]: ({ commit }, payload) => {
    commit(types.DOCUMENTS, payload)
  }
}

export default { state, getters, mutations, actions }
