/**
 * @param {number} n
 * @return {Function} counter
 */
// var createCounter = function(n) {
//     let count =n;
//     return function() {
//         return count++;
//     };
// };


//solving with class es6

// class Counter{
//     constructor(n){
//         this.n =n;
//     }
    
//     increment(){
//         return ++this.n;
//     }
// }

// const counter = Counter(n);
// counter.increment()

// most optimized code
var createCounter =(n)=> {
let count =n;
  return ()=>{
    return count++;
}
}
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
