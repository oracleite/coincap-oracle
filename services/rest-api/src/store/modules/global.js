
const state = {
    modalVisible: true,
    modalComponent: "BuyZap",
}

const mutations = {
    showModal(state, componentName) {
        state.modalVisible = componentName ? true : false
        state.modalComponent = componentName
    },
    hideModal(state) {
        state.modalVisible = false
    },
}

export default {
    state,
    mutations
}
