<template>
    <div>
        <form class="form form-inline" @submit.prevent="search">
            <input type="text" v-model="filter" class="form-control mr-sm-2" placeholder="Search:">
            <button class="btn btn-outline-primary">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "SearchCategoryComponent",
    data () {
        return {
            filter: '',
        }
    },
    methods: {
        search () {
            this.$emit('searchCategory', this.filter)
        }
    }
}
</script>

<style scoped>

</style>
