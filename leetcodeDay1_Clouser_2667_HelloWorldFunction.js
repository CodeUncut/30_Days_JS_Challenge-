// closure Problem

var createHelloWorld = function(){
  return function(...args){
    return "Hello World";
  }
};

createHelloWorld();
