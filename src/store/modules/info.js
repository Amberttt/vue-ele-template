
const filter = {
    state: {
        isShowInfo: false,
        info: null
    },
    mutations: {
        SET_IS_SHOW: (state, data) => {
            state.isShowInfo = data;
        },
        SET_INFO: (state, data) => {
            state.info = data;
        }
    },
    actions: {
        SET_INFO_ACTIONS: ({commit},data) => {
            // return new Promise((resolve, reject) => {
            return new Promise((resolve) => {
                commit('SET_IS_SHOW',data.isShowInfo);
                commit('SET_INFO',data.info);
                resolve();
            })
        }
    }
};

export default filter;
