// import style from './contact/ContactCard.css'
import style from "../service/card/ServiceCard.module.css"

function ContactCard({title,description,Icon}) {
  return (
  <div className={style.box}>
    {Icon ? <Icon/> : "icon not found"}
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
  );
}


export default ContactCard;