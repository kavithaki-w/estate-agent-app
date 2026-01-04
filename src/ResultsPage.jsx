import { useNavigate } from "react-router-dom";
import PropertyCardLarge from "./components/PropertyCardLarge.jsx";
import Favourites from "./components/Favourites.jsx";
import NavBar from "./components/NavBar.jsx"
import "./ResultsPage.css";


function ResultsPage({results,favourites,addFavourites,removeFavourites,clearAll}){
    const navigate = useNavigate();

    const allowDrop = (e) => e.preventDefault();

    const handleDropOutside = (e) => {
    e.preventDefault();
    const propertyId = e.dataTransfer.getData("fav-property");

    if (propertyId) {
        removeFavourites({ id: propertyId });
    }
    };

    return(

        <div className = "results-page" onDragOver={allowDrop} onDrop={handleDropOutside}>
            <NavBar/>

            <button 
                className="back-to-search"
                onClick={() => navigate('/')}
            >
                ← Back to Search
            </button>

            <div className="results-header">
                <h2>Search Results</h2>
                <p className="results-count">
                    {results.length} {results.length === 1 ? 'property' : 'properties'} found
                </p>
            </div>

            <div className="results-content">
                {/* Properties List */}
                <div className="properties-list">
                    {results.length > 0 ? (
                        results.map(property => (
                            <PropertyCardLarge 
                                key={property.id} 
                                property={property} 
                                addFavourites={addFavourites}
                            />
                        ))
                    ) : (
                        <div className="no-results">
                            <h3>No properties found</h3>
                        </div>
                    )}
                </div>

                {/* Favourites Sidebar */}
                <div className="favourites-sidebar">
                    <Favourites 
                        favourites={favourites} 
                        removeFavourites={removeFavourites} 
                        clearAll={clearAll}
                        addFavourites={addFavourites}
                    />
                </div>
            </div>
        </div>
    )

    
}

export default ResultsPage