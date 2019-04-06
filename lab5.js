/*Lab 5 java script functions*/

//
var maxOfTwo= function maxOfTwoNumber(x,y){
   return x > y? x:y;
};

//test function
let result= function myFunctionTest(x,y){
    if(x===y){
        return "TEST SUCCEEDED";
    }
    else{
        return "TEST FAILD";
    }
};



//maximum of three number
let maxOfThree= function maxOfThreeNumber(num1,num2,num3){

    /*if(num1>num2){
        if(num1>num3){
            return num1;
        }
        else {
            return num3;
        }
    }
    else{
        if(num2>num3){
            return num2;
        }
        else{
            return num3;
        }
    }*/
   return  num1>num2?(num1>num3?num1:num3):(num2>num3?num2:num3);

};

console.log("Expected output of maxOfThreeNumber(20,10,40) is 40 and:" +
    myFunctionTest(40, function(){return maxOfThreeNumber( 20,10,40);}));
//is the character is vowel

let vowel= function isVowel(c){
    if(c==='e' || c==='E'  || c==='A'|| c==='a' || c==='I'|| c==='i'||
     c==='o' || c==='O' || c==='U'||c==='u'){
        return true;
    }
    else{
        return false;
    }
};

//sum numbers in a given array
let sumElements = function sumOfArrayElements(array){
     var sum=0;
    for(var i=0; i<array.length;i++){
         sum+=array[i];
     }
      return sum;
};

// multiply numbers in a given array

let multiplyElements = function productOfArrayElements(array){
    var product=1;
    for(var i=0; i<array.length;i++){
        product*=array[i];
    }
    return product;
};

// reverse a string;

var reverseString= function reversalOfGivenString(givenString){
    var str="";
    for(var i=givenString.length-1; i>=0;i--){
        str+=givenString.indexOf(i);
    }
    return str;
};
//find longest word from the given string
var longestWord= function findLongestWrod(arryOfWords){
     var longWord= arrayOf[0];
    for(var i=1;i<arryOfWords;i++){
        longWord= longWord>arrayOfWords[i]?longWord:arrayOfWords[i];
    }
    return longWord;
};
//return an arrray of word's whose length greater than i

var longWords= function filterLongWords(arrWords, len){
     var words=[];
     for(var i=0; i<arrWords.length;i++){
         if(arrWords[i].length> len){
             var j=0;
             words[j]=arrWords[i];
             j++;
         }
     }
     return words;
};
// array map funcition
const a = [1,3,5,3,3];
const b = a.map(function(elem) {
    return elem * 3;
});

//filter elements equals to 3

const c = a.filter(function(elem,i,array){
     return elem===3;});

//using reduce calculate product

const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
});
window.onload=function(){
    console.log("Expected output of max(20,10) is 10 and  " +
        myFunctionTest(10, function(){return max( 20, 10);}));
};