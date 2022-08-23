import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassowrd: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = ({target}) => {
    const { name, value } = target;

    let key;
    if(name === 'confirmPassowrd') key = validate({confirmPassowrd: value, password: values.password })
    else key = validate({[name]: value })

    setErrors({...errors, [name]: key[name]})
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    let key = validate(values)
    setErrors(key)
    setIsSubmitting(true);
  }

  useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },[errors, callback, isSubmitting]
  )

  return { handleChange, handleSubmit, values, errors };
}

export default useForm;
