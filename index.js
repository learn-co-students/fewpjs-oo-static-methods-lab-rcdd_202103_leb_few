class Formatter {
  //add static methods here
static capitalize(str){
return str.charAt(0).toUpperCase() + str.slice(1)
}
// Function to remove non-alphanumeric
    // characters from string
static sanitize(str){
  // replace the given string
        // with empty string
        // except the pattern "/[^A-Za-z0-9 '-]/g"
  return str.replace(/[^A-Za-z0-9 '-]/g, "")
}

static titleize(str){
  let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  let array = str.split(" ");
  let finalArr = [];
  for (let i=0; i<array.length; i++){
    if(i === 0){
      finalArr.push(this.capitalize(array[i]))
    } else {
      if (exceptions.includes(array[i])){
        finalArr.push(array[i])
      }
      else {
        finalArr.push(this.capitalize(array[i]))
        }
    }
  }
  return finalArr.join(" ");
}
}
