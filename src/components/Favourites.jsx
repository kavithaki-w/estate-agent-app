import "./Favourites.css";


function Favourites({favourites,removeFavourites,clearAll,addFavourites}){
    
    const handleDrop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("property")
    if (!data) return

    const property = JSON.parse(data);
    addFavourites(property);
    }

    const allowDrop = (e) => e.preventDefault();
    
    return (
        <div className="favourite-box" onDragOver={allowDrop} onDrop={handleDrop}>
            <h3>Favourites</h3>

            {favourites.length ===0 && <p>No Favourites Yet</p> } {/*Rendering a message if favourites is empty */}

            <ul className="favourite-list">
            {favourites.map((property) => (
                <li key={property.id} className="favourite-item" draggable="true"onDragStart={(e) =>e.dataTransfer.setData("fav-property", property.id)}> 

                <img src = {property.thumbnail} alt = "{property.name}"/>
                <div className = "property-info">
                    <strong>{property.name}</strong>
                    <p>£{property.price}</p>
                </div>
                <button className = "remove-button" onClick={() => removeFavourites(property)}>X</button>
                </li>
            ))}
            </ul>
            <button className="clear-all" onClick = {clearAll}>Clear All</button>
                
        </div>
    )
}

export default Favourites