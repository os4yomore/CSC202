"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const log = (output) => {
    console.log(output);
};
exports.default = log;
/*export class Person{ //declare property types
  firstName: string;
  lastName: string;
  gender: string;
  height: number;
  hobbies: string[];
  birthday: Date;
  isAlive: boolean;
  constructor(firstName: string, lastName: string, gender: string, height: any =undefined, hobbies: string[] = [], birthday: any = undefined , isAlive: boolean = true)
  {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.height = height;
  this.hobbies = hobbies;
  this.birthday = birthday;
  this.isAlive = isAlive;
  }
};

  export interface PersonData {
    firstName: string,
    lastName: string,
    gender: string,
    height?: any, //question mark here means optional
    hobbies: string[],
    birthday?: any, //question mark here means optional
    isAlive: boolean

    }


*/
/*export interface PersonData {
  firstName: string,
  lastName: string,
  gender: string,
  height?: any, //question mark here means optional
  hobbies: string[],
  birthday?: any, //question mark here means optional
  isAlive: boolean
  }


  export class Person{ //declare property types
  firstName: string;
  lastName: string;
  gender: string;
  height: number;
  hobbies: string[]; birthday: Date;
  isAlive: boolean;
  
  constructor(personData: PersonData){ //expects parameter of type PersonData
  this.firstName = personData.firstName;
  this.lastName = personData.lastName;
  this.gender = personData.gender;
  this.height = personData.height;
  this.hobbies = personData.hobbies;
  this.birthday = personData.birthday;
  this.isAlive = personData.isAlive;
  }

  }   */
class Person {
    get firstName() {
        return `${this.toTitleCase(this._firstName)}`;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return `${this.toTitleCase(this._lastName)}`;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get hobbies() {
        return this._hobbies;
    }
    set hobbies(value) {
        this._hobbies = value;
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(value) {
        this._birthday = value;
    }
    get isAlive() {
        return this._isAlive;
    }
    set isAlive(value) {
        this._isAlive = value;
    }
    constructor(personData) {
        this.toTitleCase = (str) => {
            str.toLowerCase(); //first set the whole string to lowercase in case
            return str.substring(0, 0) + str[0].toUpperCase() + str.substring(1); //replace the first character with its uppercase
        };
        this._firstName = personData.firstName;
        this._lastName = personData.lastName;
        this._gender = personData.gender;
        this._height = personData.height;
        this._hobbies = personData.hobbies;
        this._birthday = personData.birthday;
        this._isAlive = personData.isAlive;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
exports.Person = Person;
;
