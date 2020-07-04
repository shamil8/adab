const url = '/api/poets'

export const state = () => ({
  poets: [],

})

export const mutations = {
  setPoets(state, poets) {
    state.poets = poets

    state.poets.push({id: 22, name: 'Садриддин', surname: 'Айни'})
  },
  setPoet(state, poet) {
    state.poets.push(poet)
  },

}

export const actions = {
  async fetchPoets({commit}) {
    const { data } = await this.$axios.get(url + '.jsonld')
    console.log(data['hydra:member'])
    commit('setPoets', data['hydra:member'])
  },

  async fetchPoet({commit}, params) {
    await this.$axios.get(url + `/${params.id}.json`)
      .then((res) => commit('setPoem', res.data))
      .catch( () => params.error({ statusCode: 404, message: 'Poem not found' }) )
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
