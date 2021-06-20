
function start() {
    let burger = new Burger();
    console.log(burger);
    document.getElementsByClassName("inner-price")[0].innerText = `Цена: ${burger.price} рублей`;
    document.getElementsByClassName("inner-cal")[0].innerText = `Энергетическая ценность: ${burger.calories} калорий`;
}

class Burger {
    constructor() {
        this.price = 0;
        this.calories = 0;
        this.createOreder();
    }
    createOreder() {
        let identificators = ['big', 'small', 'cheese', 'salat', 'potato', 'sous', 'spice'];
        for (let i = 0; i < identificators.length; i++) {
            if (document.getElementById(identificators[i]).checked) {
                console.log(document.getElementById(identificators[i]).value.split(',')[0]);
                this.price += +document.getElementById(identificators[i]).value.split(',')[0];
                this.calories += +document.getElementById(identificators[i]).value.split(',')[1]
            } else {
                continue;
            }
        }
    }
}

document.getElementsByClassName('form-button').onclick = start();


