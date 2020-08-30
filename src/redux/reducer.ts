const defaultState = {
    user:{},
    event:{}
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
    }
    return state;
}