import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        activeNotes: ['G', 'A'],

        activeRoot: 'G',

        scaleTemplates: {
            ionian:     [2, 4, 5, 7, 9, 11],
            dorian:     [2, 3, 5, 7, 9, 10],
            phrygian:   [1, 3, 5, 7, 8, 10],
            lydian:     [2, 4, 6, 7, 9, 10],
            mixolydian: [2, 4, 5, 7, 9, 10],
            aeolian:    [2, 3, 5, 7, 8, 10],
            locrian:    [1, 3, 5, 6, 8, 10],
            arp_minor:  [3, 7, 10]
        },

        notes: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],

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
        scaleTemplates(state) {
            return state.scaleTemplates;
        },

        activeNotes(state) {
            return state.activeNotes;
        },

        activeRoot(state) {
            return state.activeRoot;
        },

        activeRootIndex(state) {
            if(!state.activeRoot) {
                return false;
            }

            for(let i = 0; i < state.notes.length; i++) {
                if(state.notes[i] === state.activeRoot) {
                    return i;
                }
            }

            return false;
        },

        notePreferences(state) {
            return state.notePreferences;
        },

        notes(state) {
            return state.notes;
        },

        openTuning(state) {
            return state.openTuning;
        }
    },

    mutations: {
        SET_OPEN_TUNING(state, openTuningArray) {
            state.openTuning = openTuningArray;
        },


        // Notes Mutations
        RESET_NOTES(state) {
            state.activeNotes       = [];
            state.activeRoot        = null;
            state.activeThird       = null;
            state.activeMinorThird  = null;
            state.activeFifth       = null;
        },

        SET_ACTIVE_NOTES(state, notesArray) {
            state.activeNotes = notesArray;
        },

        SET_ACTIVE_ROOT(state, note) {
            state.activeRoot = note;
        }
    },

    actions: {
        setOpenTuning(context, openTuningArray) {
            context.commit('SET_OPEN_TUNING', openTuningArray);
        },


        // Notes Actions
        resetNotes(context) {
            context.commit('RESET_NOTES');
        },

        setActiveNotes(context, notesArray) {
            context.commit('SET_ACTIVE_NOTES', notesArray);
        },

        setActiveRoot(context, note) {
            context.commit('SET_ACTIVE_ROOT', note);
        }
    }

});
