<template>
    <div class="string-interface">
        <div class="string-interface__fret fret-0">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-1">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-2">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-3">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-4">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-5">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-6">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-7">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-8">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-9">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-10">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-11">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-12">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-13">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-14">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-15">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-16">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-17">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-18">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
        <div class="string-interface__fret fret-19">
            <string></string>
            <string></string>
            <string></string>
            <string></string>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .string-interface {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
    }

    .string-interface__fret {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;

        &:first-child {
            margin-bottom: 5px;
        }

        &:last-child {
            margin-bottom: 5px;
        }
    }
</style>

<script>
    import String from './String.vue';

    export default {
        components: {
            String
        },

        mounted() {
            console.log('StringInterface mounted.')
        }
    }
</script>
