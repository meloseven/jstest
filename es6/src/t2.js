/**
 * Created by melo on 2017/3/16.
 */
//数组解耦
let [a,b,c] = [1,2,3];

//解构设置默认值
let [x=1,y=x] = [3,4];

//对象解耦
let {foo,bar} = {bar:'aa',foo:'bb'};
console.log(foo);
console.log(bar);

//对象解耦
let obj = {
    p: [
        'Hello',
        { y1: 'World' }
    ]
};
let { p: [x1, { y1 }] } = obj;
//console.log(p);
console.log(x1);
console.log(y1);

//字符串解耦
const [a1, b1, c1, d1, e1] = 'hello';
console.log(a1,b1,c1,d1,e1);

//函数参数解耦
function add([x,y]){
    return x+y;
}
console.log(add([2,3]));
console.log([[1,2],[4,5]].map(([x,y])=>x+y));

function add1({x,y}){
    return x-y;
}
console.log(add1({x:50,y:20}));

//解耦的用途
