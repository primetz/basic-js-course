'use strict';

/*
* 4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
*    1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
*    2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
*    https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
*    дополнительных видео в материалах урока.
*/
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    }
];

const productsWithPhotos = products.filter(product => {
    if ('photos' in product) {
        return product.photos.length > 0; // Как я понял если вернуть без сравнения с нулем то будет неявное приведение типов и лучше так не делать.
    }
    return false;
});

console.log(productsWithPhotos);

products.sort((a, b) => {
    return a.price - b.price;
});

console.log(products);
