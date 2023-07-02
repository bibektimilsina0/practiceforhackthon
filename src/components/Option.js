import React from 'react'
import sarangkot from "../assets/image/sarangkot.jpg";
import phewalake from "../assets/image/Phewalake.jpg";
import devisfall from "../assets/image/devisfall.jpg";


function Option() {
  return (
    <div className='py-[100px] px-2'>
    <div className=' max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>

        <div className=' w-full shadow-xl flex flex-col h-[600px] rounded my-4 hover:scale-105 duration-500' >
<img className='w-50 h-50 rounded mx-auto  bg-white' src = {sarangkot} alt='/' />
<h2 className='text-center text-3xl font-bold py-9'>Sarangkot</h2>
<div className='text-center font-medium'>
  <p className='py-4 mt-7 mx-8 border-b'>Sarangkot is a popular tourist destination located near Pokhara, Nepal.</p>
  <button className='bg-[#439fef] w-[200px] rounded-md font-medium py-3 px-6 my-6 mx-auto'>Explore</button>
</div>

        </div>
        <div className='w-full shadow-xl h-[600px] flex flex-col rounded my-4 bg-gray-200 hover:scale-105 duration-500' >
        <img className='w-50 h-50 rounded mx-auto  bg-transparent' src = {phewalake} alt='/' />
        <h2 className='text-center text-3xl font-bold py-9'>Phewa Lake</h2>
        <div className='text-center font-medium'>
  <p className='py-4 mt-7 mx-8 border-b'>Phewa Lake is not only a natural wonder but also an integral part of the Pokhara experience. </p>
  <button className='bg-[#439fef] w-[200px] rounded-md font-medium py-3 px-6 my-6 mx-auto'>Explore</button>

  
</div>
        </div>
        <div className='w-full shadow-xl h-[600px]  rounded my-4 flex flex-col hover:scale-105 duration-500' >
        <img className='w-50 h-50 rounded mx-auto bg-white' src = {devisfall} alt='/' />
        <h2 className='text-center text-3xl font-bold py-9'>Devis Fall</h2>
        <div className='text-center font-medium'>
  <p className='py-4 mt-7 mx-8 border-b'>Devis Fall is not only a scenic attraction but also holds cultural and historical significance in Pokhara</p>
</div>
<button className='bg-[#439fef] w-[200px] flex flex-col rounded-md font-medium  text-center py-3 px-7 my-6 mx-auto'>Explore</button>
        </div>
        
    </div>
      
    </div>
  )
}

export default Option
