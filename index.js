class Formatter {

  static capitalize(string) {
    let words = string.split(' ');
    for (let n = 0; n < words.length; n++) {
      words[n] = words[n].charAt(0).toUpperCase() + words[n].slice(1);
    }
    return words.join(' ');
  }
  static sanitize(string) {

      return string.replace(/[^-, 'A-Za-z0-9]+/g, '');
    }
  static titleize(title) {

  let arr = [];
  let exludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
  arr = title.split(' ');
  return arr.map((word, i) =>
  {
     return exludeWords.includes(word) && i!=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);

  }).join(' ');
}
}
