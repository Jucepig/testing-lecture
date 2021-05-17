const { sum, sayHello, returnSomeObject, returnsTrue, returnsArray } = require('../functions') 
// import { sum, sayHello } from '../functions

test('add 1 and 2 together to equal 3', ()=> {
  expect(sum(1,2)).not.toBeNaN()
  expect(sum(1,2)).toBe(3)
})

test('sayHello method says Hello', ()=> {
  expect(sayHello()).toBe('hello')
})

test('Object assignment works properly', ()=> {
  expect(returnSomeObject()).toEqual({one: 1, two: 2})
})

test('returnsTrue function returns True', ()=> {
  expect(returnsTrue()).toBeTruthy()
})

test('returnsArray function returns an array containing the name ariel', ()=>{
  expect(returnsArray()).toContain('Ariel')
})