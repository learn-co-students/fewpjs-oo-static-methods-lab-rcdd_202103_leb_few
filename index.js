class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    string = string.replace(/[^a-z0-9áéíóúñü' \.,_-]/gim,"");
    return string.trim();
  }
  static titleize(string){
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let str = string.split(" ");
    let result = str.map((element, index) => {
      if(index === 0){
        return this.capitalize(element);
      }
      if(arr.find(ele => ele===element)){
        return element;
      }
      return this.capitalize(element);
    });
    return result.join(" ");
  }
}
