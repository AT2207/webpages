
import Style from "./ServiceCard.module.css"



function ServiceCard({title,description,Icon}) {
  return (
  <div className={Style.box}>
    {Icon ? <Icon/> : "icon not found"}
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
  );
}

export default ServiceCard;