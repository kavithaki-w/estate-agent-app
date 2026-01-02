function PropertyCardSmall({property}){ //take a single property as a prop, which is given to a loop in the SearchPage parent component
    return(
        <div className="small-prop-card">
            <img
                src={property.thumbnail}
                alt={property.name}
                className ="property.image"
            />

            <div className="property-info">
                <h4>{property.name}</h4>
                <strong className="price">£{property.price.toLocaleString()}</strong>
                <p className="type">{property.type}</p>
            </div>
        </div>
    )
}

export default PropertyCardSmall