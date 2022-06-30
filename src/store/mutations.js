export const ADD_NOTIFICATION = (state, notification) => {
    state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now() + toString(26)).substring(2)
    })
}