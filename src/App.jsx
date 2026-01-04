import SearchPage from "./SearchPage"
import ResultsPage from "./ResultsPage"
import data from "./properties.json"
import {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyDetailPage from "./PropertyDetailPage";


function App() {
  const [results, setResults] = useState(data.properties);
  const [favourites, setFavourites] = useState([]);
  console.log(favourites)


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element = {<SearchPage setResults={setResults} favourites={favourites}/>}/>

        <Route path="/results" element = {<ResultsPage results = {results} favourites={favourites} setFavourites={setFavourites}/>}/>
        
        <Route path="/property/:id" element = {<PropertyDetailPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App