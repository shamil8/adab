// https://github.com/cretueusebiu/laravel-nuxt/blob/master/client/store/auth.js
import Cookies from 'js-cookie'

// state
export const state = () => ({
  user: null,
  token: null
})

// getters
export const getters = {
  user: s => s.user,
  token: s => s.token,
  hasToken: s => !!s.token
}

// mutations
export const mutations = {
  setToken(state, token) {
    state.token = token
  },

  setUser(state, user) {
    state.user = user
  },

  clearToken(state) {
    state.token = null
  },

  logout(state) {
    state.user = null
    state.token = null
  },

  UPDATE_USER (state, { user }) {
    state.user = user
  }
}

// actions
export const actions = {
  saveToken ({commit}, {token, remember}) {
    commit('setToken', token)

    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  async fetchUser ({commit}, token) {
    try {
      const { data } = await this.$axios.post('/api/user', {token})

      data['@id'] = '/api/users/' + data.id

      commit('setUser', data)
    } catch (e) {
      Cookies.remove('token')

      commit('clearToken')
    }
  },

  updateUser ({ commit }, payload) {
    commit('UPDATE_USER', payload)
  },

  logout ({ commit }) {
    this.$axios.get('/api/logout')

    Cookies.remove('token')

    commit('logout')
  },

  async fetchOauthUrl (ctx, { provider }) {
    const { data } = await this.$axios.post(`/oauth/${provider}`)

    return data.url
  }
}
