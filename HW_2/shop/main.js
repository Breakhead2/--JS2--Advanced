class Card { // Класс корзина
    addGood() {

    }; // добавление товара
}

class CardItem {// Класс элемент корзины
    deleteGood() {

    }; // удаление товара
}

class GoodsItem {
    constructor(item) {
        this.image = item.image;
        this.title = item.title;
        this.price = item.price;
    }
    renderGoodsItem() {
        return `<div class="cart">
        <img src=${this.image} alt = "picture">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-cart">Добавить</button>
    </div>`
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.sumItems = 0;
        this.fetchGoods();
        this.renderGoodsList();
        this.orderPrice();
    }
    fetchGoods() {
        this.goods = [
            { image: 'images/Shirt.png', title: 'Shirt', price: 150 },
            { image: 'images/Socks.png', title: 'Socks', price: 50 },
            { image: 'images/Jacket.png', title: 'Jacket', price: 350 },
            { image: 'images/Shoes.png', title: 'Shoes', price: 250 },
            { image: 'images/Cap.jpg', title: 'Cap', price: 125 },
        ];
    }
    renderGoodsList() {
        const block = document.querySelector('.goods-list');
        for (let item of this.goods) {
            const goodItem = new GoodsItem(item);
            block.insertAdjacentHTML("beforeend", goodItem.renderGoodsItem());
        }
    }
    orderPrice() { // вывод в консоль общую стоимости всех товаров в каталоге (массиве goods)
        for (let i = 0; i < this.goods.length; i++) {
            this.sumItems += this.goods[i].price;
        }
        console.log(`Общая стоимость всех товаров в каталоге равна: ${this.sumItems}`);
    }
}

let list = new GoodsList();










// const goods = [
//     { img: 'images/Shirt.png', title: 'Shirt', price: 150 },
//     { img: 'images/Socks.png', title: 'Socks', price: 50 },
//     { img: 'images/Jacket.png', title: 'Jacket', price: 350 },
//     { img: 'images/Shoes.png', title: 'Shoes', price: 250 },
//     { img: 'images/Cap.jpg', title: 'Cap', price: 125 },
// ];

// const renderGoodsItems = (item) =>
//     `<div class="cart">
//         <img src=${item.img} alt = "picture">
//         <h3>${item.title}</h3>
//         <p>${item.price}</p>
//         <button class="buy-cart">Добавить</button>
//     </div>`
//     ;

// const renderGoodsList = list => {
//     let goodsList = list.map(item => renderGoodsItems(item));
//     document.getElementById("goods-list").innerHTML = goodsList.join('');
// };

// renderGoodsList(goods);