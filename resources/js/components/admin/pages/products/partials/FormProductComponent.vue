<template>
    <div>
        <form class="form" @submit.prevent="onSubmit">
            <div :class="['form-group', {'has-error': errors.name}]">
                <div v-if="errors.name">
                    {{ errors.name[0]}}
                </div>
                <input type="text" class="form-control" v-model="product.name" placeholder="Enter the Name">
            </div>

            <div :class="['form-group', {'has-error': errors.description}]">
                <div v-if="errors.description">
                    {{ errors.description[0]}}
                </div>
                <textarea v-model="product.description" cols="30" rows="10" placeholder="Enter the Description"></textarea>
            </div>

            <div :class="['form-group', {'has-error': errors.category_id}]">
                <div v-if="errors.category_id">
                    {{ errors.category_id[0]}}
                </div>
                <select class="form-control" v-model="product.category_id">
                    <option value="">Select one Category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
                </select>
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "FormProductComponent",
    props: {
        product: {
            require: false,
            type: Object|Array
        },
        updated: {
            require: false,
            type: Boolean,
            default: false,
        }
    },
    methods: {
        onSubmit () {
            let action = this.updated ? "updateProduct" : "storeProduct"
            this.$store.dispatch(action, this.product)
                .then(() => {
                    this.$snotify.success('Product Saved!')
                    this.errors = {}
                    this.$emit('success')
                })
                .catch(error => {
                    this.$snotify.error('Product NOT Saved!', 'Error')
                    console.log('FormProductComponent')
                    console.log(error.response.data.errors)
                    this.errors = error.response.data.errors
                })
        },
    },
    computed: {
        categories () {
            return this.$store.state.categories.items.data
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
