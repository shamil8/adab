export const state = () => ({
  isCollapse: false
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
