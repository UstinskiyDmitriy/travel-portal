import React from 'react'
import s from './BurgerMenu.module.css'
interface Props {
  popupRef: React.LegacyRef<HTMLDivElement> 
  handleClose: React.MouseEventHandler<HTMLButtonElement> 
  scrollToSection: (elementId: string, position:ScrollLogicalPosition) => void
}

export default function BurgerMenu(props : Props) {
  return (
    
      <div ref={props.popupRef} className={s.popup}>
          <button onClick={props.handleClose}>X</button>
          <ul>
            <li><a href="#">How It Works</a></li>
            <li><a onClick={()=> props.scrollToSection('steps', 'start')}>Plan Your Trip</a></li>
            <li><a onClick={()=> props.scrollToSection('destinations', 'start')}>Destinations</a></li>
            <li><a onClick={()=> props.scrollToSection('stories','start')}>Travel Stories</a></li>
          </ul>
          
        </div>
    
  )
}
