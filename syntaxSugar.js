

/*  class is a “syntax sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new)
 in JavaScript, because we could actually declare the same without class keyword at all:*/


//code without using the class keyword
function Boy(name) {
    this.name = name;
  }
  
  Boy.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  let boy = new Boy("John");
  boy.sayHi();



  //using the class keyword
  class Boy {
    constructor(name){
        this.name = name
    }
}
const boy1 = new Boy ( 'John')

console.log(boy1);


