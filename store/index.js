import Cookies from 'js-cookie'
import { cookieFromRequest } from '../untils'

export const state = () => ({
  token: null

})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    const token = cookieFromRequest(req, 'token')
    if (token) {
      commit('auth/SET_TOKEN', token)
    }

    const locale = cookieFromRequest(req, 'locale')
    if (locale) {
      commit('lang/SET_LOCALE', { locale })
    }
  },

  nuxtClientInit ({ commit }) {
    const token = Cookies.get('token')
    if (token) {
      commit('auth/SET_TOKEN', token)
    }

    const locale = Cookies.get('locale')
    if (locale) {
      commit('lang/SET_LOCALE', { locale })
    }
  },
  async login({commit}) {
    commit('setToken', 'true')
  },
  async logout({commit}) {
    commit('clearToken')
  }
}

export const getters = {
  hasToken: s => !!s.token
}
