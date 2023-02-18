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
  mutations: {
    togglePaymentYearly(state){
      state.paymentYearly = !state.paymentYearly
    }
  },
  actions: {},
  getters: {}
})