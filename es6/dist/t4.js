'use strict';

/**
 * Created by melo on 2017/5/23.
 */
var log = console.log;
var r1 = 247 === 247;
var r2 = 21 === 21;
log(r1);
log(r2);
log(Number(247));
log(Number(21));

log(Number.isFinite(23));
log(Number.isFinite(23.22));
log(Number.isFinite(NaN));
log(Number.isFinite(INFINITY));
log(Number.isFinite('22'));
log(Number.isFinite(true));