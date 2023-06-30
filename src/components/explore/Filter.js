
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from "jquery";

function Filter ({data}){

  const [category, setCategory] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(' http://192.168.15.149/php/TourismCulture/display/getcategory.php ');
        setCategory(response.data);
        // setFilteredPlaces(response.data);
        // console.log(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };
   fetchPlaces();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        filterplace_id:filter,
        success(data) {
            setFilteredPlaces(data);
        },
    });
};
  
  return (
    <div className=' z-999 mt-96 bg-gray-400'>
        <form action='192.168.15.149/php/TourismCulture/display/filtercategory.php' method="post"  onSubmit={(event) => handleSubmit(event)} >
     
       <select 
       name="filtercategory_id"
        value={filter}
        onChange={event => {setFilter(event.target.key)
        console.log(event.target.key)}}
      >
        
       
        {category.map((cat) => {
            
            return (
                
          <option key={cat.id} value={cat.category_name}>
            {cat.category_name}
          </option>
        )
        })}
      </select>
    <button type="submit">Filter</button>
      </form>
    
    </div>
  );
};

export default Filter;
