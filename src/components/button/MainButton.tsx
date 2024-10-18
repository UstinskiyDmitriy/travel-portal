import s from './MainButton.module.css'

interface Button {
  title: string;
  size: string
  url ?: string
  onClick?: () => void
}

export default function MainButton({title, size, url, onClick}:Button) {
  return (
    <button className={s.main_button} style={{fontSize:`${size}px`}} onClick={onClick}>
      
      {url ? (
        <img src={url} alt="" />
      ) : null}
      <p className={s.button_title}>{title}</p>
    </button>
  )
}
