
import s from './TravelStories.module.css'
import { stories } from '../../data/stories'
import Footer from '../footer/Footer'


export default function TravelStories() {
  return (
    <div className={s.main}>
{stories.map((item, index) => 
    <div className={s.stories_wrapper} key={index}>
    <img src={item.img} alt={item.title} />
    <div className={s.description}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <a href="">Learn more</a>
    </div>
  </div>
)}
     <Footer />
    </div>
  )
}
