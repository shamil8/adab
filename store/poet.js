const url = '/api/poets'

export const state = () => ({
  poets: [],

})

export const mutations = {
  setPoets(state, poets) {
    state.poets = poets
  },
  setPoet(state, poet) {
    state.poets.push(poet)
  },

}

export const actions = {
  async fetchPoets({ commit }) {
    const { 'hydra:member': poets } = await this.$axios.$get(url + '.jsonld')

    commit('setPoets', poets)
  },

  async fetchPoet({ commit }, params) {
    await this.$axios.get(url + `/${params.id}.json`)
      .then(({ data }) => commit('setPoet', data))
      .catch( () => params.error({ statusCode: 404, message: 'Poet not found' }) )
  },

  async updatePoet({commit}, params) {
    try {
      const { data } = await this.$axios.put(url + `/${params.data.id}`, params.data, {
        headers: {'Authorization': params.token}
      })

      commit('updatePoem', data)

      return data
    } catch (err) {
      return err.response ? err.response.data : {}
    }
  }
}

export const getters = ({
  poets: s => s.poets,
  poetById: s => id => s.poets.find(poet => poet['@id'] === id)

})
