<template>
    <div>
        <ul class="nav bg-dark">
            <li class="nav-item">
                <router-link :to="{name: 'admin.dashboard'}" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'admin.categories'}" class="nav-link">Categories ({{ totalCategories }})</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'admin.products'}" class="nav-link">Products</router-link>
            </li>
        </ul>
        <div class="container mt-2">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminComponent",
    computed: {
        totalCategories () {
            return this.$store.state.categories.items.data.length
        }
    }
}
</script>

<style scoped>
    .nav-link {
        color: #fff;
    }
</style>
