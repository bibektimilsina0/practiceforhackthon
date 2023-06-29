import React, { useState } from 'react';
import { FaUser, FaBell } from 'react-icons/fa';


const PlaceList = [
  'Kathmandu',
  'Pokhara',
  'Chitwan',
  'Lumbini',
  'Everest Base Camp',
  'Annapurna Circuit',
  'Mustang',
  'Bhaktapur',
  'Gorkha',
  'Janakpur',
  'Nagarkot',
  'Bandipur',
  'Dhulikhel',
  'Ilam',
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPlaces, setShowPlaces] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowPlaces = () => {
    setShowPlaces(true);
  };

  const filteredPlaces = PlaceList.filter((place) =>
    place.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort();

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search places"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleShowPlaces}
      >
        Explore
      </button>
      <div className='flex justify-between text-black  my-6'>
         <FaUser className='text-xl mr-2'/>
         <FaBell className='text-xl mr-2'/>
        
         </div>
      {showPlaces && (
        <ul className="divide-y divide-gray-300 mt-4">
          {filteredPlaces.map((place, index) => (
            <li key={index} className="py-2">
              {place}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
