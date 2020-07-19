import { sayHello } from '../src/hello-world'
import { expect } from 'chai'

describe('Hello world test', () => {
  it('Should return hello message', () => {
    expect('Hello there!').to.equal(sayHello())
  })
})
