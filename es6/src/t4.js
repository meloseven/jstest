/**
 * Created by melo on 2017/5/23.
 * ES6新增二进制，八进制表示法
 * 新增Number的函数：
 * isFinite,isNaN,parseInt,parseFloat,isInteger
 */
var log = console.log;
let r1 = (0b11110111 === 247);
let r2 = (0o25 === 21);
log(r1);
log(r2);
log(Number(0b11110111));
log(Number(0o25));

log(Number.isFinite(23));
log(Number.isFinite(23.22));
log(Number.isFinite(NaN));
log(Number.isFinite(Infinity));
log(Number.isFinite('22'));
log(Number.isFinite(true));
log(Number.isNaN(true));
log(Number.isNaN(22));
log(Number.isNaN(NaN));
log(Number.parseInt(22.33));
log(Number.isInteger(23));
log(Number.isInteger(23.0));
log(Number.isInteger(23.1));
