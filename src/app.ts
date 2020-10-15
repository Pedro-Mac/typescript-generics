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

// ------------- Keyof --------------- //

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractAndConvert({name: 'Pedro'}, name); 
// extractAndConvert({name: 'Pedro'}, age); this would not work 

// ------------- Classes --------------- //
class DataStorage<T extends string | number | boolean > {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('10');
textStorage.addItem('Pedro');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(10);
numberStorage.addItem(Number('100'));
console.log(numberStorage.getItems)

// --- Gen utility types --- //
interface CourseGoal {
  title: string,
  description: string,
  completeUntil: Date
}

function createCourseGoal(title: string, description: string, data: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = data;
  return courseGoal as CourseGoal;
}