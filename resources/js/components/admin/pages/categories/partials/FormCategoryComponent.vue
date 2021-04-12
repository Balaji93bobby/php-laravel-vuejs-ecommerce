<template>
    <div>
        <form class="form" @submit.prevent="onSubmit">
            <div :class="['form-group', {'has-error': errors.name}]">
                <div v-if="errors.name">
                    {{ errors.name[0]}}
                </div>
                <input type="text" class="form-control" v-model="category.name" placeholder="Enter the Name">
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "FormCategoryComponent",
    props: {
        category: {
            require: false,
            type: Object|Array,
            default: () => {
                return {
                    id: '',
                    name: ''
                }
            }
        },
        updated: {
            require: false,
            type: Boolean,
            default: false,
        }
    },
    methods: {
        onSubmit () {
            const action = this.updated ? "updateCategory" : "storeCategories"
            this.$store.dispatch(action, this.category)
                .then(() => {
                    this.$snotify.success('Category Saved!')
                    this.$router.push({name: 'admin.categories'})
                })
                .catch(error => {
                    this.$snotify.error('Category NOT Saved!', 'Error')
                    console.log('FormCategoryComponent')
                    console.log(error.response.data.errors)
                    this.errors = error.response.data.errors
                })
        }
    },
    data () {
        return {
            errors: {}
        }
    }
}
</script>

<style scoped>
    .has-error { color: red; }
    .has-error input { border: 1px solid red; }
</style>
