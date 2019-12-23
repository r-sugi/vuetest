export default class Hoge {
  constructor(httpRequest) {
    this.httpRequest = httpRequest
  }

  async exec() {
    return await this._foo()
  }

  async _foo() {
    return await this._hoge()
  }

  async _hoge() {
    try {
      const users = await this.httpRequest.fetchUsers()
      return await this.httpRequest.fetchUser(users[0].id)
    } catch (e) {
      throw { stack: e.stack, ...e }
    }
  }
}
