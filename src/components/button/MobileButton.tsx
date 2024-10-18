import React, { useState, useEffect, useRef, MouseEventHandler } from 'react';
import s from './MobileButton.module.css';
import BurgerMenu from '../burger-menu/BurgerMenu';

export default function MobileButton() {
  const [isOpen, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  
  const handleOpen:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    setOpen(!isOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      event.stopPropagation()
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
  
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <button className={`${s.mobile_button} ${isOpen ? s.open : ''}`} onClick={handleOpen}>
        <img src="/mobile-button.png" alt="Mobile Button" />
      </button>
      {isOpen && (
        <div ref={popupRef} className={s.popup}>
          <BurgerMenu handleClose={handleClose} popupRef={popupRef}/>
        </div>
      )}
    </div>
  );
}