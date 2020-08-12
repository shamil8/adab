const url = '/api/poems'

export const state = () => ({
  poems: []

})

export const mutations = {
  setPoems(state, poems) {
    state.poems = poems
  },
  setPoem(state, poem) {
    state.poems.push(poem)
  },
  updatePoem(state, data) {
    const objIndex = state.poems.findIndex(poem => poem.id === data.id)

    state.poems[objIndex] = data
  }
}

export const actions = {
  async fetchPoems({commit}) {
    const { data } = await this.$axios.get(url + '.jsonld')

    commit('setPoems', data['hydra:member'])
  },

  async fetchPoem({commit}, params) {
    await this.$axios.get(url + `/${params.id}.json`)
      .then((res) => commit('setPoem', res.data))
      .catch( () => params.error({ statusCode: 404, message: 'Poem not found' }) )
  },

  async updatePoem({commit}, params) {
    try {
      const config = {
        headers: {'Authorization': `BEARER ${params.token}`}
      }

      const { data } = params.isUpdate
        ? await this.$axios.put(url + `/${params.data.id}`, params.data, config)    // change the poem
        : await this.$axios.post(url, params.data, config)                              // create a poem

      commit(params.isUpdate ? 'updatePoem' : 'setPoem', data)

      return data
    } catch (err) {
      return err.response ? err.response.data : {}
    }
  }
}

export const getters = {
  poems: s => s.poems,
  poemById: s => id => s.poems.find(poem => poem.id === id)
}
