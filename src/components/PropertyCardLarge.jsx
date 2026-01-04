import { useNavigate } from "react-router-dom";
import "./PropertyCardLarge.css";

function PropertyCardLarge({property,addFavourites}){
    const navigate = useNavigate()

    const handleDragStart = (e) => {
        e.dataTransfer.setData("property", JSON.stringify(property));
    };

    return(
        <div className="large-prop-card" draggable="true" onDragStart={handleDragStart}>

            <div className="card-img">
            <img src={property.thumbnail} alt={property.name}/>
            </div>
            <div className="property-info">
                <h4>{property.name}</h4>
                <p className="location">{property.location}</p>

                <div className="property-details">
                    <span>🛏️ {property.bedrooms} Bedroom{property.bedrooms > 1 ? 's' : ''}</span>
                    <span>•</span>
                    <span>{property.tenure}</span>
                     <span>•</span>
                    <span>{property.type}</span>

                </div>

                <p className="description">{property.description}</p>
                <strong className="price">£{property.price.toLocaleString()}</strong>
            </div>

            <div className="card-actions">
            <button className="heart" onClick={()=>addFavourites(property)}>♥</button> 
            <button className="details" onClick={() => navigate(`/property/${property.id}`)}>View Details</button> 
            </div>
        </div>
    )
}

export default PropertyCardLarge