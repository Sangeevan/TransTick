const defaultState = {
    user:{},
    event:{},
    alltickets:{},
    mytickets:{},
    selectedticket:{}
}
export default function reducer(state = defaultState, {type,payload} : {type:String, payload:any}) : any {
    switch(type){
        case 'SET_USER_STATE' :
            return {
                ...state,
                user:{
                    username : payload
                }
            }
        case 'SET_EVENT_TYPE_STATE' :
            return {
                ...state,
                event : {
                    type : payload
                }
            }
        case 'SET_ALL_TICKETS_STATE' :
            return {
                ...state,
                alltickets : {
                    tickets : payload
                }
            }
        case 'SET_MY_TICKETS_STATE' :
            return {
                ...state,
                mytickets : {
                    tickets : payload
                }
            }
        case 'SET_SELECTED_TICKET_STATE' :
            return {
                ...state,
                selectedticket : {
                    ticket : payload
                }
            }
    }
    return state;
}