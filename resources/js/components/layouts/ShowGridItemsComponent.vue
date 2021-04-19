<template>
    <div class="col-3">
        <router-link :to="{name: 'product.detail', params: {id: item.id}}">
            <div v-if="item.image" class="mt-2">
                <img :src="[`/storage/${path}/${item.image}`]" :alt="item.image" class="img">
            </div>
            <div v-else>
                <img src="/images/no-image.jpg" :alt="item.image" class="img mt-2">
            </div>
            <div class="fleft">
                {{item.name}}
            </div>
        </router-link>
        <button-cart-component :product="item"></button-cart-component>
    </div>
</template>

<script>
import ButtonCartComponent from "./ButtonCartComponent"

export default {
    name: "ShowGridItemsComponent",
    props: ['item', 'path'],
    components: {
        ButtonCartComponent,
    }
}
</script>

<style scoped>
    .fleft  {
        float:left;
        margin-top: 5px;
        margin-right: 20px;
    }
    .img {width: 200px; height: 100px}
</style>
