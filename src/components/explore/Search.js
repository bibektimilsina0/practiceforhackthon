import { useState } from "react";
import axios from 'axios'
function Search(){

    const [searchItem, setSearchItem] = useState('');
    const [results, setResults] = useState([]);
  
    const handleChange = (e) => {
      e.preventDefault();
      setSearchItem(e.target.value);
    }
  
    const handleSearch = (e) => {
      e.preventDefault();
  
      const requestBody = {
        searchplace: searchItem
      }
  
      axios.post('http://192.168.10.62/php/TourismCulture/display/searchplace.php', requestBody)
        .then(response => {
          console.log(response.data);
          setResults(response.data)
        })
        .catch(error => {
          // Handle any errors
          console.error("Error:", error);
        });
      setSearchItem('');
    };
  
    return(
        <div className=" z-0 absolute inset-0 flex items-start mt-16 justify-end mr-8 ">

        <input
          type="text"
          placeholder="Search places"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
          value={searchItem}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.place_name}</li>
          ))}
        </ul>
      </div>
    )
}
export default Search