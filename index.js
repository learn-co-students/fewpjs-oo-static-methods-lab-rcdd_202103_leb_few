class Formatter {
 static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\-\' ]+/g, '')
  }
static titleize(string){
  const array = ["of", "the", "a", "an", "and", "but", "for", "at", "by", "from"]
  let sa=string.split(" ");
  let result=sa.map((el,i)=>{
    if (i===0){
      return this.capitalize(el)
    }
    if(array.find(e=>e===el)){
      return el;
    }
    return this.capitalize(el);
  })
return result.join(' ')
  }
}