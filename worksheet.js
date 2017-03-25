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
