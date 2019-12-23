import $axios from '@/repositories/index'

const baseURL = 'https://api.github.com/'

export default {
  fetchUsersSimple(resource) {
    return $axios.get(resource)
  },
  fetchUsers() {
    return $axios({
      method: 'get',
      baseURL,
      url: '/users',
    })
  },
  fetchUser(id) {
    return $axios({
      method: 'get',
      baseURL,
      url: `/users/${id}`,
    })
  }
}
