import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import tabs from './modules/tabs';
import DrInfo from './modules/DrInfo';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        tabs,
        DrInfo
    },
    getters
});

export default store
