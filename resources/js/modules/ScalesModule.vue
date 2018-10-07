<template>
    <div class="scales-module">
        <div class="root-togglers">
            <root-toggle v-for="root in notes" :key="root" :root="root" />
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Choose a scale</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01" @change="buildScale(scaleKey)" v-model="scaleKey">
                <option disabled value="">-- Select --</option>
                <option v-for="scale in scales" :key="scale.value" :value="scale.key">{{scale.name}}</option>
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .root-togglers {
        margin-bottom: 25px;
    }
</style>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import RootToggle from '../components/RootToggle';

    export default {
        components: {
            RootToggle
        },

        methods: {
            ...mapActions([
                'setActiveNotes',
                'setActiveRoot'
            ]),

            buildScale(scaleKey) {
                if(!scaleKey) {
                    scaleKey = this.scaleKey;
                }

                let scale = this.scaleTemplates[scaleKey];
                let notes = this.notes;
                let root = this.activeRoot;
                let rootIndex = this.activeRootIndex;
                let activeNotes = [];

                this.setActiveRoot(root);
                activeNotes.push(root);

                // Scale is a list of semi-tones from the root
                for(let i = 0; i < scale.length; i++) {
                    let semitones = scale[i];

                    // Calculate note from the index of the root + # semi-tones to get to correct note
                    activeNotes.push(notes[(rootIndex + semitones) % 12]);
                }

                this.setActiveNotes(activeNotes);
            }
        },

        computed: {
            ...mapGetters([
                'notePreferences',
                'scaleTemplates',
                'activeRoot',
                'activeRootIndex',
                'notes'
            ]),

            scales() {
                let scales = [];

                for(let scaleKey in this.scaleTemplates) {
                    if(this.scaleTemplates.hasOwnProperty(scaleKey)) {
                        let scale = {
                            name: scaleKey.charAt(0).toUpperCase() + scaleKey.slice(1),
                            key: scaleKey
                        };

                        scales.push(scale);
                    }
                }

                return scales;
            }
        },

        data() {
            return {
                scaleKey: ''
            }
        },

        mounted() {
            console.log('ScaleModule component mounted.');
        }
    }
</script>
