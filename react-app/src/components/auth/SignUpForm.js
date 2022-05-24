import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  // const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  // const updateUsername = (e) => {
  //   setUsername(e.target.value);
  // };

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const updateLastName = (e) => {
    setLastName(e.target.value)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <section className='signup-container'>
      <form onSubmit={onSignUp} className='signup-form'>
        <div className='form-contents'>
          <p className='signup-heading'>Create your Account</p>
          <p className='signup-subheading'>to continue to YuhTube</p>
          <div className='error-handling-signup'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          {/* <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div> */}
          <div className='main'>
            <div className='row-1'>
            <div className='form-field-container first-name-field'>
              <input
                className='form-field'
                placeholder='First name'
                type='text'
                name='first_name'
                onChange={updateFirstName}
                value={firstName}
              ></input>
            </div>
            <div className='form-field-container'>
              <input
                className='form-field'
                placeholder='Last name'
                type='text'
                name='last_name'
                onChange={updateLastName}
                value={lastName}
              ></input>
            </div>
            </div>
            <div className='row-2'>
            <div className='form-field-container'>
              <input
                className='form-field'
                placeholder='Your email address'
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            </div>
            <div className='row-3'>
            <div className='form-field-container password-field'>
              <input
                className='form-field'
                placeholder='Password'
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div className='form-field-container password-field'>
              <input
                className='form-field'
                placeholder='Confirm'
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
              ></input>
            </div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18 login-password-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
            </div>
            <p className='password-instruction'>Use 6 or more characters with a mix of letters, numbers & symbols</p>
            <div className='signup-btns'>
            <NavLink to='/login' className='login-link'>Sign in instead</NavLink>
            <button className='next' type='submit'>Create</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
