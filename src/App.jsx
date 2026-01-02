import PropertyCardSmall from "./components/PropertyCardSmall"
import NavBar from "./components/NavBar.jsx"
import data from "./properties.json"
import SearchForm from "./components/SearchForm"

function App() {

  const handleSearch = (criteria) =>{
    console.log(criteria)
  }

  return (
    <div>
      <NavBar/>
      {data.properties.map((property) => (
        <PropertyCardSmall
          key={property.id}
          property={property}
        />
      ))}
      <SearchForm onSearch={handleSearch}/>
    </div>
  )
}

export default App;
