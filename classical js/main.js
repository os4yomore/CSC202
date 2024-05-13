var a; //Declare variable named a.
a = 10; //Assign the integer value of 10 to variable a.
b = 11; //Create variable b and assign a value to it. No previous declaration statement. var c = 12; //Declare variable c and assign it the value of 12 in one statement.
console.log(a); //Print the content of variable a console.log(b); 
console.log(c); //Print the content of variable c
console.log(b); //Print the content of variable b
a = 13; //Reassign a new value of type number to a.
console.log(a); //Prints out 13.
a = "Another value which is a string"; //Reassign a new value of type string to a. console.log(a); //Prints out Another value which is a string.
a = true; //Reassign a new value of type boolean - i.e. true or false. console.log(a); //Prints out true.

var d;
console.log(d); //This will print out the value undefined. 
a = null;
console.log(a); //This will print out the value null.


a = 10; //Assign variable a the value of 10
b = 20; //Assign variable b the value of 20
c = a + b; //Add value in a and b and put the result in variable c.
console.log(c); //This should print out 30
console.log(b - a); //Subtract a value from b value; displays 10 in console. console.log(b/a); //Divide b value by a value; displays 2 in console.
console.log(a*b); //Multiply a value by b value; displays 200 in console. console.log(b%a); //Divide b value by a value and return remainder; displays 0 in console. console.log(a**2); //a value raised to power 2; displays 100 in console.
a++; //Increment a value.
console.log(a); //Displays 11 in console.
b--; //decrement b value.
console.log(b); //Displays 19 in console.

a = 10;
a < 11; //Returns true
console.log(a < 11); //Displays true in console
var test = a > 20; //Declares a variable named test and gives it the value of false. console.log(test); //Displays false in console
a >= 10; //Returns true
a <= 20; //Returns true
a == 10; //Returns true
a === "10"; //Returns false because a holds an integer value of 10 and not string value "10"


a = 1;
b = 2;
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3. console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true. console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true. console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false.
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true.

var age = 17;
var adult = (age > 20)? "Yes" : "No";
console.log(adult); //This should display the string "No"

5 << 1; //Equivalent of 5 * 2
5 <<2; //Equivalent of 5 * 4
5 <<3; //Equivalent of 5 * 8
40 >> 1; //Equivalent of 40 / 2 40 >>2; //Equivalent of 40 / 4 40 >>3; //Equivalent of 40 / 8

typeof "Pius Onobhayedo"; //Returns the value "string" typeof false; //Returns the value "boolean"
typeof (10 + 10); //Returns the value "number"
typeof 33; //Returns the value "number"

var minimumVotingAge = 18; var age = 17;
if (age < minimumVotingAge){
console.log("Not eligible to vote"); }else{
console.log("Eligible to vote"); }

var dayOfTheWeekCount = 1; switch (dayOfTheWeekCount){
  case 1:
  console.log("Sunday");
  break; case 2:
  console.log("Monday");
  break; case 3:
  console.log("Tuesday");
  break; case 4:
  console.log("Wednesday");
  break; case 5:
  console.log("Thursday");
  break; case 6:
  console.log("Friday");
  break; case 7:
  console.log("Saturday");
  break; default:
  console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist") } //The switch statement prints out Sunday
  var ageRange = "below 13"; switch (ageRange){
  case "below 1": console.log("Infant");
  break; case "below 13":
  console.log("Pre-teen");
  break; case "below 20":
  console.log("Teenager");
  break; default:
  console.log("Adult")
  }//This switch statement should print out Pre-teen.

  
   for (var c = 1; c < 11; c++)
    {
       if(c == 7) break;
    console.log(c);
    }

    var n = 0; while(n != 5){
      n = Math.floor((Math.random() * 10));
      console.log(n) }


      function square(number)
      {
        number = number**2;
        return number; 
      }
        var number = 20; 
        console.log(number); 

        var accumulatedTotal = 0; //Declare and initialize a global variable.
        //Declare function named sum that expects two parameters named number1 and number2. 
        function sum(number1, number2){
        //The variables named total, number1 and number2 below are function scope variables. 
        //They are not visible from outside the function.
        var total = number1 + number2;
        //Update the global variable named accumulatedTotal.
        //Even though not declared within the function, it is visible. accumulatedTotal = accumulatedTotal + total;
        return total;
        }
        console.log(sum(2,3))
        console.log(sum(10,20)); //Call sum() function and print to console the total returned. 
        console.log(accumulatedTotal); //Show the latest value held in the global variable. This should return 35


        var vehicles = ["car","lorry","trailer"];
        console.log(vehicles)

        console.log(myExpressions[0]);  
        console.log(myExpressions[1]); 
        console.log(myExpressions[2]); 
        
var myObject = { name: {
firstName : "Pius",
surname: "Onobhayedo" },
expertise: "Software design and development", 
languages: ["Python","JavaScript","Java","C++"],
isRetired: false,
favouriteCombination: 3 + 3 }

console.log(myObject.name); //Prints out { firstName: 'Pius', surname: 'Onobhayedo' }. 
console.log(myObject['name']); //Also prints out { firstName: 'Pius', surname: 'Onobhayedo' }.
console.log(myObject.expertise); //Prints out Software design and development 
console.log(myObject['expertise']); //Also prints out Software design and development
console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
console.log(myObject.isRetired); //Prints out false 
console.log(myObject['isRetired']); //Also prints out false
console.log(myObject.favouriteCombination); //Prints out 6 
console.log(myObject['favouriteCombination']); //Also prints out 6

console.log(myObject.name.firstName); //Prints out Pius. 
console.log(myObject['name']['firstName']); //Also prints out Pius.
myObject.favouriteCombination = 9 + 9; 
console.log(myObject.favouriteCombination); //Prints out 18

var phones = {
  make: 'Samsung',
  model: 'S7',
  cost: 500 }
  console.log('make' in phones); //Prints out true
  delete phones.make; //Delete property phones.make 
  console.log('make' in phones); //Prints out false

  function Person(firstName, lastName, height, weight){ //Below are properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
    //Below is a method
    this.getFullName = function(){ return this.firstName + " " + this.lastName}
    }


    var person1 = new Person("Pius", "Onobhayedo",1.72, 80); var person2 = new Person("Mary", "Joseph", 1.7, 70)
    console.log (person1.firstName); //Prints out Pius
    console.log (person1.getFullName()); //Prints out Pius Onobhayedo 
    console.log (person2.firstName); //Prints out Mary
    console.log (person2.getFullName()); //Prints out Mary Joseph   
    
    Math.E; //The static property E holds the value of Euler’s number i.e. 2.718281828459045.
    Math.PI; //The static property PI holds the value of Pi i.e. 3.141592653589793.
    Math.cos(45); //Method returns the cosine of number passed as argument.
    Math.abs(-30); //Method returns the absolute number equivalent of argument.
    Math.random(); //Method returns random floating-point number between 0 and 1, inclusive of 0 and exclusive of 1. Math.max(10,5,60); //Method returns the maximum number among the arguments passed.
    Math.min(10,5,60); //Method returns the minimum number among the arguments passed.

    var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript']; 
    console.log(languages.indexOf('JavaScript')); //This should output 1
    //To return all occurrences, loop, indicating start Index each time, as we did for strings var searchTerm = 'JavaScript';
    var matchIndex;
    var startIndex = 0; //start from the beginning
    while((matchIndex = languages.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found console.log(matchIndex); //Output the index of match
    startIndex = matchIndex + 1; //change search start position to beyond the last match index
    }

    var x = 'Let us search this text for pius. If Pius is found, ...';
    var y = x.slice(-1); //Extract from the last position.
    console.log(y); // Should return the string '...'
    var y = x.slice(-16, -12); //Extract from the 16th position from the rear to the 12th position from the rear 
    console.log(y); //Should output the string 'Pius'
    var y = x.slice(-16);// Extract the letters from position 16 from the rear 
    console.log(y);//This should return 'Pius is found, ...'