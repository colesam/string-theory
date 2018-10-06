import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        activeNotes: ['G', 'B', 'D'],
        root: 'G',
        third: 'B',
        minorThird: null,
        fifth: 'D',

        scaleTemplates: {
            ionian:     [2, 2, 1, 2, 2, 2],
            dorian:     [2, 1, 2, 2, 2, 1],
            phrygian:   [1, 2, 2, 2, 1, 2],
            lydian:     [2, 2, 2, 1, 2, 1],
            mixolydian: [2, 2, 1, 2, 1, 2],
            aeolian:    [2, 1, 2, 1, 2, 2],
            locrian:    [1, 2, 1, 2, 2, 2]
        },

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

        root(state) {
            return state.root;
        },

        third(state) {
            return state.third;
        },

        minorThird(state) {
            return state.minorThird;
        },

        fifth(state) {
            return state.fifth;
        },

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
        },


        // Notes Mutators
        RESET_NOTES(state) {
            state.activeNotes = [];
            state.root = null;
            state.third = null;
            state.minorThird = null;
            state.fifth = null;
        },

        SET_ACTIVE_NOTES(state, notesArray) {
            state.activeNotes = notesArray;
        },

        SET_ROOT_NOTE(state, note) {
            state.root = note;
        },

        SET_THIRD_NOTE(state, note) {
            state.third = note;
        },

        SET_MINOR_THIRD_NOTE(state, note) {
            state.minorThird = note;
        },

        SET_FIFTH_NOTE(state, note) {
            state.fifth = note;
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

        setRootNote(context, note) {
            context.commit('SET_ROOT_NOTE', note);
        },

        setThirdNote(context, note) {
            context.commit('SET_THIRD_NOTE', note);
        },

        setMinorThirdNote(context, note) {
            context.commit('SET_MINOR_THIRD_NOTE', note);
        },

        setFifthNote(context, note) {
            context.commit('SET_FIFTH_NOTE', note);
        }
    }

});
