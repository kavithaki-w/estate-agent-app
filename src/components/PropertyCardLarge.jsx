
function PropertyCardLarge({property}){
    return(
        <div className="small-prop-large">
            {/*<img src={property.thumbnail} alt={property.title}/>*/}

            <div className="property-info">
                <h4>{property.id}</h4>
                {/*<p className="desription">{property.smallDes}</p>*/}
                <strong className="price">£{property.price.toLocaleString()}</strong>
                <p className="type">{property.type}</p>
            </div>
            <button className="heart">♥</button> 
        </div>
    )
}

export default PropertyCardLarge