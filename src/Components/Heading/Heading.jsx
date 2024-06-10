import style from "./Heading.module.scss"

export default function Heading({content, color}) {
  return (
      <h2 className={style.heading} style={{color:color}}>{content}</h2>
  )
}
