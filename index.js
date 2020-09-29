// Advanced arrays

// 1) UsingforEach loop


const array = [1, 2, 3, 4];
const double = [];
const newArray = array.forEach(num => {
    double.push(num * 4);

})
console.log('forEach', double);

//Using map function

const mapArray = array.map(num => num * 2);
console.log('map', mapArray);


//Using filter

const filterArray = array.filter(num => num === 3);
console.log('filter', filterArray)



//Using Reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5)
console.log('reduce', reduceArray);