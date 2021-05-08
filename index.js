class Formatter {
  //add static methods here

  static capitalize(string) {
  // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
  // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let result = string.toLowerCase().split(' ').map((e, index) => {
      if(index === 0){return this.capitalize(e)}
      if(e === 'the' ||e === 'a' || e === 'an' || e === 'but' || e === 'of' || e === 'and' || e === 'for' || e === 'at' || e === 'by' || e === 'from'){
          return e.toLowerCase();
        }else{
          return this.capitalize(e);
        }
      });
  return result.join(' ');
  }

}
