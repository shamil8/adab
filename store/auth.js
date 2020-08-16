// https://github.com/cretueusebiu/laravel-nuxt/blob/master/client/store/auth.js
import Cookies from 'js-cookie'

// state
export const state = () => ({
  user: null,
  token: null,
  roles: {
    user: 'ROLE_USER',
    moderator: 'ROLE_MODERATOR',
    admin: 'ROLE_ADMIN',
    debug: 'ROLE_DEBUG',
    teacher: 'ROLE_TEACHER'
  }
})

// getters
export const getters = {
  user: s => s.user,
  token: s => s.token,
  hasToken: s => !!s.token,
  isUser: s => s.user && s.user.hasOwnProperty('roles')
    && getters.hasToken(s)
    && s.user.roles.includes(s.roles.user),

  isAdmin: s => getters.isUser(s) && s.user.roles.includes(s.roles.admin),
  isDebug: s => getters.isUser(s) && s.user.roles.includes(s.roles.debug),
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

  async fetchAuthUser(context, userData) {
    try {
      const {data} = await this.$axios.post('/api/auth_token', userData)  // get token this user

      if(data.hasOwnProperty('token')) {  // if we got token
        const {token} = data

        // Save the token.
        await context.dispatch('saveToken', {token, remember: true})

        if (userData.hasOwnProperty('isLogin') && userData.isLogin === true) {  // we'll need to get user
          await context.dispatch('fetchUser', token)  // got a user and save data
        }

        return {isSuccess: true}
      }

      return {isSuccess: false, error: 'Error auth user (we didn\'t get token)'}
    } catch (e) {
      return e
    }
  },
  async fetchUser ({commit}, token) {   // after login | save user data
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
  }
}
