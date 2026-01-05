import SearchPage from "./SearchPage"
import ResultsPage from "./ResultsPage"
import data from "./properties.json"
import {useState} from "react"
import { HashRouter, Routes, Route } from "react-router-dom";
import PropertyDetailPage from "./PropertyDetailPage";


function App() {
  const [results, setResults] = useState(data.properties);
  const [favourites, setFavourites] = useState([]);
  
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


  return (
    <HashRouter>
      <Routes>

        <Route path="/" element = {<SearchPage setResults={setResults} favourites={favourites}/>}/>

        <Route path="/results" element = {<ResultsPage results = {results} favourites={favourites} addFavourites={addFavourites} removeFavourites={removeFavourites} clearAll={clearAll}/>}/>
        
        <Route path="/property/:id" element = {<PropertyDetailPage addFavourites={addFavourites}/>} />
      </Routes>
    </HashRouter>
  );
}

export default App