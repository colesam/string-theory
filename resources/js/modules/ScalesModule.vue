<template>
    <div class="key-toggle">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Choose a scale</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
                <option selected>-- Select --</option>
                <option v-for="scale in scales" :key="scale.value" :value="scale.value">{{scale.name}}</option>
            </select>
        </div>

        <key-toggle v-for="keyName in keys" :key="keyName" :keyName="keyName" />
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
    import { mapGetters } from 'vuex';
    import KeyToggle from '../components/KeyToggle.vue';

    export default {
        components: {
            KeyToggle
        },

        computed: {
            ...mapGetters([
                'notePreferences',
                'scaleTemplates'
            ]),

            scales() {
                let scales = [];

                for(let scaleKey in this.scaleTemplates) {
                    if(this.scaleTemplates.hasOwnProperty(scaleKey)) {
                        let scale = {
                            name: scaleKey.charAt(0).toUpperCase() + scaleKey.slice(1),
                            value: scaleKey
                        };

                        scales.push(scale);
                    }
                }

                return scales;
            },

            keys() {
                let keys = [];

                for(let noteKey in this.notePreferences) {
                    if(this.notePreferences.hasOwnProperty(noteKey)) {
                        keys.push(noteKey);
                    }
                }

                return keys;
            }
        },

        mounted() {
            console.log('ScaleControl component mounted.');
        }
    }
</script>
