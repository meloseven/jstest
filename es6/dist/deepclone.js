'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by melo on 2017/6/8.
 */

/**
 * 实现深复制
 * @param copy 需要复制的数组
 * @returns {*}
 */
function deepclone(copy) {
    var src;
    //仅当copy为普通object或者数组时
    if ((typeof copy === 'undefined' ? 'undefined' : _typeof(copy)) === 'object' && (Object.prototype.toString.call(copy) === '[object Object]' || Object.prototype.toString.call(copy) === '[object Array]')) {
        src = copy.constructor === Array ? [] : {};
        for (var key in copy) {
            if (copy.hasOwnProperty(key)) {
                src[key] = deepclone(copy[key]);
            }
        }
    } else if (copy !== undefined) {
        src = copy;
    }
    return src;
}

var a = {
    b: 2,
    c: '33',
    d: function d() {
        return 'x';
    },
    e: /^xxx/g,
    f: new Date(),
    g: {
        s: {
            k: [11]
        }
    },
    h: [222, 35, 66],
    i: undefined
};
console.log($.extend(true, {}, a));
console.log(deepclone(a));