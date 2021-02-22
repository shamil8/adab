import Cookies from 'js-cookie'
import { cookieFromRequest } from '../untils'

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { req }) {
    const token = cookieFromRequest(req, 'token')

    if (token) {
      const urlWithoutProxy = process.env.API_URL || 'http://localhost:8080'
      commit('auth/setToken', token)

      await dispatch('auth/fetchUser', {token, urlWithoutProxy})
    }

    const locale = cookieFromRequest(req, 'locale')
    if (locale) {
      commit('lang/SET_LOCALE', { locale })
    }
  },

  async nuxtClientInit ({ commit, dispatch }) {
    const token = Cookies.get('token') // TODO:: CHECK IT, MAYBE NEED TO ADD 'await'!!!!
    console.log('tokenFromClient', token)

    if (token) {
      commit('auth/setToken', token)

      await dispatch('auth/fetchUser', {token})

    }

    const locale = Cookies.get('locale')
    locale && commit('lang/SET_LOCALE', { locale })

    const themeSting = Cookies.get('theme')
    themeSting && commit('default/setTheme', themeSting)
  }
}
