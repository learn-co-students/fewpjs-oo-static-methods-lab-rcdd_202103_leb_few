class Formatter {
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(sant){
    return sant.replace(/[^a-z0-9+ /'-]+/gi, '')
  }
  static titleize(){

  }
}
