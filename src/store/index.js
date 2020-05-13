import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import data from '@/assets/json/anexo1.json'

export default new Vuex.Store({
    state: {
        anexo1: data

    },
    mutations: {
        EDIT_ANEXO1(state, { anexo1 }) {
            if (state.anexo1.some(item => item.id === anexo1.id)) {
                state.anexo1 = state.anexo1.filter(item => item.id != anexo1.id);
            } else {
                state.anexo1.push(anexo1);
            }

        },

        anexo(state, anexo1) {
            var anexo = state.anexo1;
            var algo = []
            for (var i = 0; i < anexo.length; i++) {
                algo.push(anexo[i]);
                console.log(algo[i])
            }

            return algo;
        }
    },
    actions: {
        modify({ commit, state }, anexo1) {
            commit('EDIT_ANEXO1', { anexo1 })
            window.localStorage.setItem('codit', JSON.stringify(state.anexo1))
        },

    },
    modules: {

    },

    getters: {
        getAnexo1: state => {
            var anexo = state.anexo1;
            return anexo;
        }

    }

})