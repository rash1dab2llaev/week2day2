import Style from './card.module.css'


function UslugCard(props) {
    return (
        <div className={Style.uslug_items} >
            <img src={props.icon} alt="" />
            <h4 className={Style.title} >{props.title}</h4>
        </div>
    )
}

export default UslugCard