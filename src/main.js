import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    count: 0
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
