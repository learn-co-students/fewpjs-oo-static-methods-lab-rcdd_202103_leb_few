class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g,'');
  }
  static titleize(string) {
  let doNotCapitalize = ['the','a','an','but','of','and','for','at','by','from'];
  let finalString = [];
  let myArray = string.split(" ")
  for (let i=0; i<myArray.length;i++) {
    if (i==0) {
      finalString.push(this.capitalize(myArray[i]))
    } else {
      if (doNotCapitalize.includes(myArray[i])) {
        finalString.push(myArray[i])
      } else {
        finalString.push(this.capitalize(myArray[i]))
      }
    }
  }
  return finalString.join(" ");
}
}
