import React from 'react'
import { useHistory } from 'react-router-dom'

const Test = () => {
    const history = useHistory()

    return (
        <div>
            test
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default Test