<template>
    <div>
        <a href="#" @click.prevent="confirmDestroy(item)">Delete</a>
    </div>
</template>

<script>
export default {
    name: "ButtonDeleteComponent",
    props: {
        item: {
            require: true,
            type: Object
        }
    },
    methods: {
        confirmDestroy(item) {
            this.$snotify.error('Confirm Delete?', 'Confirm?', {
                timeout: 10000,
                showProgressBar: true,
                closeOnClick: true,
                buttons: [
                    {text: 'No', action: (value) => {console.log('Não Deleta'), this.$snotify.remove(value.id)}},
                    {text: 'Yes', action: (value) => {this.$emit('destroy', item), this.$snotify.remove(value.id)}}
                ]
            })
        },
    }
}
</script>

<style scoped>

</style>
