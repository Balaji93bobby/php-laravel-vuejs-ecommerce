import Vue from 'vue';
import VueRouter from "vue-router";

import AdminComponent from "../components/admin/AdminComponent";
import CategoriesComponent from "../components/admin/pages/categories/CategoriesComponent";
import DashboardComponent from "../components/admin/pages/dashboard/DashboardComponent";
import AddCategoryComponent from "../components/admin/pages/categories/AddCategoryComponent";
import EditCategoryComponent from "../components/admin/pages/categories/EditCategoryComponent";
import ProductsComponent from "../components/admin/pages/products/ProductsComponent";
import MainLayoutComponent from "../components/frontend/MainLayoutComponent";
import HomeComponent from "../components/frontend/pages/home/HomeComponent";
import ContactComponent from "../components/frontend/pages/contact/ContactComponent";
import ProductDetailComponent from "../components/frontend/pages/product/ProductDetailComponent";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainLayoutComponent,
        children: [
            {path: '', component: HomeComponent, name: 'home'},
            {path: '/contact', component: ContactComponent, name: 'contact'},
            {path: '/product/:id', component: ProductDetailComponent, name: 'product.detail', props:true},
        ]
    },
    {
        path: '/admin',
        component: AdminComponent,
        children: [
            {path: '', component: DashboardComponent, name: 'admin.dashboard'},
            {path: 'categories', component: CategoriesComponent, name: 'admin.categories'},
            {path: 'categories/create', component: AddCategoryComponent, name: 'admin.categories.create'},
            {path: 'categories/:id/edit', component: EditCategoryComponent, name: 'admin.categories.edit', props:true},

            {path: 'products', component: ProductsComponent, name: 'admin.products'},
        ]
    },
];

const router = new VueRouter({
    routes
})

export default router
