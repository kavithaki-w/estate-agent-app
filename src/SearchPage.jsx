import PropertyCardSmall from "./components/PropertyCardSmall"
import NavBar from "./components/NavBar.jsx"
import SearchForm from "./components/SearchForm"
import { useNavigate } from "react-router-dom"
import data from "./properties.json"
import "./SearchPage.css";
import {useState} from "react"



function SearchPage({setResults, favourites}){
  const [activeTab, setActiveTab] = useState("properties");
  const navigate = useNavigate()

  const displayedProperties =
  activeTab === "properties"
    ? data.properties.slice(0, 6)
    : favourites;


  const handleSearch = (criteria) =>{
    let filteredRes = [...data.properties]


    //Filter by type
    if (criteria.type !== ''){
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
      filteredRes = filteredRes.filter(property => property.bedrooms >= Number(criteria.minBeds))
    }
     if (criteria.maxBeds){
      filteredRes = filteredRes.filter(property => property.bedrooms <= Number(criteria.maxBeds))
    }

    //filter by postcode
    if(criteria.postcode){
      filteredRes = filteredRes.filter(property => 
          property.location.toLowerCase().includes(criteria.postcode.toLowerCase())
   )};

   //filter by date range
    const monthNames = {
        "January": 0, "February": 1, "March": 2, "April": 3,
        "May": 4, "June": 5, "July": 6, "August": 7,
        "September": 8, "October": 9, "November": 10, "December": 11
    };
    
    if(criteria.dateFrom){
    const fromDate = new Date(criteria.dateFrom)
    filteredRes = filteredRes.filter(property =>{
      const addedMonth = monthNames[property.added.month]; // convert string month to number
      const addedDate = new Date(property.added.year, addedMonth, property.added.day);
      return addedDate >= fromDate;
    })
}

    if(criteria.dateTo){
    const toDate = new Date(criteria.dateTo)
    filteredRes = filteredRes.filter(property =>{
      const addedMonth = monthNames[property.added.month];
      const addedDate = new Date(property.added.year, addedMonth, property.added.day);
      return addedDate <= toDate;
    })
}

   setResults(filteredRes)

   navigate("/results")
  }

  return (
    <div>
      <NavBar/>

      {/* Hero Sectiom */}
      <section className="hero">
        <div className = "hero-overlay">
          <div className = "hero-content">
            <h1>Your Reliable Ally in <br/> Worldwide Real Estate</h1>

            <SearchForm onSearch={handleSearch}/>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="tabs">
        <button style={{fontSize:"16px", fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}} className={activeTab === "properties" ? "active" : ""}
          onClick={() => setActiveTab("properties")}>Properties</button>
        <button style={{fontSize:"16px", fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}  className={activeTab === "favourites" ? "active" : ""}
          onClick={() => setActiveTab("favourites")}>Favourites</button>
      </div>


      <div className="properties-grid">
      {displayedProperties.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        displayedProperties.map(property => (
          <PropertyCardSmall
            key={property.id}
            property={property}
          />
        ))
      )}
      </div>
    </div>
  )
}

export default SearchPage