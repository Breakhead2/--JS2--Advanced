Vue.component('filter-form', {
    template: `
                <form action="#" class="form-box" @submit.prevent='$root.filter()'>
                    <input class="inpt-search" type="search" v-model="$root.userSearch">
                    <button class="btn-search">Поиск</button>
                </form>
            `
})