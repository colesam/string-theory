<template>
    <div class="note" :class="{ active: isActive }" @click="handleClick">
        <div :class="noteClassList()">
            {{ computedNote.displayNote }}
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

        &.active {
            opacity: 1;
        }
    }

    %note__name {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 30px;
        height: 30px;
        border-radius: 50px;
        border: 2px solid lightgray;
        box-sizing: border-box;
        background: gray;
        color: white;
    }

    .note__name {
        @extend %note__name;
    }

    .note__name--root {
        @extend %note__name;

        background: green;
        border: 2px solid lightgreen;
    }

    .note__name--third {
        @extend %note__name;

        background: darkblue;
        border: 2px solid dodgerblue;
    }

    .note__name--minorThird {
        @extend %note__name;

        background: dodgerblue;
        border: 2px solid darkblue;
    }

    .note__name--fifth {
        @extend %note__name;

        background: darkred;
        border: 2px solid red;
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
            handleClick() {
                console.log(`Clicked ${this.computedNote}.`);
            },

            noteClassList() {
                let classes = 'note__name';

                if(this.isRoot) {
                    classes += '--root';
                } else if(this.isThird) {
                    classes += '--third';
                } else if(this.isMinorThird) {
                    classes += '--minorThird';
                } else if(this.isFifth) {
                    classes += '--fifth';
                }

                return classes;
            }
        },

        computed: {
            ...mapGetters([
                'notePreferences',
                'openTuning',
                'activeNotes',
                'root',
                'third',
                'minorThird',
                'fifth'
            ]),

            computedNote() {
                let baseNote = this.openTuning[this.noteIndex]; // get the open tuning for this note(0-3)

                let notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
                let startIndex = 0;

                for(let i = 0; i < notes.length; i++) {
                    if(notes[i] === baseNote) {
                        startIndex = i;
                    }
                }


                let note = notes[(startIndex + this.fretIndex) % 12];
                return {
                    note: note,
                    displayNote: this.notePreferences[note]
                };
            },

            isActive() {
                return this.activeNotes.includes(this.computedNote.note);
            },

            isRoot() {
                console.log(this.root + ' ' + this.computedNote.note);
                return this.root === this.computedNote.note;
            },

            isThird() {
                return this.third === this.computedNote.note;
            },

            isMinorThird() {
                return this.minorThird === this.computedNote.note;
            },

            isFifth() {
                return this.fifth === this.computedNote.note;
            }
        }
    }
</script>
