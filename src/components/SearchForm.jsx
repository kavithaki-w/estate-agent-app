function SearchForm({filters,setFilters, onSearch}){

    const typeOptions = [
        {value: '', label:'Any Type'},
        {value: 'flat', label:'Flat'},
        {value: 'house', label:'House'}
    ]

    const bedroomOptions = [
        {value: '', label:'Any'},
        {value: '1', label:'1'},
        {value: '2', label:'2'},
        {value: '3', label:'3'},
        {value: '4', label:'4'},
        {value: '5',label:'5'}
    ]

    return (
        <div className="search-form">
            <h2>Search Properties</h2>

        </div>
    )
}