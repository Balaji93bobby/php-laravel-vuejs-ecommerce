<template>
    <div class="container">
        <h1>Products</h1>
        <search @search="search"></search>
        <div class="row">
            <show-grid v-for="(product, index) in products.data" :key="index" :item="product" :path="'products'"></show-grid>
        </div>
        <br/>
        <paginate :pagination="products" @paginate="loadProducts"></paginate>

    </div>
</template>

<script>
import ShowGridItemsComponent from "../../../layouts/ShowGridItemsComponent"
import PaginationComponent from "../../../layouts/PaginationComponent";
import SearchProductCategoryComponent from "./partials/SearchProductCategoryComponent";

export default {
    name: "HomeComponent",
    data () {
        return {
            filter: '',
            category_id: '',
        }
    },
    created () {
      if (this.products.data.length == 0)
          this.$store.dispatch('loadProducts', {})
    },
    computed: {
        products () {
            return this.$store.state.products.items
        },
        params () {
            return {
                filter: this.filter,
                category_id: this.category_id,
                page: this.products.current_page,
            }
        }
    },
    methods: {
        loadProducts (page = 1) {
            this.$store.dispatch('loadProducts', {...this.params, page})
        },

        search (values) {
            this.filter = values.filter,
            this.category_id = values.category_id,
            this.loadProducts()
        }
    },
    components: {
        paginate: PaginationComponent,
        showGrid: ShowGridItemsComponent,
        search: SearchProductCategoryComponent
    }
}
</script>

<style scoped>

</style>
