import React, { useEffect, useState } from 'react'
import UserForm from './Form/UserForm'

const Edit = props => {
  const defaultForm = {
    username: '',
    email: '',
    phone: '',
    website: ''
  }
  const { setDetail, setUserDetail } = props.stores.actions.userAction
  // const { userDetail } = props.stores.states.userReducer

  const [loaded, setLoaded] = useState(false)
  const [form, setForm] = useState(defaultForm)

  const handleSubmit = () => {
    setUserDetail(form)
  }

  useEffect(() => {
    if(!loaded) {
      setDetail(atob(props.match.params.id)).then(res => {
        setForm({...form,
          username: res.username,
          email: res.email,
          phone: res.phone,
          website: res.website
        })
      })
      setLoaded(true)
    }
  }, [loaded, props.match.params.id, setDetail, form])

  return (
    <div className="mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Edit User
            </div>
            <div className="card-body">
              <UserForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit