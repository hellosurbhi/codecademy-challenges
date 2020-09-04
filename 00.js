// This is the solution for the Codecademy challenge #00 

// "Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print Fizz instead of the number 
// and for the multiples of five print Buzz. 
// For numbers which are multiples of both three and five print FizzBuzz."

//Initially I added the forloop in a function with a number variable 
// and called the function with 100 as the param but the function isn't necessary
// to run the forloop, especially when we have a single param to work with. 

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz")
    }
    else if (i % 3 == 0) {
      console.log("Fizz")
    }
    else if (i % 5 == 0) {
      console.log("Buzz")
    }
    else {
      console.log(i)
    }
  }

