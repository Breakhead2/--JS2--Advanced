Vue.component('products', {
    props: ['products'],
    template: `
            <div class="goods-list">
                <product v-for="item of products" 
                :product="item"></product>
            </div>
        `
});
Vue.component('product', {
    props: ['product'],
    template: `
                <div class="cart">
                    <img :src="product.img" class="img" alt="photo">
                    <h4 class="title">{{ product.title }}</h4>
                    <p class="price">{{ product.price }} рублей</p>
                    <button class="buy-cart" @click="$root.addProduct(product)">Купить</button>
                </div>
         `
})
