class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  static titleize(sentence) {
    const arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = sentence.split(' ');
    return words.map((word,index) => {
      if(index === 0) {
        return this.capitalize(word);
      }
      else {
        return arr.includes(word) ? word : this.capitalize(word);
      }
    }).join(' ');
  }
}
