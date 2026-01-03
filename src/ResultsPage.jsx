import {useState} from "react"
import PropertyCardLarge from "./components/PropertyCardLarge.jsx";
import Favourites from "./components/Favourites.jsx";


function ResultsPage({results}){
    const [favourites, setFavourites] = useState([])

    const addFavourites = (property) => {
        if(!favourites.some(fav => fav.id === property.id)){
            setFavourites([...favourites, property])
        }
    }

    const removeFavourites = (property) => {
        setFavourites(favourites.filter(fav => fav.id !== property.id ))
    }

    const clearAll = () => {
        setFavourites([])
    }

    return(
        <div className = "results-page">
            {results.map(property => (
            <PropertyCardLarge key={property.id} property={property} addFavourites={addFavourites}/> ))}
            <Favourites favourites={favourites} removeFavourites={removeFavourites} clearAll = {clearAll}/>
        </div>
    )

    
}

export default ResultsPage