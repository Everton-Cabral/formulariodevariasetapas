import { createStore } from 'vuex'

export default createStore({
  state: {
    step1: {
        name: '',
        email: '',
        phone: '',
        gatilho: false
    },
    paymentYearly: false
  },
  mutations: {},
  actions: {},
  getters: {}
})