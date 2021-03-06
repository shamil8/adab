import Cookies from 'js-cookie'

export const state = () => ({
  theme: 'light',   // 'dark' or 'light'
  // locales: ['en', 'tj', 'ru'],
  // locale: 'tj',
  screenName: {
    large: 'large',
    medium: 'medium',
    small: 'small'
  },
  screen: {
    large: 1200,
    medium: 992,
    small: 768
  },
  window: {    // default
    width: 1200,
    height: 800,
    type: 'large'
  }
})

export const mutations = {
  setTheme (state, status) {
    const htmlElement = window.document.querySelector('html')

    htmlElement.setAttribute('theme', status)
    state.theme = status
  },
  setLang (state, lang) {
    state.lang = lang
  },
  setWindowWidth (state, width) {
    state.window.width = width
    if (state.screen.large <= width)
      state.window.type = state.screenName.large
    else if (state.screen.medium <= width || state.screen.small <= width )
      state.window.type = state.screenName.medium
    else
      state.window.type = state.screenName.small
  },
  // setWindowHeight (state, height) {
  //   state.window.height = height
  // }
  // SET_LANG (state, locale) {
  //   if (state.locales.includes(locale)) {
  //     state.locale = locale
  //   }
  // }
}

export const actions = {
  saveTheme({commit}, status) {
    commit('setTheme', status)

    Cookies.set('theme', status)
  }
}

export const getters = {
  theme: s => s.theme,
  lang: s => s.lang,

  getScreen (state) {
    return state.screen
  },
  getWindow(state) {
    return state.window
  },
  getScreenName(state) {
    return state.screenName
  }
}
