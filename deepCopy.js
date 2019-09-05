// makes a deep copy of whatever is passed in
function makeCopy(something) {
  if (Array.isArray(something)) return arrayCopy(something);
  else if (typeof something === "object") return objectCopy(something);
  return something;
}

// makes a deep copy of an array
function arrayCopy(array) {
  const copy = [];
  for (let i = 0; i < array.length; i++)
    if (typeof array[i] === "object")
      if (Array.isArray(array[i]))
        // call recursively on array
        copy.push(arrayCopy(array[i]));
      // otherwise call object copy function
      else copy.push(objectCopy(array[i]));
    // otherwise primitive
    else copy.push(array[i]);
  return copy;
}

// makes a deep copy of an object
function objectCopy(object) {
  const copy = {};
  for (let key in object)
    if (typeof object[key] === "object")
      if (Array.isArray(object[key]))
        // call array copy function
        copy[key] = arrayCopy(object[key]);
      // otherwise call recursively on object
      else copy[key] = objectCopy(object[key]);
    // otherwise primitive
    else copy[key] = object[key];
  return copy;
}