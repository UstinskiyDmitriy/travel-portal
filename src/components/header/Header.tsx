import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Header.module.css';
import MainButton from '../button/MainButton';
import { useMediaQuery } from 'react-responsive';
import MobileButton from '../button/MobileButton';
import Login from '../login-popup/Login';
import { openLoginModal, closeLoginModal,} from '../../store/store';
import { RootState } from '../../types';
import CreateAccount from '../create-account/CreateAccount';

export default function Header() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const dispatch = useDispatch();
  const { isLoginOpen, isRegisterOpen} = useSelector((state:RootState) => state.modal);
  const registerRef = React.createRef<HTMLFormElement>()
  const toggleLoginModal = () => {
    if (isLoginOpen) {
      dispatch(closeLoginModal());
    } else {
      dispatch(openLoginModal());
    }
  };

  return (
    <div className={s.main}>
      <div className={s.logo}>
        <img src="/logo.svg" alt="" />
        {isDesktop && <p>Travel Portal</p>}
      </div>
      
      {isDesktop && (
        <div className={s.list_wrapper}>
          <ul>
            <li>How It Works</li>
            <li>Plan Your Trip</li>
            <li>Destinations</li>
            <li>Travel Stories</li>
          </ul>
        </div>
      )}
      
      {isDesktop && (
        <div>
          <MainButton title='Login' size='16' onClick={toggleLoginModal} />
          {isLoginOpen && (
            <div>
              <Login loginRef={React.createRef()} />
            </div>
          )}
          {isRegisterOpen && (
          <div>
            <CreateAccount registerRef={registerRef}/>
          </div>
        )}
        </div>
      )}
      {isTabletOrMobile && (
        <div>
          <div className={s.mobile_header}>
            <MainButton title='Login' size='16' onClick={toggleLoginModal} />
            <MobileButton />
          </div>
          
          {isLoginOpen && (
            <div>
              <Login loginRef={React.createRef()} />
            </div>
          )}
          {isRegisterOpen && (
          <div>
            <CreateAccount registerRef={registerRef}/>
          </div>
        )}
        </div>
      )}
       
    </div>
    
  );
}