import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';

const UserForm = ({ form, setForm, handleSubmit }) => {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState(false)

  const submitForm = () => {
    if (simpleValidator.current.allValid()) {
      handleSubmit()
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(2);
    }
  }

  const handleChange = ({target}) => {
    setForm({...form, [target.name]: target.value })
    forceUpdate(1);
  }

  return (
    <div>
      <div className="form-group">
        <label>User Name</label>
        <input
          type="text"
          className="form-control" 
          placeholder="Username" 
          onChange={handleChange} 
          value={form.username} 
          name="username"
          onKeyUp={() => simpleValidator.current.showMessageFor('username')}
        />
        <span className="error">
          {simpleValidator.current.message('username', form.username, 'required|alpha_space', { 
            messages: { 
              required: 'The username field is required.',
              alpha_space: 'The username may only contain letters and spaces.' 
            }
          })}
        </span>
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input 
          type="email" 
          className="form-control" 
          placeholder="Enter email" 
          onChange={handleChange} 
          value={form.email} 
          name="email"
          onKeyUp={() => simpleValidator.current.showMessageFor('email')}
        />
        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        <span className="error">
          {simpleValidator.current.message('email', form.email, 'required|email', { 
            messages: { 
              required: 'The email field is required.',
              email: 'The email must be a valid email address.' 
            }
          })}
        </span>
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Phone" 
          onChange={handleChange} 
          value={form.phone} 
          name="phone"
          onKeyUp={() => simpleValidator.current.showMessageFor('phone')} 
        />
        <span className="error">
          {simpleValidator.current.message('phone', form.phone, 'required', { 
            messages: { 
              required: 'The phone field is required.',
            }
          })}
        </span>
      </div>
      <div className="form-group">
        <label>Website</label>
        <input 
          type="text"
          className="form-control"
          placeholder="Website"
          onChange={handleChange}
          value={form.website}
          name="website"
          onKeyUp={() => simpleValidator.current.showMessageFor('website')}
        />
        <span className="error">
          {simpleValidator.current.message('website', form.website, 'required|url', {
            messages: { 
              required: 'The website field is required.'
            }
          })}
        </span>
      </div>
      <button onClick={submitForm} type="submit" className="btn btn-primary">Submit</button>
    </div>
  )
}

export default UserForm