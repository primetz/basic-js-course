'use strict';

/*
* 6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
*    только у вашей горки должно быть 20 рядов, а не 5:
*    x
*    xx
*    xxx
*    xxxx
*    xxxxx
*/
let str = '';

for (let i = 0; i < 20; i++) {
    console.log(str += 'x');
}
