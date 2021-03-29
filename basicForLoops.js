// Comparison and Logic Operators
// Here is a table of the comparison operators you can use in your Python programs.

// Operator	Description	Example
// ==	Checks if the value of two operands are equal	1 == 2 => False
// 1 == 1 => True
// !=	Checks if the value of two operands are not equal	1 != 2 => True
// 1 != 1 => False
// >	Checks if the value of left operand is greater than the value of right operand	1 > 2 => False
// 2 > 1 => True
// <	Checks if the value of left operand is less than the value of right operand	1 < 2 => True
// 2 < 1 => False
// >=	Checks if the value of left operand is greater than or equal to the value of right operand	1 >= 2 => False
// 2 >= 2 => True
// <=	Checks if the value of left operand is less than or equal to the value of right operand	1 <= 2 => True
// 2 <= 2 => True
// and	Checks that each expression on the left and right are both True	(1 <= 2) and (2 <= 3) => True
// (1 <= 2) and (2 >= 3) => False
// (1 >= 2) and (2 >= 3) => False
// or	Checks if either the expression on the left or right is True	(1 <= 2) or (2 >= 3) => True
// (1 <= 2) or (2 <= 3) => True
// (1 >= 2) or (2 >= 3) => False
// not	Reverses the true-false value of the operand	not True => False
// not False => True
// not 1 >= 2 => True
// not 1 <= 2 => False
// not (1 <= 2 and 2 >= 3)  => True
// not 1 <= 2 and 2 >= 3 => False

// NOTE: 
// print("Hello" + 42) Type Casting or Explicit Type Conversion, results in an error for python and JS both

// 1) Basic - Print all integers from 0 to 150. COMPLETE.
for (i = 0; i < 151; i++ ){
    // console.log(i);
}

// 2) Multiples of Five - Print all the multiples of 5 from 5 to 1,000. COMPLETE
for (i = 0; i < 1001; i++){
    if(i % 5 === 0){ // The === 0 says to the action below if i is divisible by 5 (aka a multiple of 5)
        // console.log(i);
    }
}

// 3) Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo". COMPLETE.
for (i = 0; i < 101; i++){
    // console.log(i)
    if(i % 5 == 0){
        // console.log("Coding");
    }
    if(i % 10 == 0){
        // console.log("Coding Dojo")
    }
}

// 4) Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum. COMPLETE.
var count1 = 0;
for (i = 0; i < 500001; i++){
    if(i % 2 === 0){
        // console.log("Its Even");
    }
    else{
        var sum = count1 + i;
        // console.log(sum);
    }
}

// 5) Countdown by Fours - Print positive numbers starting at 2018, counting down by fours. COMPLETE.
for (i=2018; i>0; i--){
    if(i%4 === 0){
        // console.log(i);
    }
}


// 6) Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult.  COMPLETE.
//    For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines) 

var lowNum = 0;
var highNum = 51;
var mult = 3;
for (i=lowNum; i<highNum; i++){
    if(i%mult===0){
        // console.log(i);
    }
}