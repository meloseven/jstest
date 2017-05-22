'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by melo on 2017/3/16.
 */
//数组解耦
var a = 1,
    b = 2,
    c = 3;

//解构设置默认值

var _ = 3,
    x = _ === undefined ? 1 : _,
    _2 = 4,
    y = _2 === undefined ? x : _2;

//对象解耦

var _bar$foo = { bar: 'aa', foo: 'bb' },
    foo = _bar$foo.foo,
    bar = _bar$foo.bar;

console.log(foo);
console.log(bar);

//对象解耦
var obj = {
    p: ['Hello', { y1: 'World' }]
};

var _obj$p = _slicedToArray(obj.p, 2),
    x1 = _obj$p[0],
    y1 = _obj$p[1].y1;
//console.log(p);


console.log(x1);
console.log(y1);

//字符串解耦

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    a1 = _hello2[0],
    b1 = _hello2[1],
    c1 = _hello2[2],
    d1 = _hello2[3],
    e1 = _hello2[4];

console.log(a1, b1, c1, d1, e1);

//函数参数解耦
function add(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return x + y;
}
console.log(add([2, 3]));
console.log([[1, 2], [4, 5]].map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        x = _ref4[0],
        y = _ref4[1];

    return x + y;
}));

function add1(_ref5) {
    var x = _ref5.x,
        y = _ref5.y;

    return x - y;
}
console.log(add1({ x: 50, y: 20 }));

//解耦的用途