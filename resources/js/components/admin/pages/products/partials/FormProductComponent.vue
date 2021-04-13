<template>
    <div>
        <form class="form" @submit.prevent="onSubmit">
            <div :class="['form-group', {'has-error': errors.name}]">
                <div v-if="errors.name">
                    {{ errors.name[0]}}
                </div>
                <input type="text" class="form-control" v-model="product.name" placeholder="Enter the Name">
            </div>

            <div :class="['form-group', {'has-error': errors.image}]">
                <div v-if="errors.image">
                    {{ errors.image[0]}}
                </div>
                <div v-if="imagePreview">
                    <img :src="imagePreview" class="image-preview">
                    <button class="btn btn-danger" @click.prevent="removePreviewImage">Remove</button>
                </div>
                <div>
                    <input type="file" class="form-control" @change="onFileChange">
                </div>
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

            const formData = new FormData ()
            if (this.upload != null)
                formData.append('image', this.upload)

            formData.append('id', this.product.id)
            formData.append('name', this.product.name)
            formData.append('description', this.product.description)
            formData.append('category_id', this.product.category_id)

            this.$store.dispatch(action, formData)
                .then(() => {
                    this.$snotify.success('Product Saved!')
                    this.reset()
                    this.$emit('success')
                })
                .catch(error => {
                    this.$snotify.error('Product NOT Saved!', 'Error')
                    console.log('FormProductComponent')
                    console.log(error.response.data.errors)
                    this.errors = error.response.data.errors
                })
        },

        reset () {
            this.errors = {}
            this.imagePreview = null
            this.upload = null
        },

        onFileChange (e) {
            let files = e.target.files || e.dataTransfer.files
            if (!files.length)
                return
            this.upload = files[0]

            this.previewImage(files[0])
        },

        previewImage (file) {
            let reader = new FileReader()
            reader.onload = (e) => {
                this.imagePreview = e.target.result
            }
            reader.readAsDataURL(file)
        },

        removePreviewImage () {
            this.imagePreview = null
            this.upload = null
        }
    },
    computed: {
        categories () {
            return this.$store.state.categories.items.data
        }
    },
    data () {
        return {
            errors: {},
            upload: null,
            imagePreview: null,
        }
    }
}
</script>

<style scoped>
    .has-error { color: red; }
    .has-error input { border: 1px solid red; }
    .image-preview { max-width: 60px;}
</style>
