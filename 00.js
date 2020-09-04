// This is the solution for the Codecademy challenge #00 available on https://discuss.codecademy.com/t/essential-information-on-code-challenges/83909


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

