<template>
    <div>
        <h1>List of Products</h1>
        <div class ="row">
            <div class="col">
                <button class="btn btn-primary" @click.prevent="create">Add Nem Product</button>
                <vodal
                :show="showModal"
                animation="zoom"
                :width="600"
                :height="500"
                @hide="hideModal">
                <form-product
                    :updated="updated"
                    :product="product"
                    @success="success"></form-product>
                </vodal>
            </div>
            <div class="col"><search @search="searchForm"></search></div>
        </div>
        <table class="table mt-3">
            <thead class="thead-light">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th width="150">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(product, index) in products.data" :key="index">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.category_id }}</td>
                <td>
                    <div class="fleft">
                        <a href="#" @click.prevent="edit(product.id)">Edit</a> |&nbsp;
                    </div>
                    <button-delete :item="product" @destroy="destroy"></button-delete>
                </td>
            </tr>
            </tbody>
        </table>

        <pagination
            :pagination="products"
            :offset="6"
            @paginate="loadProducts"
        ></pagination>
    </div>
</template>

<script>
import Vodal from 'vodal'
import PaginationComponent from "../../../layouts/PaginationComponent";
import SearchComponent from "../../layouts/SearchComponent";
import FormProductComponent from "./partials/FormProductComponent";
import ButtonDeleteComponent from "../../layouts/ButtonDeleteComponent"

export default {
    name: "ProductsComponent",
    created() {
        this.loadProducts(1)
    },
    data () {
       return {
           search: '',
           showModal: false,
           product: {
               id: '',
               name: '',
               description: '',
               category_id: ''
           },
           updated: false
       }
    } ,
    computed: {
        products () {
            return this.$store.state.products.items
        },
        params () {
            return {
                page: this.products.current_page,
                filter: this.search,
            }
        }
    },
    methods: {
        loadProducts (page) {
            this.$store.dispatch('loadProducts', {...this.params, page})
        },

        create () {
            this.updated = false
            this.showModal = true
            this.reset()
        },

        edit (id) {
            this.reset()
            this.$store.dispatch('loadProduct', id)
                .then(response => {
                    console.log(response)
                    this.product = response
                    this.showModal = true
                    this.updated = true
                })
                .catch(() => {
                    this.$snotify.error('Product NOT Found!', 'Error')
                })
                .finally()
        },

        destroy(item) {
            this.$store.dispatch('destroyProduct', item.id)
                .then(() => {
                    this.$snotify.success(`Product ${item.name} Deleted!`)
                    this.loadProducts()
                })
                .catch(error => {
                    this.$snotify.error('Product NOT Deleted', 'Error')
                })
        },

        searchForm (filters) {
            this.search = filters
            this.loadProducts(1)
        },

        hideModal () {
            this.showModal = false
        },

        success() {
            this.hideModal()
            this.loadProducts()
        },

        reset () {
            this.product = {
                id: '',
                name: '',
                description: '',
                category_id: ''
            }
        }
    },
    components: {
        pagination: PaginationComponent,
        search: SearchComponent,
        vodal: Vodal,
        formProduct: FormProductComponent,
        buttonDelete: ButtonDeleteComponent
    },

}
</script>

<style scoped>
    .fleft  {
        float:left;
    }
</style>
