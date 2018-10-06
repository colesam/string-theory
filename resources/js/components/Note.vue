<template>
    <div class="note" :class="note" @click="handleClick">
        <div class="note__name">
            C#
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .note {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        flex-grow: 1;
        opacity: 0;
        margin: 2px 0;

        transition: all 0.1s;

        &:hover {
            opacity: 1;
            cursor: pointer;
        }
    }

    .note__name {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 30px;
        height: 30px;
        border-radius: 50px;
        border: 2px solid lightgreen;
        box-sizing: border-box;
        background: green;
        color: white;
    }
</style>

<script>
    export default {
        props: {
            fret: Number,
            note: Number
        },

        mounted() {
            console.log(`note [${this.fret}, ${this.note}] mounted.`);
        },

        methods: {
            handleClick: function() {
                console.log(`Clicked note [${this.fret}, ${this.note}].`);
            }
        }
    }
</script>
