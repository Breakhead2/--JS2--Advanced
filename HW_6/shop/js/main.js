const API = 'https://raw.githubusercontent.com/Breakhead2/JS2_Advanced/main'; // папка из репозитория

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalog.json', // url на файл каталог товаров
        products: [],
        filtered: [],
        cartItems: [],
        userSearch: '',
        show: false,
        showError: false
    },
    methods: {
        getJson(url) {
            return fetch(url) // вызываю метод фетч для обращения к внешнему файлу или серверу, фетч вохвращает Promise, значит следом должен идти then
                .then(result => result.json()) // преобразуем json файл с сервера в объект js
                .catch(error => { // если json файл не найден выведем в консоль ошибку
                    console.log(error);
                    this.showError = true;
                })
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');// создаем регулярное выражение, допускается любой регистр в userSearch - инпут поиска
            this.filtered = this.products.filter(item => regexp.test(item.title)); //обходим массив products и перезаписываем массив filtered
            if (!this.filtered.length) { // проверка на наличие товара
                alert('Такого товара в каталоге нет');
                this.filtered = this.products;
            }
            console.log(this.filtered);
        },
        addProduct(item) {
            let find = this.cartItems.find(el => el.title == item.title); //находим товар в массиве cartItems(корзина) по свойству объекта title(название)
            if (find) { // если данный товар есть, увеличиваем кол-во и пересчитываем стоимомсть
                find.quantity++;
                find.price *= find.quantity;
            } else { // если данного товара нет, добавляем его в массив cartItems(корзина)
                this.cartItems.push(item);
            }
            console.log(this.cartItems);
        },
        remove(item) {
            if (item.quantity > 1) {//если кол-во товара больше 1, то просто уменьшаем кол-во на 1
                item.quantity--
            } else {// иначе удаляем элемент массива
                this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data) { // обходим каждый item массива из  объекта data и добавляем его в массив products и filtered
                    this.products.push(item);
                    this.filtered.push(item);
                }
                console.log(this.products);
                console.log(this.filtered);
            });
    }
})