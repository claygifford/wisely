export default {
    namespaced: true,
    state: {
        darkMode: false,
    },
    mutations: {
        darkMode(state: any, darkMode: boolean) {
            state.darkMode = darkMode;
            localStorage.theme = darkMode ? 'dark' : 'light';
            if (state.darkMode)
                document.documentElement.classList.add('dark');
            else {
                document.documentElement.classList.remove('dark');
            }
        }
    }
}