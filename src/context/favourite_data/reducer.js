export const reducer =(state,{type,payload})=>{
    switch(type){
        case 'refetch' : return {...state, data:payload};
        default: return state
    }
}