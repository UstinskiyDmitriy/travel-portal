import React, { useEffect } from 'react';
import styles from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginModal,openRegisterModal} from '../../store/store';
import { RootState } from '../../types';


interface LoginProps {
  loginRef?: React.RefObject<HTMLFormElement>;
}

export default function Login({ loginRef }: LoginProps) {
  const dispatch = useDispatch();
  const { isLoginOpen} = useSelector((state:RootState) => state.modal);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (loginRef && !loginRef.current?.contains(event.target as Node)) {
        dispatch(closeLoginModal());
      }
    };

    if (isLoginOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  
  }, [dispatch, isLoginOpen, loginRef]);

  const handleRegisterClick =(e: { preventDefault: () => void; }) => {
    e.preventDefault()
    dispatch(openRegisterModal())
    dispatch(closeLoginModal())
  }

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    console.log('submited')
    dispatch(closeLoginModal())
  } 

  return (
    <div className={styles.overlay}>
      <form  ref={loginRef} className={styles.modal} onSubmit={onSubmit}>
        <button onClick={() => dispatch(closeLoginModal())} className={styles.close_button}>X</button>
        <h2 className={styles.title}>Log in to your account</h2>
        <button className={styles.facebookButton}>
          <img
            aria-hidden="true"
            alt="facebook-icon"
            src="/facebook-login.png"
          />{" "}
          Sign In with Facebook
        </button>
        <button className={styles.googleButton}>
          <img aria-hidden="true" alt="google-icon" src="/google-login.png" />{" "}
          Sign In with Google
        </button>
        <div className={styles.separator_wrapper}>
          {" "}
          <span className={styles.separator}></span>or{" "}
          <span className={styles.separator}></span>
        </div>
        <label htmlFor="email" className={styles.input_label}>Email</label>
        <input type="email" name="email" placeholder="E-mail" className={styles.input} />
        <label htmlFor="password" className={styles.input_label}>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
        />
        <button type='submit' className={styles.submitButton}>Sign In</button>
        <div className={styles.forgotPassword}>
          <a href="#" className={styles.link}>
            Forgot Your Password?
          </a>
        </div>
        <span className={styles.separator}></span>
        <div className={styles.register}>
          Don't have an account?{" "}
          <a href="" className={styles.link} type='submit' onClick={handleRegisterClick}>Register</a>
        </div>
      </form>
    </div>
  );
}