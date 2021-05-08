class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^\w\s-']+/g, '');
  }
  static titleize(string){
    const oldWords = string.split(" ");

    const lowers = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newWords = oldWords.map((word) => {
        if(lowers.includes(word)){
        return word[0] + word.substring(1);
      }
      else{
        return word[0].toUpperCase() + word.substring(1);
      }
    });
    newWords[0]= this.capitalize(newWords[0]);
    let newString = newWords.join(" ");
    return newString;
  }
}
