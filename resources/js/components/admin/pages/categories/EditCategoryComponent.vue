<template>
    <div>
        <h1>Edit Category</h1>

        <form-category :category="category" :updated="true"></form-category>
    </div>
</template>

<script>
import FormCategoryComponent from "./partials/FormCategoryComponent";

export default {
    name: "EditCategoryComponent",
    props: {
        id: {require: true}
    },
    data () {
        return {
            category: {}
        }
    },
    created() {
        this.loadCategory()
    },
    methods: {
        loadCategory () {
            this.$store.dispatch('loadCategory', this.id)
                .then(response => this.category = response)
                .catch(error => {
                    console.log(error)
                    this.$snotify.error('Category Not Found', 'Error 404')
                    this.$router.push({name: 'admin.categories'})
                })
        }
    },
    components: {
        formCategory: FormCategoryComponent
    }
}
</script>

<style scoped>

</style>
