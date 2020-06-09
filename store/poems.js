export const state = () => ({
  poems: [],
  poem: {}

})

export const mutations = {
  setPoems(state, poems) {
    state.poems = poems
  },
  setPoem(state, poem) {
    state.poem = poem
  },
}

export const actions = {
  async fetchPoems({commit}) {
    const poems = await this.$axios.get('/api/poems.json')
    commit('setPoems', poems.data)
  },
  async fetchPoem({commit}, id) {
    const poem = await this.$axios.get(`/api/poems/${id}.json`)
    commit('setPoem', poem.data)
  }
}

export const getters = {
  poems: s => s.poems,
  poem: s => s.poem
}
