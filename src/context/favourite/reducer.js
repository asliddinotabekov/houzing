export const reducer =(state,{type,payload})=>{
    switch(type){
        case 'refetch' : return {...state, refetch:payload};
        case 'data' : return {...state, data_f:payload};
        default: return state
    }
}