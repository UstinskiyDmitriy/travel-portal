import s from './Footer.module.css'
export default function Footer() {
  return (
    <div className={s.footer}>

      <div className={s.wrapper}>
      <p style={{textAlign:'center'}}>All Rights Reserved © Travel Portal</p>
      <div className={s.links}>
     
        <a href="#"><img src="/instagramm.png" alt="" /></a>
        <a href="#"><img src="/youtube.png" alt="" /></a>
        <a href="#"><img src="/twitter.png" alt="" /></a>
      </div>
      </div>
      
    </div>
  )
}
