/**
 * Created by melo on 2017/5/7.
 */

//string repeat()
'x'.repeat(3);//xxx
'hello'.repeat(0);//''
'na'.repeat(-1);//error

//string padStart() padEnd()
'x'.padStart(5,'ab');//ababx
'x'.padStart(4,'ab');//abax
'x'.padEnd(5,'ab');//xabab
'x'.padStart(3);//'  x'

//string template
var name = 'melo',age = 24;
console.log(`My name is ${name},
 and my age is ${age}.`);

let str = 'return' +'Hello `${name}`';
let func = new Function('name',str);
console.log(func('jack'));


