<template>
    <button class="key-toggle btn btn-outline-primary btn-sm">
        {{ keyName }}
    </button>
</template>

<style lang="scss" scoped>
    .key-toggle {
        width: 50px;
        margin-right: 10px;
        transition: all 0.1s;
    }
</style>

<script>
    export default {
        props: {
            keyName: String
        },

        mounted() {
            console.log('ScaleToggle mounted.');
        }
    }
</script>
