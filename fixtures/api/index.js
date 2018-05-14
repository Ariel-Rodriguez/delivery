let token = ''

function fakeApi(data) {
  return new Promise(r => {
    setTimeout(() => r(data), 500)
  })
}

export default {
  async fetchRestaurantList() {
    if (!token) return { status: 401 }
    return fakeApi({ ok: true, data: require('./data/restaurants').default })
  },

  async fetchRestaurant() {
    if (!token) return { status: 401 }
    return fakeApi({ ok: true, data: require('./data/restaurant').default })
  },

  async authenticate() {
    token = 'fake-token'
    return true
  },

  isAuthenticated() {
    return !!token
  },
}
