export default ({ store, redirect }) => {
  if (store.getters['auth/hasToken']) {
    return redirect('/register')
  }
}
