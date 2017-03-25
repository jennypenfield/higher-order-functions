console.log('********************************************************************************************************************************************')
console.log('')
console.log('Test Results Below')
console.log('__________________')

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should,
  assert = chai.assert

function checkFuncBasics (name, argNum, msg) {
  try {
    var func = eval(name)
  } catch (e) {
    assert.equal(undefined, name, msg || 'Make sure your function is called ' + name + ', case-sensitive.')
  }
  if (argNum) assert.equal(func.length, argNum, 'Your function should take ' + argNum + ' argument(s) (that means inputs). Does it?')
}

describe('forEach()', function () {
  it('should be a function that takes an array and a function', function () {
    checkFuncBasics('forEach')
  })
  it('should run your callback function on each element of your array', function () {
    var total = 1
    forEach([1, 2, 3, 4], function (a) { total *= a })
    expect(total).to.equal(24)
  })
})

describe('map()', function () {
  it('should be a function that takes an array and a function', function () {
    checkFuncBasics('map')
  })
  it('should run your callback function over your input array and return a new array where every element has been transformed by the callback', function () {
    var squares = map([1, 2, 3, 4], function (v) { return v * v })
    expect(squares[0]).to.equal(1)
    expect(squares[1]).to.equal(4)
    expect(squares[2]).to.equal(9)
    expect(squares[3]).to.equal(16)
  })
})

describe('filter()', function () {
  it('should be a function that takes an array and a function', function () {
    checkFuncBasics('filter')
  })
  it('should run your callback function over each element of your array and exclude any elements that do not fit the condition of your callback', function () {
    var evens = filter([1, 2, 3, 4], function (v) { return v % 2 === 0 })
    expect(evens[0]).to.equal(2)
    expect(evens[1]).to.equal(4)
  })
})

describe('reduce()', function () {
  it('should be a function that takes an array, a function and a starting value', function () {
    checkFuncBasics('reduce', 3)
  })
  it('should combine all elements of your array into a new value.', function () {
    var sum = reduce([1, 2, 3, 4],
			function (accumulator, element) {
  return accumulator + element
}, 0)
    assert.equal(10, sum)

    var product = reduce([2, 2, 3, 4],
			function (accumulator, element) {
  return accumulator * element
}, 1)

    assert.equal(48, product)

    var htmlString = reduce(['home', 'about', 'contact us'],
			function (acc, el) {
  return acc + `<a href="#${el.replace(' ', '-')}">${el}</a>`
}, '')

    assert.equal(htmlString,
			'<a href="#home">home</a><a href="#about">about</a><a href="#contact-us">contact us</a>')
  })
})

describe('people', function () {
  it('should be sorted into alphabetical order', function () {
    expect(people[0].name).to.equal('Brian')
    expect(people[1].name).to.equal('Jesse')
    expect(people[2].name).to.equal('Justin')
  })
})

describe('newCustomers', function () {
  it('`newCustomers` should be a transformation of the customers array according to the criteria described in worksheet.js', function () {
    expect(newCustomers[0].fullname).to.equal('Jack White')
    expect(newCustomers[1].fullname).to.equal('Joe Blogs')
  })
})
