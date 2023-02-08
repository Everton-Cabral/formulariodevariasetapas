import { createStore } from 'vuex'

export default createStore({
  state: {
    step1: {
        name: '',
        name_required: false,
        email: '',
        email_required: false,
        phone: '',
        phone_required: false,
    }
  },
  mutations: {},
  actions: {},
  getters: {}
})
