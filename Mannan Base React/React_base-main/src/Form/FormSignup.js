import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form className='form' noValidate autoComplete="off">
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
          autoComplete="off"
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
          autoComplete="off"
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
          autoComplete="off"
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
          autoComplete="off"
            className='form-input'
            type='password'
            name='confirmPassowrd'
            placeholder='Confirm your password'
            value={values.confirmPassowrd}
            onChange={handleChange}
          />
          {errors.confirmPassowrd && <p>{errors.confirmPassowrd}</p>}
        </div>
        <button className='form-input-btn' type='button' onClick={handleSubmit}>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login 
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
