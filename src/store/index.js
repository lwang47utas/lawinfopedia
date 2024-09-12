import Vue from 'vue'
import Vuex from 'vuex'
import style from './style.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newRoute: '/index',
    name: 'index',
    menuList: [
      {
        title: 'Pro Bono Offices',
        path: '/Pro-Bono-Offices',
        name: 'Pro Bono Offices'
      },
      {
        title: 'Unemployment Offices',
        path: '/Unemployment-Offices',
        name: 'Unemployment Offices'
      },
      {
        title: 'Employment Departments',
        path: '/Employment-Departments',
        name: 'Employment Departments'
      },
      {
        title: 'Victim Assistance Centers',
        path: '/Victim-Assistance-Centers',
        name: 'Victim Assistance Centers'
      },
      {
        title: 'Courts',
        path: '/Courts',
        name: 'Courts'
      },
      {
        title: 'Bar Associations',
        path: '/Bar-Associations',
        name: 'Bar Associations'
      },
      {
        title: 'District Attorney Offices',
        path: '/District-Attorney-Offices',
        name: 'District Attorney Offices'
      },
      {
        title: 'Departments of Justice',
        path: '/Departments-of-Justice',
        name: 'Departments of Justice'

      },
      {
        title: 'Attorney Generals',
        path: '/Attorney-Generals',
        name: 'Attorney Generals'
      }
    ]
  },
  mutations: {
    changeRoute (state, item) {
      state.newRoute = item.path
      state.newRoute = item.name
    }
  },
  actions: {
  },
  modules: {
    style
  }
})
