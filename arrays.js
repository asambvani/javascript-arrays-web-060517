var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var newArray = array;
  newArray.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array,index){
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  var new_array = array
  new_array.shift()
  return new_array
}


function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromEndOfArray(array){
  var new_array = array
  new_array.pop()
  return new_array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
