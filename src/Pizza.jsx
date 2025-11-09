const Pizza = (props) => {
    return (
        <div className="pizza">
            <img src={props.image} alt={props.name} />
            <div className="pizza-content">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Pizza;