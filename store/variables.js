export const state = () => ({
  searchText: ''

})

export const mutations = {
  setSearchText (state, text) {
    state.searchText = text
  }
}

export const getters = {
  getSearchText: (state) => {
    return state.searchText
  },
}
