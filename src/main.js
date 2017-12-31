// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import * as firebase from 'firebase'
Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyBw0ffYIn0FhoNa9kN3tZNnVxQGTkikSUE',
  authDomain: 'runesreforged-87f0f.firebaseapp.com',
  databaseURL: 'https://runesreforged-87f0f.firebaseio.com',
  projectId: 'runesreforged-87f0f',
  storageBucket: 'runesreforged-87f0f.appspot.com',
  messagingSenderId: '228645880730'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
