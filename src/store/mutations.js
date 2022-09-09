export const PUSH_NOTIFICATION = (state, notification) => {
    state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
    })
}

export const REMOVE_NOTIFICATION = (state, notification) => {
    state.notifications = state.notifications.filter(item => item.id != notification.id);
}

export const HEADER_SCROLLED_ADD = (state, scrollTypeAction) => {
    state.headerScrolled = scrollTypeAction ? 'header-scrolled' : '';
}

export const HEADER_SCROLLED_REMOVE = (state) => {
    state.headerScrolled = '';
}