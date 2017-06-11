'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by melo on 2017/6/11.
 */
/**
 * ES6数组的使用,Array新增方法：
 * from,of,copyWithin,find,findIndex,fill,entries,keys,values,includes(ES7)
 */
var arrayLike = {
    '0': 1,
    '1': { a: 2 },
    '2': [22, 33],
    length: 3
};
//es5;
var arr1 = [].slice.call(arrayLike);

//es6
var arr2 = Array.from(arrayLike);
var arr3 = Array.from([1, 2, 3], function (x) {
    return x * 2;
});
var arr4 = Array.from({ length: 10 }, function () {
    return 'melo';
});

console.log(Array.of(3, 11, 8));
console.log(Array.of(3));

//find只找出第一个匹配的元素，但是filter是返回所有匹配的结果
var arr5 = [1, 5, 10, 15].find(function (value, index, arr) {
    return value > 9;
});
var arr6 = [1, 5, 10, 15].filter(function (item, index, arr) {
    return item > 9;
});
console.log(arr5);
console.log(arr6);
//findIndex找出第一个匹配的位置
var idx = [1, 5, 10, 15].findIndex(function (value, index, arr) {
    return value > 9;
});
console.log(idx);

//fill可以接受三个参数
console.log(['a', 'b', 'b'].fill('d'));
console.log(['a', 'b', 'b'].fill('d', 1, 2));

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = ['a', 'b'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var index = _step.value;

        console.log(index);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = ['a', 'b'].values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var elem = _step2.value;

        console.log(elem);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = ['a', 'b'].entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            _index = _step3$value[0],
            _elem = _step3$value[1];

        console.log(_index, _elem);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var letter = ['a', 'b', 'c'];
var entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']