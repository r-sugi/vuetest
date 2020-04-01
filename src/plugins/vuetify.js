import Vue from 'vue'
import Vuetify, {
  VCard
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCard
  }
})

const opts = {}

export default new Vuetify(opts)
