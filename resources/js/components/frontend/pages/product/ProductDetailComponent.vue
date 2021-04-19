<template>
    <div class="container">
        <h1>Details of {{product.name}}</h1>
        <div v-if="product.image" class="mt-2">
            <img :src="[`/storage/products/${product.image}`]" :alt="product.image" class="img">
        </div>
        <div v-else>
            <img src="/images/no-image.jpg" :alt="product.image" class="img mt-2">
        </div>
        <div>
            {{product.description}}
        </div>

    </div>
</template>

<script>
export default {
    name: "ProductDetailComponent",
    data () {
        return {
            product: {}
        }
    },
    props: ['id'],
    created () {
        this.loadProduct()
    },
    methods: {
        loadProduct () {
            this.$store.dispatch('loadProduct', this.id)
                .then(product => this.product = product)
        }
    }
}
</script>

<style scoped>
    .img {width: 50%;}
</style>
