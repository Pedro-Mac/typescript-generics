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

function merge<T, U>(objA: T, objB: U) { // this tells typescript that it can expect 2 objects with different types as values, but leaves us with flexibility
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Pedro'}, {age: 22}); // the goals it to not assign a specific type, and TS will infer it, giving it flexibility
console.log(mergedObj.name)
const newMergedObj = merge({names: ['Hello', 'world']}, {age: 22});
console.log(newMergedObj.names)
//We can pass which specific types we want when calling the function
const newObj = merge<{name: string}, {handsome: boolean}>({name: 'Pedro'}, {handsome: true})
console.log(newObj);