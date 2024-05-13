//illustraating modularity

var logger = function(output)
{
  console.log(output)
}
export default logger;

var logger = function (output) {
  console.log(output)
}

export var appName = "ES6 Review";

export var dummyFunction = () => {
  return "I am a dummy function";
}
//illustrating tagged templates
export var weatherTag = function(string, temperature){
  //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions. 
  //We can capture these two parts as array elements
  var substring0 = string[0];
  var substring1 = string[1];
  var weatherCondition;
  //Let us use the embedded expressions for some logic
  if (temperature > 26){
  weatherCondition = "hot day" }else{
  weatherCondition = "cool day" }
  return `${substring0}${temperature}${substring1}${weatherCondition}` }


//illustragting arrow functions + spread operator
export const genericFunction1 = () => {
  const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
  const [firstLang, secondLang, ...otherLang] = languages; //assign first element in languages array to firstLang and second element to secondLang.
  return `First language is ${firstLang} and the second is ${otherLang}`;
}


//illustrating default feature 
export const genericFunction = (a, b=1) => {
  //This function multiplies any two numbers
  //if only one argument is sent as argument when function is called, b will default to 1. return (a * b);
  }

export function multiplier(){
    var product = 1;
    if (arguments.length < 2){
    throw new Error("Illegal arguments counts. Arguments must be greater than 1") }
    for (var x=0; x < arguments.length; x++){ product = product * arguments[x];
    }
    return product; }


//illustrating rest feature 
export const genericFunction20 = (m, c, ...x) => {
  //This function returns an array of {x,y} objects for all the x arguments passed.
  //Map the array of x into an array of {x,y} object, with the y value calculated each time. 
  let coordinates = x.map((x) => {
  return {'x': x, 'y' : (m*x) + c}; })
  //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for...of loop introduced in ES6 as shown below
  let output = 'The (x,y) values are as follows: ' 
  for (let coordinate of coordinates){
  let xy = `(${coordinate.x},${coordinate.y})`
  output+=xy; }
  //Previous style...(Going forward, we shall only be using the new for...of loop in such scenario) //coordinates.forEach((coordinate)=>{
  // let xy = `(${coordinate.x},${coordinate.y})`;
  // output+=xy;
  //})
  return output; }
  
//illustrating class declarations

export class Person1{
  constructor(firstName, lastName, gender, height){
  this.firstName = firstName; 
  this.lastName = lastName; 
  this.gender = gender; 
  this.height = height;
  } };




  export const genericFunction7 = () => { //declare an object literal
    let personalInformation = {
    firstName : 'Pius',
    lastName : 'Onobhayedo',
    gender : 'Male',
    religion : 'Christianity (Catholic)', fathersName : 'John', mothersName : 'Patricia'
    }
   
    return `The first name is ${firstName} and the lastName is ${lastName}. Others are: gender = ${otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`;
    }


//accessing object properties
  const toTitleCase = (str) => {
  str.toLowerCase();//first set the whole string to lowercase in case
  return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase 
}

  export class Person{
  constructor(firstName, lastName, gender, height){
  this.firstName = firstName; this.lastName = lastName; this.gender = gender; this.height = height
  }
  getFirstName(){
  return toTitleCase(this.firstName)
  } };

//static class methods
export class CustomMath{
  static sqrt(a){
  return Math.sqrt(a);
  
  }
  static pow(a,b){
  return Math.pow(a,b); }
  }
  
//illustrating inheritance

export class User extends Person{
  constructor(username, password, firstName, lastName, gender, height){
  super(firstName, lastName, gender, height); this.username = username;
  this.password = password;
  } }


  


    
//the gradient function    
    export const genericFunction11 = (m, c, ...x) => {
      let coordinates = x.map((x) => {return {'x': x, 'y' : (m*x) + c}; })
      let output = 'The (x,y) values are as follows: ' 
      for (let coordinate of coordinates){
      let xy = `(${coordinate.x},${coordinate.y})`
      output+=xy; }
    
      return output; }

