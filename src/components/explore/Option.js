import React, { useEffect, useState } from 'react'
import axios from 'axios';

const url = 'http://192.168.10.62/php/TourismCulture/uploads';

function Option() {
  const [place, setPlace] = useState([]);
  useEffect(() => {
    fetch('http://192.168.10.62/php/TourismCulture/display/getplace.php')
      .then((responce) => responce.json())
      .then((data) => {
        // console.log(data);
        setPlace(data)
      })
  }, [])
  const [searchplace, setSearchplace] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchplace(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();

    const requestBody = {
      search: searchplace
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
    setSearchplace('');
  };




  return (
    <div className='px-2'>
      <div className="absolute inset-0 flex items-start mt-16 justify-end mr-8 ">

        <input
          type="text"
          placeholder="Search places"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
          value={searchplace}
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
      <div className='py-[20px]  gap-6 py-5 mx-auto flex overflow-x-auto  '>
        <div className="flex flex-nowrap space-x-4 overflow-x-scroll">
          {
            place.map((singleplace) => {
              return (
                <div className='w-1/3  shadow-xl flex flex-col h-[420px] bg-gray-200 rounded my-2 hover:scale-105 duration-500  ' key={singleplace.place_id}>
                  <img className='rounded mx-auto mt-2 bg-white' src={`${url}/${singleplace.place_photo[0]}`} alt='/' style={{ height: '200px', width: '250px' }} />
                  <h2 className='text-center text-3xl font-bold py-3'>{singleplace.place_name}</h2>
                  <p className='text-end mr-6'>{singleplace.region_name}.</p>
                  <div className='text-center font-medium '>
                    <p className='py-4 mt-4 mx-4 border-b '>{singleplace.place_description}.</p>
                    <button className='bg-[#439fef] w-[200px] rounded-md font-medium py-2 px-2 my-2 mx-auto '>Explore</button>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>

      </div>
      )
  }

      export default Option;
