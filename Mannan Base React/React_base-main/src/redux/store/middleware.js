export const applyMiddleware = (dispatch) => async (action) => {
    dispatch({
      type: action.type,
      payload: action.payload
    });
}
