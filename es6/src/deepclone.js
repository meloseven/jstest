/**
 * Created by melo on 2017/6/8.
 */

/**
 * 实现深复制
 * @param copy 需要复制的数组
 * @returns {*}
 */
function deepclone(copy){
    var src;
    //仅当copy为普通object或者数组时
    if(typeof copy === 'object' &&
        (Object.prototype.toString.call(copy) === '[object Object]' ||
        Object.prototype.toString.call(copy) === '[object Array]')){
        src = (copy.constructor === Array)?[]:{};
        for(var key in copy){
            if(copy.hasOwnProperty(key)){
                src[key] = deepclone(copy[key]);
            }
        }
    }else if(copy !== undefined){
        src = copy;
    }
    return src;
}

var a = {
    b:2,
    c:'33',
    d:function(){
        return 'x';
    },
    e:/^xxx/g,
    f:new Date(),
    g:{
        s:{
            k:[11]
        }
    },
    h:[222,35,66],
    i:undefined
};
console.log($.extend(true,{},a));
console.log(deepclone(a));