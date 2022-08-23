import React, { useContext } from 'react'

import { store } from './redux/store'

const Login = () => {
    const { actions } = useContext(store)

    return (
        <div>
            login
            <button onClick={actions.authActions.login}>Login</button>
        </div>
    )
}

export default Login