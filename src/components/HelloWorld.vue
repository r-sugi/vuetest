<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import httpRequestFactory from '@/repositories/httpRequestFactory'
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    }
  },
  async mounted() {
    this.root()
  },
  methods: {
    async root() {
      const res = await this.foo()
        .catch(err => { console.error(err) })
      console.log('res', res)
    },
    async foo() {
      return await this.hoge()
    },
    async hoge() {
      const http = httpRequestFactory.create('users')
      try {
        const users = await http.fetchUsers()
        return await http.fetchUser(users[0].id)
      } catch (e) {
        throw { stack: e.stack, ...e }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
