class Formatter {
  //add static methods here
  static capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '' );
  }


  static titleize(str) {
     let word = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
     let res = [];
     let arr = str.split( " " )
     for ( let i = 0; i < arr.length; i++ ) {
       if ( i == 0 ) {
         res.push( this.capitalize(arr[i]))
       } else {
         if (word.includes(arr[i])) {
           res.push(arr[i])
         } else {
           res.push(this.capitalize(arr[i]))
         }
       }

     }
     return res.join( " " );
   }
 }
