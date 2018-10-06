<template>
    <div class="string-interface">
        <div class="string-interface__fret-0">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-1">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-2">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-3">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-4">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-5">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-6">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-7">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-8">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-9">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-10">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-11">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-12">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-13">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-14">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-15">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-16">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-17">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-18">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
        <div class="string-interface__fret fret-19">
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
            <div class="string-interface__string"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .string-interface {

    }

    .string-interface__fret {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
    }

    .string-interface__string {
        flex-grow: 1;
        background: purple;
        opacity: 0;
        margin: 2px 0;
    }
</style>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
