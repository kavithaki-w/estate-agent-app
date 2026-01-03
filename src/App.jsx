import SearchPage from "./SearchPage"
import ResultsPage from "./ResultsPage"
import data from "./properties.json"
import {useState} from "react"


function App() {
  const [results, setResults] = useState(data.properties);
  console.log("RESULTS IN APP:", results);


  return (
    <>
    <SearchPage setResults={setResults}/>
    <ResultsPage results = {results}/>
    
    </>
  );
}

export default App