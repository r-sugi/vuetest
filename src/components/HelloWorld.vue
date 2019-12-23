<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import httpRequestFactory from '@/repositories/httpRequestFactory'
import Hoge from '@/session'

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    }
  },
  async mounted() {
    await this.root()
  },
  methods: {
    async root() {
      const httpRequest = httpRequestFactory.create('users')
      const session = new Hoge(httpRequest)
      const res = await session.exec().catch(err => { console.error(err) })
      console.log(res)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
