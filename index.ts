import * as _ from "lodash";

async function hello() {
  return "world";
}

// implicitly declars this to be a number value
let num = 23;

// explicitly declares this to be a string (the thing after the : and before the = is the declaration)
const str: string = "hello";

// declare a pattern for multiple objects, the key: string any allows for anything else after first and last without throwing an error

interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const person: Person = {
  first: "the dude",
  last: "lebowski",
  rich: false,
};
const person2: Person = {
  first: "Jeffry",
  last: "Lebowski",
  rich: true,
};

// =========== Strong typing functions ============ //

// explicit typing in arguments, just add colon after the variable
// type of the result is the : string after the ): of the arguements
function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

// pow('23','foo')  // uncomment this to see it fail
pow(23, 46); // this works

// Note: If funciton doesn't return a value, use : void for the return value

// =========== Strong typing Arrays ============ //
const arr: number[] = [];

arr.push(1);
// arr.push('23'); // uncomment this, it will give an error
// arr.push(false); // uncomment this, it will give an error

// ========== tuples ========== //
// this is a fixed length array where each item in that array has it's own type
// can make the value optional by putting a ? after the arguement.

type MyList = [number?, string?, boolean?];

const tupleArr: MyList = [];

tupleArr.push(1);
tupleArr.push("23"); // no error!
tupleArr.push(false); // uncomment this, it will give an error
tupleArr.push(234); // no error?!
