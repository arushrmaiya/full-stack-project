function camelize(str){

    return str.split("-").map((word,index)=> index==0 ? word:word[0].toUpperCase()+word.slice(1)).join("");
}

function filterRange(arr, a, b){
    return arr.filter(item => item >= a).filter(item => item <=b);
}

function filterRangeInPlace(arr, a, b){
    for(let i = 0; i< arr.length; i++){
        if (arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
}


function copySorted(arr){
    let brr = arr.slice();

    return brr.sort();
}

function shuffle(arr){
    for(let i = arr.length - 1; i>0; i--){
        j = Math.floor(Math.random() * (i+1));

        [arr[i], arr[j]] = [arr[j], arr[i]];

    }
}

function unique(arr){
    let str_ = [];

    for(let i =0; i<arr.length; i++){
        if (!(str_.includes(arr[i]))){
            str_.push(arr[i]);
        }
    }

    // str_ = arr.map(item => !(str_.includes(item)));

    return str_;
}


console.log(camelize("we-are-the-children"));

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered)

filterRangeInPlace(arr, 1, 4);

console.log(arr);

let barr = [5, 2, 1, -10, 8];

barr.sort((a,b)=>b-a);

console.log(barr);

let carr = ["HTML", "JavaScript", "CSS"];

let darr = copySorted(carr);

console.log(carr);
console.log(darr)

let earr = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

  console.log(unique(earr));