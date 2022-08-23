
// export const useActions = (state, dispatch) => ({
//   authAction: data => {
//     dispatch({ type: 'LOGIN', payload: 'asdadssffsdfsadf4sd6f4s65f4s6dfs4dfds546' })
//   },
//   customAction: () => {
//     dispatch({ type: 'IYI', payload: 'Eartugrul Gazi' })
//   }
// });



export const authAction = (state, dispatch) => ({
  login: data => {
    dispatch({ type: 'LOGIN', payload: 'asdadssffsdfsadf4sd6f4s65f4s6dfs4dfds546' })
  },
  logout: () => {
    dispatch({ type: 'LOGOUT', payload: '' })
  }
})