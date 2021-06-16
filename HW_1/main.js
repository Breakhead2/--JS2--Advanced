const goods = [
    { img: 'images/Shirt.png', title: 'Shirt', price: 150 },
    { img: 'images/Socks.png', title: 'Socks', price: 50 },
    { img: 'images/Jacket.png', title: 'Jacket', price: 350 },
    { img: 'images/Shoes.png', title: 'Shoes', price: 250 },
    { img: 'images/Cap.jpg', title: 'Cap', price: 125 },
];

const renderGoodsItems = (item) => {

    return `<div class="cart">
        <img src=${item.img} alt = "picture">
        <h3>${item.title}</h3>
        <p>${item.price}</p>
        <button class="buy-cart">Добавить</button>
    </div>`

};

const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItems(item));
    document.getElementById("goods-list").innerHTML = goodsList.join('');
};

renderGoodsList(goods);