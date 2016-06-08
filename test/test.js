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

  it ('different parethesis', () => {
    parenthesis('{}').should.equal(true)
    parenthesis('(){}').should.equal(true)
    parenthesis('({)}').should.equal(false)
    parenthesis('{()}').should.equal(true)
    parenthesis('{(){}}').should.equal(true)
  })

  it ('final', () => {
    parenthesis('{{)(}}').should.equal(false)
    parenthesis('({)}').should.equal(false)
    parenthesis('[({})]').should.equal(true)
    parenthesis('{}([])').should.equal(true)
    parenthesis('{()}[[{}]]').should.equal(true)
  })
})
