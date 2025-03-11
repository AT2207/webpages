
import Style from "../Header/Section.module.css";

const SectionHeader = (props) => {
    const {title,description} =props;
  return (
    <div style={{textAlign:"center"}}>
        <h2>{title ? title : "title"}</h2>
        <div className={Style.line}></div>
        <p>{description}</p>
        </div>
  )
}

export default SectionHeader