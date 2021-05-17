module.exports = {
  sum(a, b) {
    return a + b
  },
  sayHello() {
    return 'hello'
  },

  returnSomeObject: () => {
    return {one:1, two:2}
  },

  returnsTrue: () => {
    return true
  },

  returnsArray: () => {
    return ['John', 'Ariel', 'Willow', 'Zach']
  }
}
