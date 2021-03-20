'use strict';

/*
* 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
*    15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
*/
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/**
 * Функция применяет скидку ко всем товарам в корзине
 * @param {Array} productsArr - массив с объектами продуктов
 * @param {number} discount - размер скидки в процентах
 */
function applyDiscount(productsArr, discount) {
    productsArr.forEach(product => {
        product.price -= (product.price / 100) * discount;
    });
}

applyDiscount(products, 15);

console.log(products);
