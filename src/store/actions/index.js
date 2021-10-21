export const addToFav = (company) => ({
    type: 'ADD_TO_FAV',
    payload: company
})

export const removeFromFav = (company) => ({
    type: 'REMOVE_FROM_FAV',
    payload: company
})
export const getjob = (query,url) => {
return async (dispatch, getState) => {
  
try {
    let res = await fetch (query)
    if(res.ok){
    const data = await Response.json()
        dispatch({
            type : "ADD_FAV",
            payload : data,
        });
    } else {
        console.log("its error");
    }
}


};



