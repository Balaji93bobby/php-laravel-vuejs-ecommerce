<template>
    <div>
        <h1>
            Add New Category
        </h1>

        <form-category></form-category>
    </div>
</template>

<script>
import FormCategoryComponent from "./partials/FormCategoryComponent";

export default {
    name: "AddCategoryComponent",
    components: {
        formCategory: FormCategoryComponent
    }
}
</script>

<style scoped>

</style>
