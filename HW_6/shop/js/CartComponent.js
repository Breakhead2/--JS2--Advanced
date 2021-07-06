Vue.component('cart', {
    props: ['cartItems', 'visability'],
    template: `
                <div class="cart-block" v-show="visability">
                    <p v-if="!cartItems.length" class="cart-msg">Корзина пуста</p>
                    <cart-item v-for="item of cartItems" :cart-item="item">
                    </cart-item>
                </div>
        `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
                <div class="cart-product">
                    <img :src="cartItem.img" class="img-cart" alt="photo">
                    <div class="right">
                        <h4 class="title">{{ cartItem.title }}</h4>
                        <p class="price">Кол-во: {{ cartItem.quantity }}</p>
                        <p class="price">{{ cartItem.price }} руб.</p>
                        <button class="btn-remove" @click="$root.remove(cartItem)">Удалить</button>
                    </div>
                </div>
            `
})