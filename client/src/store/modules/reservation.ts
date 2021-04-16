import axios from 'axios'

export default {
  namespaced: true,
  state: {
    reservations: [],
    slots: []
  },
  actions: {
    async loadReservations({commit}: any) {
      var items = [
        { name: 'Debby',
          status: 'Active',
          time: '12 PM : 15',
          email: 'email@gmail.com',
          partysize: '12'
        }
      ];
      commit('SAVE_RESERVATIONS', items);
      // try {        
      //   var items = await axios.get('api/reservation/getreservations');
      //   commit('SAVE_RESERVATIONS', items);
      // } catch (error) {
      //     throw new Error(`API ${error}`);
      // }
    },
    async loadInventory({commit}: any) {
      var items = [{"hour":"1 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"2 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"3 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"4 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"5 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"6 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"7 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"8 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"9 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"10 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"11 AM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"12 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"1 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"2 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"3 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"4 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"5 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"6 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"7 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"8 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"9 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"10 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]},{"hour":"11 PM","times":[{"available":0,"reserved":0,"interval":"0"},{"available":0,"reserved":0,"interval":"15"},{"available":0,"reserved":0,"interval":"30"},{"available":0,"reserved":0,"interval":"45"}]}];
      commit('SAVE_INVENTORY', items);
      // try {        
      //   var items = await axios.get('api/reservation/getinventory');
      //   commit('SAVE_INVENTORY', items);
      // } catch (error) {
      //     throw new Error(`API ${error}`);
      // }
    },
    async createReservation({commit}: any, reservation: any) {
      commit('INSERT_RESERVATION', reservation);
      // try {        
      //   await axios.post('api/reservation/createreservation');
      // } catch (error) {
      //     throw new Error(`API ${error}`);
      // }
    },
    async setInventory({commit}: any, inventory: any) {
      commit('SAVE_INVENTORY', [inventory]);
      // try {        
      //   await axios.post('api/reservation/setinventory', inventory);
      // } catch (error) {
      //     throw new Error(`API ${error}`);
      // }
    }
  },
  mutations: {
    SAVE_RESERVATIONS(state: any, reservations: any) {
      state.reservations = reservations;
    },
    SAVE_INVENTORY(state: any, slots: any) {
      state.slots = slots;
    },
    INSERT_RESERVATION(state: any, reservation: any) {
      state.reservations.push(reservation);
    }
  }
}
