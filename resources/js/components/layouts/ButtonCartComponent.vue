<template>
    <div>
        <div v-if="noCart">
            <button class="btn btn-info btn-sm mt-2" @click.prevent="addCart">Add</button>
        </div>
        <div v-else>
            <button class="btn btn-danger btn-sm mt-2" @click.prevent="removeCart">Remove</button>
        </div>

    </div>
</template>

<script>
export default {
    name: "ButtonCartComponent",
    props: ['product'],
    computed: {
        noCart () {
            console.log(this.$store.state.cart.products.indexOf(this.product) < 0)
            return this.$store.state.cart.products.indexOf(this.product) < 0
        }
    },
    methods: {
        addCart () {
            this.$store.commit('ADD_PRODUCT_CART', this.product)
        },

        removeCart () {
            this.$store.commit('REMOVE_PRODUCT_CART', this.product)
        }
    }
}
</script>

<style scoped>

</style>
