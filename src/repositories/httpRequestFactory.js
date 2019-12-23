import users from '@/repositories/users'

const repositories = {
  users,
}

export default {
  create: name => repositories[name]
}
