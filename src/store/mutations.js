import { TABBAR_CHANGED_ACTIVE, TABBAR_CHANGED_SHOW } from '@/constant/MutationType'

export default {
  [TABBAR_CHANGED_ACTIVE] (state, payload) {
    state.Tabbar.active = payload.active
  },
  [TABBAR_CHANGED_SHOW] (state, payload) {
    state.Tabbar.show = payload.show
  }
}
