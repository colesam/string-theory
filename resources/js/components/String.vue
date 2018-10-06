<template>
    <div class="string">

    </div>
</template>

<style lang="scss" scoped>
    .string {
        flex-grow: 1;
        background: purple;
        opacity: 0;
        margin: 2px 0;

        &:hover {
            opacity: 5;
        }
    }
</style>

<script>
    export default {
        mounted() {
            console.log('String mounted.')
        }
    }
</script>
