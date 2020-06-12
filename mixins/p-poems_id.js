export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async fetch({store, params, error}) {
    let poem = store.getters['poems/poemById'](+params.id)

    if (typeof poem === 'undefined' || poem.id !== params.id) {
      await store.dispatch('poems/fetchPoem', {id: params.id, error})
    }
  },
}
