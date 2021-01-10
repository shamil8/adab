export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async fetch({ store, params, error }) {
    let poem = store.getters['poem/poemById'](+params.id)

    if (typeof poem === 'undefined' || poem.id !== params.id) {   //check it!
      await store.dispatch('poem/fetchPoem', {id: params.id, error})
    }
  },
}
