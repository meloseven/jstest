/**
 * Created by melo on 2017/6/12.
 */
/**
 * ES6函数新增的特性
 */

function point(x=0,y=0){
    this.x = x;
    this.y = y;
}
console.log(new point());