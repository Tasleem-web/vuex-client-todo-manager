export const addNotification = ({ commit }, notification) => {
    commit('PUSH_NOTIFICATION', notification);
}

export const removeNotification = ({ commit }, notification) => {
    commit('REMOVE_NOTIFICATION', notification)
}

export const headerSCrolledAdd = ({ commit }, scrollTypeAction) => {
    commit('HEADER_SCROLLED_ADD', scrollTypeAction);
}

export const headerSCrolledRemove = ({ commit }, scrollTypeAction) => {
    commit('HEADER_SCROLLED_REMOVE', scrollTypeAction);
}