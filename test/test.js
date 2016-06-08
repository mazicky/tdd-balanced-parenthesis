import chai from 'chai'
import parenhesis from '../src/utils/parenthesis'

chai.should()

describe ('Test', () => {
  it ('should return the index of given number', () => {
    parenthesis('(').should.equal(false)
  })
})
