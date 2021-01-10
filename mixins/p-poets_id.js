export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ store, params, error }) {
    let poet = store.getters['poet/poetById'](+params.id)

    if (typeof poet === 'undefined' || poet.id !== params.id) {   //check it!
      await store.dispatch('poet/fetchPoet', {id: params.id, error})
    }
  },
}
