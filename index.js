function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; i++){
    array[i] = changeValue;
    if(array[i] === stopValue){
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0; i < array.length; i++){
    array[i] = changeValue;
    if(array[i] === skipValue){
      continue;
    }
}
