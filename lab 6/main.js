// 1. Function to print "Hello, World!" three times.
function hello() {
    console.log("Hello, World!");
    console.log("Hello, World!");
    console.log("Hello, World!");
  }
  
  // 2. Function to find the perimeter of a rectangle.
  function rectanglePerimeter(side1, side2) {
    return 2 * (side1 + side2);
  }
  
  // 3. Function to find the area of a circle.
  function circleArea(radius) {
    return 3.14 * radius * radius;
  }
  
  // 4. Function to greet a person by name.
  function greeting(name) {
    console.log(`Hi, ${name}!`);
  }
  
  // 5. Function to return the ratio of two numbers.
  function ratio(num1, num2) {
    return num1 / num2;
  }
  
  // 6. Function to return the sum of squares of two numbers.
  function sumOfSquares(num1, num2) {
    return (num1 * num1) + (num2 * num2);
  }
  
  // 7. Function to return the product of three numbers.
  function productOfThree(num1, num2, num3) {
    return num1 * num2 * num3;
  }
  
  // 8. Function to convert dollars to tenge.
  function dollarsToTenge(dollars) {
    return dollars * 424.39;
  }
  
  // 9. Function to check whether a number is positive or negative.
  function checkPositiveNegative(num) {
    if (num > 0) {
      console.log("The number is positive.");
    } else if (num < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  
  // 10. Function to check whether two numbers are equal.
  function checkEquality(num1, num2) {
    if (num1 === num2) {
      console.log("The two numbers are equal.");
    } else {
      console.log("The two numbers are not equal.");
    }
  }
  
  // 11. Function to check whether a number is even or odd.
  function checkEvenOdd(num) {
    if (num % 2 === 0) {
      console.log("The number is even.");
    } else {
      console.log("The number is odd.");
    }
  }
  
  // 12. Function to check whether a number is between 0 and 1.
  function checkBetweenZeroAndOne(num) {
    if (num > 0 && num < 1) {
      console.log("The number is between 0 and 1.");
    } else {
      console.log("The number is not between 0 and 1.");
    }
  }
  
  // 13. Function to return the greatest of two numbers.
  function greatestOfTwo(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  // 14. Function to return the greatest of three numbers.
  function greatestOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }

  // 15. Function to return the day of the week by its number.
  function dayOfWeek(dayNum) {
    if (dayNum === 1) {
      return "Monday";
    } else if (dayNum === 2) {
      return "Tuesday";
    } else if (dayNum === 3) {
      return "Wednesday";
    } else if (dayNum === 4) {
      return "Thursday";
    } else if (dayNum === 5) {
      return "Friday";
    } else if (dayNum === 6) {
      return "Saturday";
    } else if (dayNum === 7) {
      return "Sunday";
    } else {
      return "Invalid day number.";
    }
  }
  

