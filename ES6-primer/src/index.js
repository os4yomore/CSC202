
//console.log("Starting ES6 and above");
import logger,{appName, dummyFunction, weatherTag, Person, CustomMath, User, genericFunction11, Person1} from './tools.js'

logger("Starting ES6 and above with modularity");


logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );

logger(weatherTag`The temperature is ${25} degrees centigrade. The day is `);


let person1 = new Person1("Pius", "Onobhayedo", "Male",1.7);
let person2 = new Person1("Mary", "Joseph", "Female", undefined);


person1.firstName = "peter"; //here we have deliberately used lowercase for first letter
person2.firstName = "maria"; //here we have deliberately used lowercase for first letter



logger(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose height is ${person2.height}`);

logger(CustomMath.sqrt(100));

let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined); 
logger(`The username of ${user1.firstName} is ${user1.username}`)

logger(genericFunction11(11, 12, 15, 8));

