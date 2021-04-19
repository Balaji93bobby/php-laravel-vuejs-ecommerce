<template>
    <div>
        <form class="form form-inline" @submit.prevent="search">
            <select class="form-control" v-model="category_id">
                <option value="">Select one Category</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
            </select>

            <input type="text" v-model="filter" class="form-control mr-sm-2" placeholder="Search:">

            <button class="btn btn-outline-primary">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "SearchProductCategoryComponent",
    data () {
        return {
            filter: '',
            category_id: '',
        }
    },
    methods: {
        search () {
            this.$emit('search', {
                filter: this.filter,
                category_id: this.category_id
            })
        }
    },
    computed: {
        categories () {
            return this.$store.state.categories.items.data
        }
    },
}
</script>

<style scoped>

</style>
