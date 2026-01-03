import PropertyCardSmall from "./components/PropertyCardSmall"
import NavBar from "./components/NavBar.jsx"
import data from "./properties.json"
import SearchForm from "./components/SearchForm"
import { useState } from "react";

function App() {
  const [results, setResults] = useState(data.properties);

  const handleSearch = (criteria) =>{
    let filteredRes = [...data.properties]


    //Filter by type
    if (criteria.type !== "any"){
      filteredRes = filteredRes.filter(property => property.type === criteria.type)
    }

    //Filter by price range (filtering the already filtered results)
    if (criteria.minPrice){
      filteredRes = filteredRes.filter(property => property.price >= Number(criteria.minPrice))
    }

    if (criteria.maxPrice){
      filteredRes = filteredRes.filter(property => property.price <= Number(criteria.maxPrice))
    }

    //Filter by bedrooms
    if (criteria.minBeds){
      filteredRes = filteredRes.filter(property => property.bedrooms >= criteria.minBeds)
    }
     if (criteria.maxBeds){
      filteredRes = filteredRes.filter(property => property.bedrooms <= criteria.maxBeds)
    }

    //filter by postcode
    if(criteria.postcode){
      filteredRes = filteredRes.filter(property => {
          property.location.toLowerCase().includes(criteria.postcode.toLowerCase())
        }
   )};

   //filter by date range
   if(criteria.dateFrom){
    const fromDate = new Date(criteria.dateFrom) //Convert the date string to a Date object
    filteredRes = filteredRes.filter(property =>{
      const addedDate = new Date(property.added.year, property.added.month-1, property.added.day)
      return addedDate <= fromDate //Comparing property date object and criteria date object
    })
   }

   if(criteria.dateTo){
    const ToDate = new Date(criteria.dateTo) //Convert the date string to a Date object
    filteredRes = filteredRes.filter(property =>{
      const addedDate = new Date(property.added.year, property.added.month-1, property.added.day)
      return addedDate <= ToDate //Comparing property date object and criteria date object
    })
   }

   setResults(filtered)
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
