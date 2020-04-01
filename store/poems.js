export const state = () => ({
  poems: []

})

export const mutations = {
  setPoems(state, poems) {
    state.poems = poems
  }
}

export const actions = {
  async fetch({commit}) {
    const poems = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    commit('setPoems', poems)
  }
}

export const getters = {
  poems: s => s.poems
}
