'use strict';

/**
 * Created by melo on 2017/5/7.
 */

//string repeat()
'x'.repeat(3); //xxx
'hello'.repeat(0); //''
'na'.repeat(-1); //error

//string padStart() padEnd()
'x'.padStart(5, 'ab'); //ababx
'x'.padStart(4, 'ab'); //abax
'x'.padEnd(5, 'ab'); //xabab
'x'.padStart(3); //'  x'

//string template
var name = 'melo',
    age = 24;
console.log('My name is ' + name + ',\n and my age is ' + age + '.');

var str = 'return' + 'Hello `${name}`';
var func = new Function('name', str);
console.log(func('jack'));

//unicode编码的处理
console.log(String.fromCodePoint(0x1D306));
console.log("𝌆".codePointAt());
console.log('\u01D1'.normalize());