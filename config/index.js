import en from '../lang/en-US.js'
import tj from '../lang/tj-TJ.js'
import ru from '../lang/ru-RU.js'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'tj',
      iso: 'tj-TJ',
      name: 'Тоҷики'
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Russian'
    }
  ],
  defaultLocale: 'tj',
  routes: {
    about: {
      tj: '/a-propos',
      ru: '/about-us'
    },
    poems: {
      tj: '/articles'
    },
    'poems/_id': {
      tj: '/article/:id?',
      ru: '/articulo/:id?'
    },
    // 'dynamicNested/_category': {   // example
    //   tj: 'imbrication-dynamique/:category'
    // }
  },
  vueI18n: {
    fallbackLocale: 'tj',
    messages: { en, tj, ru }
  }
}
