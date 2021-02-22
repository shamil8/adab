export default function ({ store, redirect }) {
  if (!store.getters["auth/hasToken"]) {
    return redirect('/login')
  }
}
