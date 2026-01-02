import PropertyCardSmall from "./components/PropertyCardSmall"
import NavBar from "./components/NavBar.jsx"
import data from "./properties.json"

function App() {
  return (
    <div>
      <NavBar/>
      {data.properties.map((property) => (
        <PropertyCardSmall
          key={property.id}
          property={property}
        />
      ))}
    </div>
  )
}

export default App;
