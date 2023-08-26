

export const getcall=(data)=>{
    return {
        type:"GET",
        payload:data
    }
}

export const queryCall=(q)=>{
    return {
        type:"CHECK",
        payload:q
    }
}