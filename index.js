class Formatter {
  //add static methods here
  static capitalize (s){
    return s.charAt(0).toUpperCase() + s.slice(1);
    
  }
  static sanitize (s){
    return s.replace(/[^a-z0-9+ /'-]+/gi, '');
  }

  static titleize (s){
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let sa = s.split(" ")
    let result = sa.map((el,i) =>{ 
      if(i===0){
        return this.capitalize(el)
      }
      if (arr.find(e=> e === el)){
        return el
      }
      return this.capitalize(el)
       
      })
      
      
      
      return result.join(" ")
      
  }}

  //   return s.replace(/\b[^of,the]+/gi, function(l){ 
  //     console.log(l) 
  //     return l.charAt(0).toUpperCase() + l.slice(1)  })
  // }

