import React from 'react'
import s from './BurgerMenu.module.css'

interface Props {
  popupRef: React.LegacyRef<HTMLDivElement> 
  handleClose: React.MouseEventHandler<HTMLButtonElement> 
}

export default function BurgerMenu(props : Props) {
  return (
    
      <div ref={props.popupRef} className={s.popup}>
          <button onClick={props.handleClose}>X</button>
          <ul>
            <li>How It Works</li>
            <li>Plan Your Trip</li>
            <li>Destinations</li>
            <li>Travel Stories</li>
          </ul>
        </div>
    
  )
}
