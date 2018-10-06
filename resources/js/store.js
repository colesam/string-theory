import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        notePreferences: {
            'A':    'A',
            'A#':   'B♭',
            'B':    'B',
            'C':    'C',
            'C#':   'C#',
            'D':    'D',
            'D#':   'D#',
            'E':    'E',
            'F':    'F',
            'F#':   'F#',
            'G':    'G',
            'G#':   'G#'
        },

        openTuning: ['E', 'A', 'D', 'G']
    },

    getters: {
        notePreferences(state) {
            return state.notePreferences;
        },

        openTuning(state) {
            return state.openTuning;
        }
    },

    mutations: {
        SET_OPEN_TUNING(state, openTuningArray) {
            state.openTuning = openTuningArray;
        }
    },

    actions: {
        setOpenTuning(context, openTuningArray) {
            context.commit('SET_OPEN_TUNING', openTuningArray);
        }
    }

});
