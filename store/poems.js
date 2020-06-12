export const state = () => ({
  poems: []

})

export const mutations = {
  setPoems(state, poems) {
    state.poems = poems
  },
  setPoem(state, poem) {
    state.poems.push(poem)
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
  }
}

export const getters = {
  poems: s => s.poems,
  poemById: s => id => s.poems.find(poem => poem.id === id)
}
