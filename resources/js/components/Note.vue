<template>
    <div class="note" :class="{ active: isActive }">
        <div :class="noteClassList()">
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
        border: 2px solid #704D35;
        box-sizing: border-box;
        background: #493223;
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
    import { mapGetters } from 'vuex';

    export default {
        props: {
            fretIndex: Number,
            noteIndex: Number
        },

        methods: {
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
                'activeRoot',
                'activeRootIndex',
                'notes'
            ]),

            computedNote() {
                let baseNote = this.openTuning[this.noteIndex]; // get the open tuning for this note(0-3)
                let notes = this.notes;
                let startIndex = 0;

                for(let i = 0; i < notes.length; i++) {
                    if(notes[i] === baseNote) {
                        startIndex = i;
                    }
                }

                return notes[(startIndex + this.fretIndex) % 12];
            },

            computedNotePreferred() {
                return this.notePreferences[this.computedNote];
            },

            isActive() {
                return this.activeNotes.includes(this.computedNote);
            },

            isRoot() {
                return (this.computedNote === this.activeRoot);
            },

            isThird() {
                // Major Thirds are 4 semi-tones from the root
                let notes = this.notes;
                let third = notes[(this.activeRootIndex + 4) % 12];

                return (this.computedNote === third);
            },

            isMinorThird() {
                // Minor Thirds are 3 semi-tones from the root
                let notes = this.notes;
                let minorThird = notes[(this.activeRootIndex + 3) % 12];

                return (this.computedNote === minorThird);
            },

            isFifth() {
                // Fifths are 7 semi-tones from the root
                let notes = this.notes;
                let fifth = notes[(this.activeRootIndex + 7) % 12];

                return (this.computedNote === fifth);
            }
        }
    }
</script>
