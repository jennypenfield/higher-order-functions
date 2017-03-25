//  Part I

// ----------------------------
// write your own forEach() function.
// your function should take an array and a callback as input.
// it should run the callback on each element in the array.
// ----------------------------
function forEach (arr1, func1) {
  for (var i = 0; i < arr1.length; i++) {
    func1(arr1[i])
  }
}

//  Part II
// ----------------------------
// write your own map() function.
// your function should take an array and a callback as input.
// it should return a new array, where every element in the
// original has been transformed by the callback. .
// ----------------------------
function map (arr1, func1) {
  var outArr = []
  for (var i = 0; i < arr1.length; i++) {
    outArr.push(func1(arr1[i]))
  } return outArr
}
//  Part III
// ----------------------------
// write your own filter() function.
// your function should take an array and a callback as input.
// it should return a new array, where elements have been
// kept or excluded according to the callback.
// ----------------------------
function filter (arr1, func1) {
  var outArr = []
  for (var i = 0; i < arr1.length; i++) {
    if (func1(arr1[i])) {
      outArr.push(arr1[i])
    }
  }
  return outArr
}

//  Part IV
// ----------------------------
// write your own reduce() function.

function reduce (arr1, func1, startVal) {
  var total = startVal
  for (var i = 0; i < arr1.length; i++) {
    total = func1(total, arr1[i])
  }
  return total
}

// this one's new. it should take an array, a callback and
// a starting value as input.

// calling .reduce() should combine all the elements of the
// array into a single value. the starting value tells what to
// start with.

// the callback should take as input a "running total" and
// an array element, in that order. it should return an update
// to the running total.

// look at the tests for clarification.
// ----------------------------

//  HARD MODE
// ----------------------------
// using the built-in array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name: 'Matt', alma_mater: 'Univ of Texas - Austin'},
    {name: 'Brian', alma_mater: 'Texas A&M'},
    {name: 'Jesse', alma_mater: 'Univ of Texas - Austin'},
    {name: 'Justin', alma_mater: 'Univ of Florida'}
]

people.sort(function (a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
  return 0
})

console.log(people)

// ----------------------------
// Using array.map(), array.filter(), and array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname

// store the resulting mapped, filtered, and sorted array
// under the variable name `newCustomers`. i'll look
// for that name in my tests.
// ----------------------------

var customers = [
    {first: 'Joe', last: 'Blogs'},
    {first: 'John', last: 'Smith'},
    {first: 'Dave', last: 'Jones'},
    {first: 'Jack', last: 'White'}
]

function getNamesWithJ (obj) {
  if (obj.first[0].toLowerCase() === 'j') return obj
}

function getFullName (obj) {
  return {fullname: obj.first + ' ' + obj.last}
}

function sortAtoZ (a, b) {
  if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) return -1
  if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1

  return 0
}

var newCustomers = customers.filter(getNamesWithJ).map(getFullName).sort(sortAtoZ)


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
