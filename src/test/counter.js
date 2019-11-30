export default class Counter {
  #count = 0;

  static publicStatic = "public static"
  static getPublicStatic() {
    return this.publicStatic
  }

  static #privateStatic = "private static"
  static getPrivateStatic() {
    return Counter.#hote()
  }

  static #hote() {
    return this.#privateStatic;
  }

  incr() {
    console.log("incr() called")
    const hh = this.#count
    console.log(`access count: ${hh}`)
    return ++this.#count
  }
  getCount() {
    console.log("getCount() called")
    return this.#test()
  }

  #test() {
    console.log("test() called")
    return this.#count
  }
}
