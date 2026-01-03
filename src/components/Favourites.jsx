function Favourites({favourites,removeFavourites,clearAll}){
    return (
        <div className="favourite-box">
            <h3>Favourites</h3>

            {favourites.length ===0 && <p>No Favourites Yet</p> } {/*Rendering a message if favourites is empty */}

            <ul className="favourite-list">
            {favourites.map((property) => (
                <li key={property.id} className="favourite-item" draggable="true"> 

                {/*<img src = "{property.icon}" alt = "{property.name}"/> */}
                <div className = "property-info">
                    <strong>{property.name}</strong>
                    <p>{property.price}</p>
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