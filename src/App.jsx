import SearchPage from "./SearchPage"
import ResultsPage from "./ResultsPage"
import data from "./properties.json"
import {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyDetailPage from "./PropertyDetailPage";


function App() {
  const [results, setResults] = useState(data.properties);
  console.log("RESULTS IN APP:", results);


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element = {<SearchPage setResults={setResults}/>}/>

        <Route path="/results" element = {<ResultsPage results = {results}/>}/>
        
        <Route path="/property/:id" element = {<PropertyDetailPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App