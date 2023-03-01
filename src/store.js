import { createStore } from 'vuex'

export default createStore({
  state: {
    currentStep:1,
    step1: {
        name: '',
        email: '',
        phone: '',
        gatilho: false
    },
    typeOfPlan: {
      title:'',
      mo:'',
      yr:''
    },
    paymentYearly: false,
    addOns:{
      complement1:{
        title:"Online Service",
        subTitle:"Access to multiplayer games",
        mo:1,
        yr:10,
        checked: false
    },
    complement2:{
        title:"Larger storage",
        subTitle:"Extra 1TB of cloud save",
        mo:2,
        yr:20,
        checked: false
    },
    complement3:{
        title:"Customizable profile",
        subTitle:"Custom theme on your profile",
        mo:2,
        yr:20,
        checked: false
    },
    },
    complements: [],

  },

  mutations: {
    backStep(state){
      state.currentStep--
      if(state.currentStep === 0){
        state.currentStep = 1
      }
    },
    nextStep(state){

      function next(){ 
        state.currentStep++
        
        if(state.currentStep === 5){
          state.currentStep = 1
        }
      }
      
      if(state.step1.name != '' && state.step1.email != '' &&  state.step1.phone != '' ){
       next()
      }
    },
    selectedPlan(state, params){
      state.typeOfPlan.title = params.title
      state.typeOfPlan.mo = params.mo
      state.typeOfPlan.yr = params.yr
    },
    selectedComplements(state, params){
      if(state.complements.includes(params)){
        const index =  state.complements.findIndex(complement => complement === params)
        state.complements.splice(index, 1)
      } else{
        state.complements.push(params)
      }   
    }
  },

  getters: {
    finalpricemo(state){
     return state.complements.reduce((total, complement) => total + complement.mo, 0) + state.typeOfPlan.mo
    },
    finalpriceyr(state){
      return state.complements.reduce((total, complement) => total + complement.yr, 0) + state.typeOfPlan.yr
     }
  }
})