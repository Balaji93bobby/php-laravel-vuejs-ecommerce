<template>
    <div class="col-3">
        <router-link :to="{name: 'product.detail', params: {id: item.id}}">
            <div v-if="item.image" class="mt-2">
                <img :src="[`/storage/${path}/${item.image}`]" :alt="item.image" class="img">
            </div>
            <div v-else>
                <img src="/images/no-image.jpg" :alt="item.image" class="img mt-2">
            </div>
            {{item.name}}
        </router-link>
    </div>
</template>

<script>
export default {
    name: "ShowGridItemsComponent",
    props: ['item', 'path']
}
</script>

<style scoped>
    .img {width: 200px; height: 100px}
</style>
