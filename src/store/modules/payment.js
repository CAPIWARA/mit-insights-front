import * as types from '../types'
import axios from 'axios'

const state = {
  payment: {
    method: null,
    times: null,
    bank: null
  },
  methods: [
    {
      label: 'A Vista',
      value: 1
    },
    {
      label: 'A Prestações',
      value: 2
    }
  ],
  times: [],
  banks: [
    {
      id: 1,
      name: 'Bradesco'
    },
    {
      id: 3,
      name: 'Caixa Econômica'
    },
    {
      id: 2,
      name: 'Itaú Unibanco'
    }
  ]
}

const getters = {
  [types.PAYMENT]: (state) => state.payment,
  [types.PAYMENT_TIMES]: (state) => state.times,
  [types.PAYMENT_BANKS]: (state) => state.banks,
  [types.PAYMENT_METHODS]: (state) => state.methods
}

const mutations = {
  [types.PAYMENT]: (state, payload) => {
    state.payment = {
      ...state.payment,
      ...payload
    }
  },
  [types.PAYMENT_TIMES]: (state, payload) => {
    state.times = payload
  }
}

const actions = {
  [types.PAYMENT]: ({ commit }, payload) => {
    commit(types.PAYMENT, payload)
  },
  [types.PAYMENT_TIMES]: async ({ commit, getters }, payload) => {
    const property = getters[types.PROPERTY]
    const response = await axios.get('/imovel/combobox/' + property.id)
    const times = Object.entries(response.data).map(
      ([property, value], index) => ({
        id: index,
        label: `${property} R$ ${value}`,
        value
      })
    )
    commit(types.PAYMENT_TIMES, times)
  }
}

export default { state, getters, mutations, actions }
