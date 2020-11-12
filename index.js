async function hello() {
    return "world";
}
// implicitly declars this to be a number value
let num = 23;
// explicitly declares this to be a string (the thing after the : and before the = is the declaration)
const str = "hello";
const person = {
    first: "the dude",
    last: "lebowski",
    rich: false,
};
const person2 = {
    first: "Jeffry",
    last: "Lebowski",
    rich: true,
};
// =========== Strong typing functions ============ //
// explicit typing in arguments, just add colon after the variable
// type of the result is the : string after the ): of the arguements
function pow(x, y) {
    return Math.pow(x, y).toString();
}
// pow('23','foo')  // uncomment this to see it fail
pow(23, 46); // this works
// Note: If funciton doesn't return a value, use : void for the return value
// =========== Strong typing Arrays ============ //
const arr = [];
arr.push(1);
const tupleArr = [];
tupleArr.push(1);
tupleArr.push("23"); // no error!
tupleArr.push(false); // uncomment this, it will give an error
tupleArr.push(234); // no error?!
export {};
