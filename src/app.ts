//GENERICS
//GENERIC TYPE - ARRAY
const names: Array<string> = []; // same as 'string[]'
// names[0].split(' '); TS helps with methods because it knows it's an array of strings

//GENERIC TYPE - PROMISE
// const promise: Promise<string> = new Promise ((res, rej)=> {
//  setTimeout(()=> {
//    res('It is done') //here must be th type which was set in the Promise generic
//  }, 2000)
// })

function merge<T extends object, U extends object>(objA: T, objB: U) { //Constraints - now the function will accetp only objects, but their structure is flexible
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Pedro'}, {age: 22}); // the goals it to not assign a specific type, and TS will infer it, giving it flexibility
console.log(mergedObj.name)
const newMergedObj = merge({names: ['Hello', 'world']}, {age: 22});
console.log(newMergedObj.names)
//We can pass which specific types we want when calling the function
const newObj = merge<{name: string}, {handsome: boolean}>({name: 'Pedro'}, {handsome: true})
console.log(newObj);

// ---------- //
interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] { // here we make in a way that we only accept arguments which have a length property
  let descriptionText = 'Got no value.';
  if(element.length > 0) {
    descriptionText = `Got ${element.length} elements.`
  }
  return [element, descriptionText]
}

console.log(countAndDescribe('Hi there'));
console.log(countAndDescribe([]));

// ---------------------------- //

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractAndConvert({name: 'Pedro'}, name); 
// extractAndConvert({name: 'Pedro'}, age); this would not work 