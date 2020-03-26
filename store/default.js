export const state = () => ({
  theme: 'dark',   // 'dark' or 'light'
  lang: 'ru'
})

export const mutations = {
  editTheme (state, status) {
    state.theme = status
  },
  editLang (state, lang) {
    state.lang = lang
  }
}

export const getters = {
  getTheme: (state) => {
    return state.theme
  },
  getLang (state) {
    return state.lang
  }
}
