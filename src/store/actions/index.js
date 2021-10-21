export const addToFav = (company) => ({
    type: 'ADD_TO_FAV',
    payload: company
})

export const removeFromFav = (company) => ({
    type: 'REMOVE_FROM_FAV',
    payload: company
})
export const getjob = (query) => {
return async (dispatch, getState) => {
  
try {
    let res = await fetch (query)
    if(res.ok){
    const data = await Response.json()
        dispatch({
            type : "GET_JOBS",
            payload : data,
        });
    }

};
};



