<template>
    <div class="note" :class="'note-' + noteIndex" @click="handleClick">
        <div class="note__name">
            {{ computedNote }}
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
    import {mapGetters} from 'vuex';

    export default {
        props: {
            fretIndex: Number,
            noteIndex: Number
        },

        methods: {
            handleClick: function() {
                console.log(`Clicked ${this.computedNote}.`);
            }
        },

        computed: {
            ...mapGetters([
                'notePreferences',
                'openTuning'
            ]),

            computedNote(state) {
                let baseNote = this.openTuning[this.noteIndex]; // get the open tuning for this note(0-3)

                let notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
                let startIndex = 0;

                for(let i = 0; i < notes.length; i++) {
                    if(notes[i] === baseNote) {
                        startIndex = i;
                    }
                }


                let note = notes[(startIndex + this.fretIndex) % 12];
                return this.notePreferences[note];
            },
        }
    }
</script>
