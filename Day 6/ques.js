// Ques 1 

function is_arr(val){
    if(Array.isArray(val)) return true;
    return false;
}

console.log(is_arr("w3resources"))
console.log(is_arr([1,2,3,4]))

// Ques 2
function array_Clone(arr){
    return arr.slice(0, arr.length);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Ques 3
function first(x,n){
    if(n==null)
      return x[0];
    
    if(n<0)
      return [];

    return x.slice(0,n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

// Ques 4
 var myColor = ["Red", "Green", "White", "Black"];
 
 console.log(myColor.join())
 console.log(myColor.join(","));
 console.log(myColor.join("+"));
 
 // Ques 5
 function frequentWord(arr){
    let out=0;
    let word=0
    for ( let i= 0;i<arr.length;i++){
        let count = 1;
        for( let j= i+1; j<=arr.length ; j++){
            if(arr[i]==arr[j])
              count++;
        }
        if(count > out ){
          out = count ;
          word = i;
        }
    }
    console.log (arr[word]+"("+out+" times )");
}

var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
frequentWord(arr1);