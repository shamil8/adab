import Cookies from 'js-cookie'
import { cookieFromRequest } from '../untils'

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { req }) {
    const token = cookieFromRequest(req, 'token')
    if (token) {
      commit('auth/setToken', token)

      await dispatch('auth/fetchUser', token)
    }

    const locale = cookieFromRequest(req, 'locale')
    if (locale) {
      commit('lang/SET_LOCALE', { locale })
    }
  },

  nuxtClientInit ({ commit }) {
    // const token = Cookies.get('token')
    // if (token) {
    //   commit('auth/setToken', token)
    // }

    const locale = Cookies.get('locale')
    if (locale) {
      commit('lang/SET_LOCALE', { locale })
    }

    const themeSting = Cookies.get('theme')
    if (themeSting) {
      commit('default/setTheme', themeSting)
    }
  }
}
