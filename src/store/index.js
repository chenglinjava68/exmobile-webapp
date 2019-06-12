/* eslint-disable global-require */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import state from './state'
import actions from './actions'
import mutations from './mutations'
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
  module.hot.accept(['./mutations', './state', './actions', './modules'], () => {
    const newState = require('./state').default
    const newActions = require('./actions').default
    const newMutations = require('./mutations').default
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
