import s from './Steps.module.css'
export default function Steps() {
  return (
    <div className={s.main}>
      <div className={s.card_wrapper}>

        <div>
         <img src="/step1.png" alt="" />
         <p>Tell us what you want to do</p> 
        </div>

        <div>
         <img src="/step2.png" alt="" />
         <p>Share us preferable dates </p> 
        </div>

        <div>
         <img src="step3.png" alt="" />
         <p>We will give you recommendations</p> 
        </div>

      </div>
    </div>
  )
}
