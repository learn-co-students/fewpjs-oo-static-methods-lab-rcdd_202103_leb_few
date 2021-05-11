
  class Formatter {
    //add static methods here
    static capitalize(string){
      return string.charAt(0).toUpperCase()+string.slice(1);
    }
  static sanitize(string){
  // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
       return string.replace(/[^A-Za-z0-9-' ]+/g, '')
    }

static  titleize(sentence){
  let unnecessary=["the","a","an","but","of","and","for","at","by","from"];
  let words=sentence.split(" ");
  let counter=0;
    words[0]=words[0].charAt(0).toUpperCase()+words[0].slice(1);
    for(let i=1;i<words.length;i++){
    for(let j=0;j<unnecessary.length;j++){
        if(words[i]!=unnecessary[j]){
            counter++;
        }
    }
        if (counter===10)
        {words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);}

counter=0;
}
return words.join(" ");
}
}
