<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="product in cart.products" :key="product.id">
                <div v-if="product.image" class="mt-2">
                    <img :src="[`/storage/products/${product.image}`]" :alt="product.image" class="img">
                </div>
                <div v-else>
                    <img src="/images/no-image.jpg" :alt="product.image" class="img mt-2">
                </div>
                {{product.name}}
                <button class="btn btn-danger btn-sm mt-2" @click.prevent="removeCart(product)">Remove</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "CartComponent",
    computed: {
        cart () {
            return this.$store.state.cart
        }
    },
    methods: {
        removeCart (product) {
            this.$store.commit('REMOVE_PRODUCT_CART', product)
        }
    }
}
</script>

<style scoped>
    .img {width: 200px; height: 100px}
</style>
