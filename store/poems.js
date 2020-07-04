import da from "element-ui/src/locale/lang/da"

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
    const { data } = await this.$axios.get('/api/poems.json')
    commit('setPoems', data)
  },

  async fetchPoem({commit}, params) {
    await this.$axios.get(`/api/poems/${params.id}.json`)
      .then((res) => commit('setPoem', res.data))
      .catch( () => params.error({ statusCode: 404, message: 'Poem not found' }) )
  },

  async updatePoem({commit}, params) {
    try {
      const { data } = await this.$axios.put(`/api/poems/${params.data.id}`, params.data, {
        headers: {'Authorization': params.token}
      })

      commit('updatePoem', data)

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
