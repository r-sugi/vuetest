export default class Counter {
  count = 0;

  static publicStatic = 'public static'

  static getPublicStatic() {
    return this.publicStatic
  }

  incr() {
    return ++this.count
  }

  test() {
    return this.count
  }
}
