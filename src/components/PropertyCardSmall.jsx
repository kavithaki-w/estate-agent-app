import "./PropertyCardSmall.css"

function PropertyCardSmall({property}){ //take a single property as a prop, which is given to a loop in the SearchPage parent component
    return(
        <div className="small-prop-card">
            <div className="property-img">
            <img src={property.thumbnail} alt={property.name}/>
            </div>
            <div className="property-info">
                <p className="location">{property.location}</p>
                <h4>{property.name}</h4>
                <strong className="price">£{property.price.toLocaleString()}</strong>
                <p className="type">{property.type}</p>
            </div>
        </div>
    )
}

export default PropertyCardSmall