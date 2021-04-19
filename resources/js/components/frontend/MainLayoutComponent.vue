<template>
    <div>
        <header-site></header-site>
        <router-view></router-view>
        <footer-site></footer-site>
    </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export default {
    name: "MainLayoutComponent",
    components: {
        headerSite: HeaderComponent,
        footerSite: FooterComponent
    }
}
</script>

<style scoped>

</style>
