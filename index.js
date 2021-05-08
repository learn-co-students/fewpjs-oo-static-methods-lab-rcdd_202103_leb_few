class Formatter {

  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(sant){
    return sant.replace(/[^a-z0-9+ /'-]+/gi, '')
  }
  static titleize(s){
    let arr1 = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
        let sa = s.split(" ")
        let result = sa.map((el,i) =>{
          if(i===0){
            return this.capitalize(el)
          }
          if (arr1.find(e=> e === el)){
            return el
          }
          return this.capitalize(el)

          })



          return result.join(" ")

      }
  }
