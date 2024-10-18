
import MainButton from '../button/MainButton'
import s from './WelcomePage.module.css'
import { useMediaQuery } from 'react-responsive'



export default function WelcomePage() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (

    <div className={s.main}>
      
      {isDesktop && <div className={s.description}>
      <h1>Explore the beauty of the World</h1>
      <p>Recive personalized recommendations for countries, hotels, activities and more</p>
      <div className={s.accent}>
        <p>What would you like to do?</p>
        <MainButton title='Start Planing' size='24'/>
      </div>
      </div>}
     {isTabletOrMobile && 
     <div className={s.description}>
      <div className={s.accent}>
        <p>What would you like to do?</p>
        <MainButton title='Start Planing' size='24'/>
      </div>
      </div>}
    </div>
  )
}
