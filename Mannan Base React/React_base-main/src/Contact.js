import React, { useState, useMemo } from 'react'

const Contact = ({stores}) => {
    const { actions, states } = stores
    
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)
    const [key, setKey] = useState('a')

    const multiCount = useMemo(() => {
        console.log('multiCount')
        return count * 5
    },[count])

    let obj = {a: '1', b:'2', c:'3', d: '4'}
    const { [key]: e, ...rest } = obj
    return (
        <div>
            <p>token = {states.auth.token} 🤔 { JSON.stringify(rest)} {process.env.REACT_APP_ENV}</p>
            <button onClick={() => setKey( key === 'a' ? 'b' : 'a' )}>Change Object</button>
            <p>name = {states.custom.customer_name}</p>
            <button onClick={() => actions.authActions.login(1)}>Change token 🍾</button><br />
            <button onClick={() => actions.customActions.custom(2)}>Change IYI => Eartugrul Gazi 😜</button><br />
            <button onClick={() => actions.authActions.logout()}>Logout ✈</button>

            <div>
                <p style={{textAlign: 'center'}}>Count: {count}</p>
                <p style={{textAlign: 'center'}}>Item: {item} 🤓</p>
                <p style={{textAlign: 'center'}}>Multi Count: {multiCount} 😮</p>
                <p style={{textAlign: 'center'}}>
                    <button onClick={() => setCount(count+1)}>Update Count</button>
                    <button onClick={() => setItem(item*10)}>Update Item</button>
                </p>
            </div>
        </div>
    )
}

export default Contact