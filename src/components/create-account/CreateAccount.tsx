
import React, { useEffect } from 'react';
import styles from './CreateAccount.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeRegisterModal, openLoginModal, RootState } from '../../store/store';

interface CreateAccountProps {
  registerRef?: React.RefObject<HTMLFormElement>;
}

export default function CreateAccount({ registerRef }: CreateAccountProps) {
  const dispatch = useDispatch();
  const { isRegisterOpen} = useSelector((state:RootState) => state.modal);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (registerRef && !registerRef.current?.contains(event.target as Node)) {
        dispatch(closeRegisterModal());
      }
    };

    if (isRegisterOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  
  }, [dispatch, isRegisterOpen, registerRef]);

  const handleLogInClick =(e: {preventDefault: () => void}) => {
    e.preventDefault()
    dispatch(closeRegisterModal())
    dispatch(openLoginModal())
  }

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    console.log('submited')
    dispatch(closeRegisterModal())
  } 

  return (
    <div className={styles.overlay}>
      <form ref={registerRef} className={styles.modal} onSubmit={onSubmit}>
        <button className={styles.close_button} onClick={() => dispatch(closeRegisterModal())}>X</button>
        <h2 className={styles.title}>Create Account</h2>
        
        <label htmlFor="email" className={styles.input_label}>Email</label>
        <input type="email" name="email" placeholder="E-mail" className={styles.input} />
        <label htmlFor="password" className={styles.input_label}>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
        />
        <button className={styles.submitButton}>Sign Up</button>
        <span className={styles.separator}></span>
        <div className={styles.register}>
          Already have an account?{" "}
          <a className={styles.link} onClick={handleLogInClick}>Log in</a>
        </div>
      </form>
    </div>
  );
}