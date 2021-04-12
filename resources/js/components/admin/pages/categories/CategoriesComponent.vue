<template>
    <div>
        <h1>List of Categories</h1>
        <div class="row">
            <div class="col">
                <router-link :to="{name: 'admin.categories.create'}" class="btn btn-primary">Add New Category</router-link>
            </div>
            <div class="col">
                <search @searchCategory="search"></search>
            </div>
        </div>
        <table class="table mt-3">
            <thead class="thead-light">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th width="150">Actions</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(category, index) in categories.data" :key="index">
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td>
                    <router-link :to="{name: 'admin.categories.edit', params: {id: category.id}}">Edit</router-link> |
                    <a href="#" @click.prevent="confirmDestroy(category)">Delete</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SearchCategoryComponent from "./partials/SearchCategoryComponent";

export default {
    name: "CategoriesComponent",
    components: {
        search: SearchCategoryComponent,
    },
    created () {
        this.loadCategories()
    },
    data () {
        return {
            name: '',
        }
    },
    computed: {
        categories () {
            return this.$store.state.categories.items
        }
    },
    methods: {
        loadCategories() {
            this.$store.dispatch('loadCategories', {name: this.name})
        },
        confirmDestroy(category) {
            this.$snotify.error('Confirm Delete?', 'Confirm?', {
                timeout: 10000,
                showProgressBar: true,
                closeOnClick: true,
                buttons: [
                    {text: 'No', action: (value) => {console.log('Não Deleta'), this.$snotify.remove(value.id)}},
                    {text: 'Yes', action: (value) => {this.destroy(category), this.$snotify.remove(value.id)}}
                ]
            })
        },

        destroy(category) {
            this.$store.dispatch('destroyCategory', category.id)
                .then(() => {
                    this.$snotify.success(`Category ${category.name} Deleted!`)
                    this.loadCategories()
                })
                .catch(error => {
                    this.$snotify.error('Category NOT Deleted', 'Error')
                })
        },

        search(filter) {
            this.name = filter
            this.loadCategories()
        }
    }
}
</script>

<style scoped>

</style>
