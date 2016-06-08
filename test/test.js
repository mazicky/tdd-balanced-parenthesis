import chai from 'chai'
import parenthesis from '../src/utils/judge'

chai.should()

describe ('Test', () => {
  it ('should return the index of given number', () => {
    parenthesis('(').should.equal(false)
    parenthesis(')').should.equal(false)
    parenthesis('()').should.equal(true)
    parenthesis('((').should.equal(false)
    parenthesis(')(').should.equal(false)
  })
})
