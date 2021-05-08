class Formatter {
  //add static methods here
static capitalize(str){
  return str.charAt(0).toUpperCase()+str.slice(1);
}
static sanitize( str ) {
  return str.replace( /[^A-Za-z0-9 '-]/g, '' )
}

static titleize( str ) {
  const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
  let result = [];
  const arr = str.split( " " )
  for ( let i = 0; i < arr.length; i++ )
  {
          if ( i == 0 ) {
            result.push( this.capitalize( arr[ i ] ) )
          }
        else {
              if ( exceptions.includes(arr[ i ] ) ) {
              result.push( arr[ i ] )
              }
             else {
              result.push( this.capitalize(arr[ i ] ) )
              }
            }

          }
      return result.join( " " );
    }
}
