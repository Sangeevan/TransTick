export const setUserState = (payload : any) => {
    return { type: 'SET_USER_STATE', payload}
}

export const setEventTypeState = (payload : any) => {
    return { type: 'SET_EVENT_TYPE_STATE', payload}
}

export const setAllTicketsState = (payload : any) => {
    return { type: 'SET_ALL_TICKETS_STATE', payload}
}

export const setMyTicketsState = (payload : any) => {
    return { type: 'SET_MY_TICKETS_STATE', payload}
}

export const setSelectedTicketState = (payload : any) => {
    return { type: 'SET_SELECTED_TICKET_STATE', payload}
}

export const setLogOutState = (payload : any) => {
    return { type: 'SET_LOG_OUT_STATE', payload}
}

export const setUserDetailsState = (payload : any) => {
    return { type: 'SET_USER_DETAILS_STATE', payload}
}