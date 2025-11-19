function sortByAge(arr){
    return arr.sort((a,b) => a.age-b.age);
}

function getAverageAge(arr){

    return arr.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0)/arr.length;
}
  function groupByIds(arr){
    return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;}, {});

  }

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

let john_ = { name: "John", surname: "Smith", id: 1 };
let pete_ = { name: "Pete", surname: "Hunt", id: 2 };
let mary_ = { name: "Mary", surname: "Key", id: 3 };

let fullName = users.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id}));

let _john = { name: "John", age: 25 };
let _pete = { name: "Pete", age: 30 };
let _mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];
