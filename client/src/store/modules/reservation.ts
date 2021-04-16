import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  namespaced: true,
  state: {
    reservations: []
  },
  actions: {
    async loadUsers({commit}: any) {
      try {        
        var items = await axios.get('api/reservation');
        commit('SAVE_USERS', items);
      } catch (error) {
          throw new Error(`API ${error}`);
      }
    }
  },
  mutations: {
    SAVE_USERS(state: any, reservations: any) {
      state.reservations = reservations;
    }
  }
}
