export default {
    state: () => ({
        name: 'Buster'
    }),
    getters: {},
    mutations: {
        SET_NAME(state: any, payload: any) {
            state.name = payload
        }
    },
    actions: {
        saveName({ commit }: any, data: any) {
            commit('SET_NAME', data)
        }
    },
}