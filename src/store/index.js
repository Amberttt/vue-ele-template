import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import tabs from './modules/tabs';
import info from './modules/info';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        tabs,
        info
    },
    getters
});

export default store
