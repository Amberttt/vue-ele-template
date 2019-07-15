
const filter = {
    state: {
        isShowInfo: false,
        doctorId: '',
        doctorTel: '',
        doctorInfo: null,
        canEdit:false
    },
    mutations: {
        setIsShow: (state, data) => {
            state.isShowInfo = data;
        },
        setDrId: (state, data) => {
            state.doctorId = data;
        },
        setDrTel: (state, data) => {
            state.doctorTel = data;
        },
        setDrInfo: (state, data) => {
            state.doctorInfo = data;
        },
        setCanEdit: (state, data) => {
            state.canEdit = data;
        }
    },
    actions: {
        setDrShowInfo: ({commit},data) => {
            // return new Promise((resolve, reject) => {
            return new Promise((resolve) => {
                commit('setIsShow',data.isShowInfo);
                commit('setDrId',data.doctorId);
                commit('setDrTel',data.doctorTel);
                commit('setDrInfo',data.doctorInfo);
                commit('setCanEdit',data.canEdit);
                resolve();
            })
        }
    }
};

export default filter;
