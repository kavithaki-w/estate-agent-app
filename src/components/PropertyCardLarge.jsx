
function PropertyCardLarge({property,addFavourites}){
    return(
        <div className="large-prop-card">
            {/*<img src={property.thumbnail} alt={property.title}/>*/}

            <div className="property-info">
                <h4>{property.id}</h4>
                {/*<p className="desription">{property.smallDes}</p>*/}
                <strong className="price">£{property.price.toLocaleString()}</strong>
                <p className="type">{property.type}</p>
            </div>
            <button className="heart" onClick={()=>addFavourites(property)}>♥</button> 
            <button className="details">View Details</button> 
        </div>
    )
}

export default PropertyCardLarge