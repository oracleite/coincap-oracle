import Vue from 'vue'
import Vuex from 'vuex'
//THIS IS EVIL!
// import VuexPersistence from 'vuex-persist';

import global from './modules/global'

// import app from './App'

Vue.use(Vuex)

/**
 * Get coinMap
 */


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });

export default function (/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            global,
        },
        strict: true,
    });

    return Store
}
