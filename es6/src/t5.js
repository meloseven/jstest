/**
 * Created by melo on 2017/6/11.
 */
/**
 * ES6数组的使用,Array新增方法：
 * from,of,copyWithin,find,findIndex,fill,entries,keys,values,includes(ES7)
 */
let arrayLike = {
    '0':1,
    '1':{a:2},
    '2':[22,33],
    length:3
};
//es5;
var arr1 = [].slice.call(arrayLike);

//es6
let arr2 = Array.from(arrayLike);
let arr3 = Array.from([1,2,3],(x)=>x*2);
let arr4 = Array.from({length:10},()=>'melo');

console.log(Array.of(3,11,8));
console.log(Array.of(3));

//find只找出第一个匹配的元素，但是filter是返回所有匹配的结果
let arr5 = [1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
});
var arr6 = [1, 5, 10, 15].filter(function(item, index, arr) {
    return item > 9;
});
console.log(arr5);
console.log(arr6);
//findIndex找出第一个匹配的位置
var idx = [1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
});
console.log(idx);

//fill可以接受三个参数
console.log(['a','b','b'].fill('d'));
console.log(['a','b','b'].fill('d',1,2));

for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}

let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']
