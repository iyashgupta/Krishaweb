export const reducer=(state=[],action)=>{
    switch(action.type){

        case "GET": return action.payload
        case "CHECK": return action.payload
          

        default:return state
    }
}