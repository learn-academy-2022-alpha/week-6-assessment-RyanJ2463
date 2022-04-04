// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
// a describe method that lists the name of the function OR naming of the particular test.
describe("capital", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(capital(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ● capital › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//     ReferenceError: capital is not defined


 
// b) Create the function that makes the test pass.
// create a function called capital that takes in an array
// map over the array and split the name 
// at 0 index use toUpperCase then return the rest of the word 
// return the name with .join with adding a 'is' and and '.' 
const capital = (array) => {
  let ans = array.map(value => {
    let name = value.name.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1)
    )
    return value = name.join(" ") + ' is ' + value.occupation + '.'
  })
  return ans
}



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
// a describe method that lists the name of the function OR naming of the particular test.
describe("numRemain", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {

    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(numRemain(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(numRemain(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// // ● numRemain › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// // ReferenceError: numRemain is not defined


// // b) Create the function that makes the test pass.
// create a function called numRemain that takes in an array
// create a empty array to push the result into
// map through the array and check if the value is a number 
// if a number push it into the empty array and use module 3 
const numRemain = (array) => {
  let result = []
  array.map(value => {
    if(typeof value === "number"){
      result.push(value % 3)
    }
  })
  return result
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
// a describe method that lists the name of the function OR naming of the particular test.
describe("sumCubed", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it(" takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10] 
    // Expected output: 1125

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// ● sumCubed ›  takes in an array of numbers and returns the sum of all the numbers cubed.

// ReferenceError: sumCubed is not defined




// b) Create the function that makes the test pass
// create a function names sumCubed that takes in an array
// map through the array and cube each value. Math.pow
// use .reduce to add the cubed numbers together 

const sumCubed = (array) => {
  return array.map(val => Math.pow(val, 3)).reduce((a, b) => a + b)
}
