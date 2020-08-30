const defaultState = {
    user:{},
    allTickets:{}
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
        case 'SET_ALL_TICKETS_STATE' :
            return {
                ...state,
                allTickets : payload
            }
    }
    return state;
}