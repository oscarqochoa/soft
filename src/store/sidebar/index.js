import navMenuItems from "@/navigation/vertical";


export default {
    namespaced: true,
    state: {
        S_SIDEBAR_ITEMS: navMenuItems
    },
    getters: {

    },
    mutations: {
        UPDATE_SIDEBAR_ITEM_PROPERTY(state, payload) {
            state.S_SIDEBAR_ITEMS.forEach(item => {
                if (item?.route === payload.routeName) {
                    item.tag = payload.tag
                }
            })
        }
    },
    actions: {

    },
}
