import PropertyCardLarge from "./components/PropertyCardLarge.jsx";
import Favourites from "./components/Favourites.jsx";
import NavBar from "./components/NavBar.jsx"


function ResultsPage({results,favourites,setFavourites}){

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
            <NavBar/>
            {results.map(property => (
            <PropertyCardLarge key={property.id} property={property} addFavourites={addFavourites}/> ))}
            <Favourites favourites={favourites} removeFavourites={removeFavourites} clearAll = {clearAll}/>
        </div>
    )

    
}

export default ResultsPage