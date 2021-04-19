<template>
    <div>
        <ul class="nav bg-dark">
            <li class="nav-item">
                <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'contact'}" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'cart'}" class="nav-link">Cart ({{totalProducts}})</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    computed: {
        totalProducts () {
            return this.$store.state.cart.products.length
        }
    }
}
</script>

<style scoped>
    .nav-link {
        color: #fff;
    }
</style>
