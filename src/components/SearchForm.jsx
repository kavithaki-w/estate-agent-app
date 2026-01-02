import {useState} from "react"
import DatePicker from "react-datepicker"
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";

function SearchForm({onSearch}){

    const [criteria,setCriteria] = useState({ //Holds current values
        type:"",
        minPrice:"",
        maxPrice:"",
        minBeds:"",
        maxBeds:"",
        dateFrom:null,
        dateTo:null,
        postcode:""
    })

    const typeOptions = [ //All options in the type dropdown that can be picked
        {value: '', label:'Any Type'},
        {value: 'flat', label:'Flat'},
        {value: 'house', label:'House'}
    ]

    const bedroomOptions = [ //All options in the bedroom dropdown that can be picked
        {value: '', label:'Any'},
        {value: '1', label:'1'},
        {value: '2', label:'2'},
        {value: '3', label:'3'},
        {value: '4', label:'4'},
        {value: '5',label:'5'}
    ]

    const handleSelectChange = (pickedOption,meta) => {
        setCriteria(prev => ({
            ...prev,
            [meta.name]:pickedOption ? pickedOption.value : '' //set meta.name which is a criteria type, ot the picked option
        }))
    }

    const handleDateChange = (dateAdded, field)=>{
        setCriteria(prev =>  ({
            ...prev,
            [field]: dateAdded ? dateAdded.toISOString().split('T')[0]:''
        }))
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;  // get the input field name and value
        setCriteria(prev => ({
            ...prev,
            [name]: value

        }))
    }

    return (
        <div className="search-form">

            {/*Property Type */}
            <div className= "form-question">
            <label className="form-label">Property Type</label>
            <Select
            name = "type"
            value = {typeOptions.find(opt => opt.value === criteria.type)} //shows what is displayed on the type widget, changes depending on the setCriteria
            options = {typeOptions}
            onChange = {handleSelectChange}
            className = "select-opt"
            placeholder = "Select type..."
            />
            </div>

            <div className="form-question">
                <label className="form-label">Price range (£)</label>
                <div className="price-range">
                {/*Min Price */}
                    <input
                    type = "number"
                    name = "minPrice"
                    value = {criteria.minPrice}
                    onChange = {handleInputChange}
                    className = "price-inp"
                    placeholder = "No Min"
                    />

                {/*Max Price */}
                    <input
                    type = "number"
                    name = "maxPrice"
                    value = {criteria.maxPrice}
                    onChange = {handleInputChange}
                    className = "price-inp"
                    placeholder = "No Max"
                    />
                </div>
            </div>

            <div className="form-question">
                <label className="form-label">No. of Bedrooms</label>
                <div className="bedroom-no">
                {/*Min Bedrooms */}
                    <Select
                    name = "minBeds"
                    value = {bedroomOptions.find(opt => opt.value === criteria.minBeds)} //shows what is displayed on the minbedroom widget, changes depending on the setCriteria
                    options = {bedroomOptions}
                    onChange = {handleSelectChange}
                    className = "bedroom-inp"
                    placeholder = "No Min"
                    />
                    
                {/*Max Bedrooms */}
                    <Select
                    name = "maxBeds"
                    value = {bedroomOptions.find(opt => opt.value === criteria.maxBeds)} //shows what is displayed on the max bedrooms widget, changes depending on the setCriteria
                    options = {bedroomOptions}
                    onChange = {handleSelectChange}
                    className = "bedroom-inp"
                    placeholder = "No Max"
                    />
                </div>
            </div>

            {/*Postcode */}
            <div className="form-question">
                <label className="form-label">Postcode area</label>
                    <input
                    type = "text"
                    name = "postcode"
                    value = {criteria.postcode}
                    onChange = {handleInputChange}
                    className = "postcode-inp"
                    placeholder = "e.g. BR1, NW1"
                    />
            </div>

            {/*Date*/}
            <div className="form-question">
                <label className="form-label">Date Added</label>
                <div className="date-range">
                {/*Date added From */}
                    <DatePicker
                    selected={criteria.dateFrom ? new Date(criteria.dateFrom) : null}
                    onChange = {(date) => handleDateChange(date,"dateFrom")}
                    dateFormat = "dd/MM/yyyy"
                    className = "date-inp"
                    placeholderText = "From"
                    isClearable = {true}
                    />
                    
                {/*Date added To */}
                    <DatePicker
                    selected = {criteria.dateTo ? new Date(criteria.dateTo) : null}
                    onChange = {(date) => handleDateChange(date,"dateTo")}
                    dateFormat = "dd/MM/yyyy"
                    className = "date-inp"
                    placeholderText = "To"
                    isClearable = {true}
                    />
                </div>
            </div>

            <button onClick={() => onSearch(criteria)} className="search-button">Search Property</button>
        </div>
    )
}

export default SearchForm