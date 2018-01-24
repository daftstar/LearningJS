/*
Exercise 1
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/


var symbol = "#";
var count = 0;

while (count != 7) {
    console.log(symbol);
    symbol += "#";
    count += 1;
}



/*
Exercise 2
Fizz Buzz
*/

// VERSION A
var count = 0;
while (count < 101) {

    if (count == 0)
        console.log(count);
    else if (count % 15 == 0) console.log(count + " FIZZ BUZZ!!!");
    else if (count % 3  == 0) console.log(count + " FIZZ!");
    else if (count % 5  == 0) console.log(count + " BUZZ!!");
    else (console.log(count));
    count += 1;
}

// VERSION B - less repitiion
var n = 0;
var text = "";
while (n <= 100) {
    if (n == 0) text = "";
    else if (n % 15 == 0) text = "FizzBuzz";
    else if (n % 3 == 0) text = "Fizz";
    else if (n % 5 == 0) text = "Buzz";
    else text = "";
    console.log(n + " " + text);
    n += 1;
}


/*
Exercise 3
Chess

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

var size = 8;
var rep = size / 2;
var currentLine = 1;
var text = "";

while (currentLine <= size){
    if (currentLine % 2 == 0) text = "#-".repeat(rep);
    else (text = "-#".repeat(rep));
    console.log(`${currentLine}: ${text}`);
    currentLine += 1;
}
