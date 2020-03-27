export const state = () => ({
  navMenu: {
    isCollapse: true,  // true - collapse-menu / false - normal-menu
    collapse: '54px',
    normal: '200px',
    defaultActive: '1', // index='2-4-1'
  }

})

export const mutations = {
  toggleNavMenu (state) {
    state.navMenu.isCollapse = !state.navMenu.isCollapse
  }
}

export const getters = {
  getNavMenu: (state) => {
    return state.navMenu
  },
}
