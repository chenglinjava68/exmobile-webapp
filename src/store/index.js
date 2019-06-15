/* eslint-disable global-require */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import { state, mutations, actions } from './main'
import * as modules from './modules'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules,
  state,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

if (module.hot) {
  module.hot.accept(['./modules', './main'], () => {
    const newState = require('./main').state
    const newActions = require('./main').actions
    const newMutations = require('./main').mutations
    const { Home } = require('./modules')
    store.hotUpdate({
      state: newState,
      mutations: newMutations,
      actions: newActions,
      modules: {
        Home
      }
    })
  })
}

export default store
