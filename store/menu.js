export const state = () => ({
  isCollapse: true  // true - min-menu / false - standard-menu
})

export const mutations = {
  toggleNavMenu (state) {
    state.isCollapse = !state.isCollapse
  }
}

export const getters = {
  getIsCollapse: (state) => {
    return state.isCollapse
  },
}
