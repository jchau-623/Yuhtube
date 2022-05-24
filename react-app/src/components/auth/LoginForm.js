import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { login, validateEmail } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const history = useHistory()
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

  const demoLogin = async (e) => {
    e.preventDefault();
    let email = 'jchau623@gmail.com'
    let password = 'password'
    await dispatch(login(email, password))
    history.push("/");
  }

  const handleClickNext = async (e) => {
    e.preventDefault();
    const data = await dispatch(validateEmail(email));
    /* problem: even if the email is incorrect,
    what we want: if the email is correct, move to the next field. if not, display error
    */
    if (data === email) { // if data is true
      console.log(data)
      // TODO FIX ERROR HANDLING
      setIsDisplayedEmailField(false);
    } else {
      setErrors(data);
    }
  };

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
            <div className='error-handling-login'>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            {isDisplayedEmailField ?
              (
                <div className='login-wrapper'>
                  <span className='login-forgot'>Forgot email?</span>
                  <span className='guestmode-message'>Not your computer? Use Guest mode to sign in privately.</span>
                  <span className='login-learn-more'>Learn more</span>
                  <div className='login-next-btns'>
                    <NavLink to='/sign-up' className='signup-link'>Create account</NavLink>
                    <div className='login-btns'>
                      <button className='login-next' type='submit'>Next</button>
                      <button className='login-next' onClick={demoLogin}>Demo User</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='login-wrapper'>
                  <span className='login-forgot'>Forgot Password?</span>
                  <div className='login-btns'>
                    <button className='login-next' type='submit'>Next</button>
                  </div>
                </div>
              )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
