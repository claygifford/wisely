export default {
    namespaced: true,
    state: {
        isSideBarCollapsed: false,
        isSlideOverCollapsed: false,
    },
    mutations: {
        setSideBar(state: any, value: boolean) {
            state.isSideBarCollapsed = value;
        },

        setSlideOver(state: any, value: boolean) {
            state.isSlideOverCollapsed = value;
        }
    }
}