import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login, validateEmail } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisplayedEmailField, setIsDisplayedEmailField] = useState(true)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const handleClickNext = async (e) => {
    e.preventDefault()
    const data = await dispatch(validateEmail(email))
    // console.log('--------------', data)
    if (data) {
      setErrors(data)
      setIsDisplayedEmailField(false)
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }


  return (
    <section className='login-container'>
      <div className='login-border'>
        <span className='login-logo'>YuhTube</span>
        <div className='login-heading'>Sign in</div>
        <div className='login-subheading'>to continue to YuhTube</div>
        <form onSubmit={isDisplayedEmailField ? handleClickNext : onLogin} className='login-form'>
          <div className='login-wrapper'>
            <div>
              {isDisplayedEmailField ?
                (
                  <input
                    className='login-input'
                    name='email'
                    type='text'
                    placeholder='Email or Phone'
                    value={email}
                    onChange={updateEmail}
                  />
                ) :
                (
                  <div>
                    <input
                      className='login-input'
                      name='password'
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={updatePassword}
                    />
                  </div>
                )}
            </div>
            {/* <div className='auth-errs'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div> */}
            {isDisplayedEmailField ?
              (
                <div className='login-wrapper'>
                  <span className='login-forgot-email'>Forgot email?</span>
                  <span className='guestmode-message'>Not your computer? Use Guest mode to sign in privately.</span>
                  <span className='login-learn-more'>Learn more</span>
                  <div className='login-next-btns'>
                    <NavLink to='/sign-up' className='signup-link'>Create account</NavLink>
                    <button className='login-next' type='submit'>Next</button>
                  </div>
                </div>
              ) : (
                <div className='login-wrapper'>
                  <span className='login-forgot-email'>Forgot Password?</span>
                  <button className='login-next' type='submit'>Next</button>
                </div>
              )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
