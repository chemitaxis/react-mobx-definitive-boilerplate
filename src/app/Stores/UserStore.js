import { observable, action, computed } from 'mobx'

// This is a demo store for simulating sample data

class UserStore {
  @observable isLoading
  @observable authUser=
  {
    token: null,
    email: null
  }
  constructor () {
    this.isLoading = false
  }

  @action('Set user auth')
  setUser (user) {
    this.authUser.token = user.token
    this.authUser.email = user.email
  }

  @action('Show Loader')
  showLoader () {
    this.isLoading = true
  }
  @action('Hide Loader')
  hideLoader () {
    this.isLoading = false
  }

  @computed get authenticated () {
    return this.authUser.token !== null
  }
}

const userStore = new UserStore()

export default userStore
