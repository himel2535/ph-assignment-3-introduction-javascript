/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhangkar" , roll: 1014 ,department: "cse"};
//write your code here

var values=Object.values(student);
var values1=values.slice(0,2)
var values2=values.slice(2,values.length)
var concatValues=values1.concat('.',values2,'@ph.ac.bd');
console.log(concatValues.join(''))