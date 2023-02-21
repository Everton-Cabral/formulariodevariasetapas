import { createStore } from 'vuex'

export default createStore({
  state: {
    step1: {
        name: '',
        email: '',
        phone: '',
        gatilho: false
    },
    typeOfPlan: {
      titulo:'',
      mo:'',
      yr:''
    },
    paymentYearly: false
  },
  mutations: {
    selectedPlan(state, params){
      state.typeOfPlan.titulo = params.titulo
      state.typeOfPlan.mo = params.mo
      state.typeOfPlan.yr = params.yr
    }
  },
  actions: {},
  getters: {}
})