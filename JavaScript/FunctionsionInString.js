// This program shows the  Most Imp and Prebuild Functions in the string!
//1) length  of the Character
//2) Concontenation of String
//3) spliting of the String
//4) Character at strig

var show="dheeraj prasad"
console.log(show.length) // the O/p is 14


//Now to check Which Element is Present  in the Index we Provide!

var show="dheeraj prasad"
console.log(show[4])   // here the Output IS " r " as the index Starts from the 0

     //or 

var show="dheeraj prasad"
console.log(show[13])  // it gies the output ie d since it start the index with 0 




// if we want to see the position from which the word statrts we use 

var show="dheeraj prasad rajkishor"
console.log(show.indexOf ("prasad")) // So the OutPut IS 8 as we can see the first Occurance of prasad is in 8th index


//or

//we can use the function ie Slice( x,y ) where x is the index value to Start and the y is the index value where to end and y Should be Always greater than one because it takes the Value from y=y-1  !

var show="dheeraj raj kishor prasad"
console.log(show[10]) //jives the output as j
console.log(show.slice(8,11))  //it gives the output as raj




//we can change the String to LowerCase Or UpperCase ! 

var show="dheeraj prasad"
console.log(show.toLowerCase())  //it gives the output completely in lowerCase
       //or

       //UpperCAse
console.log(show.toUpperCase())//it display the output Completely UpperCase

