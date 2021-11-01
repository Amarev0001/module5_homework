const arr =  [5, 5, 5, 5, 5, 5];
function identicate(arr) {
    for(var i = 0; i < arr.length -1; i++) {
        if(arr[i] !== arr[i+1]) {
            return false;
        }
    }
    return true;}
console.log(identicate(arr))