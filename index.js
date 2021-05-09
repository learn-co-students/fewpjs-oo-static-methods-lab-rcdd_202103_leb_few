

class Formatter {
static capitalize (str)  {

return str.charAt(0).toUpperCase() + str.substring(1)
}
static sanitize (string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
}
//
static titleize(str) {
   let array = str.split(' ')

   let newArray = []

   let upcasearray = array.map(word => {
     if ( word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from') {
       newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
     }
       else {
         newArray.push(word)
       }
   })
   return newArray.join(' ').charAt(0).toUpperCase() + newArray.join(' ').slice(1)
 }
}
