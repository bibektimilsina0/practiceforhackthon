import React from 'react';

const AddPlace = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white rounded shadow">
        <h2 className="text-2xl mb-4 text-center">Add a New Place</h2>
        <form action="addplace/addplace.php" method="post" encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="region" className="block mb-2">Select Region:</label>
            <select name="region_id" id="region" className="w-full px-3 py-2 border rounded">
              <option value="">Select</option>
              {/* Add your options here */}
            </select>
          </div>
          <div className="mb-4">
            <input type="text" name="place_name" placeholder="Place Name" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <textarea name="place_description" placeholder="Place Description" className="w-full px-3 py-2 border rounded"></textarea>
          </div>
          <div className="mb-4">
            <input type="text" name="place_culture" placeholder="Place Culture" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <input type="file" name="place_photo[]" accept="image/*" multiple directory className="w-full" />
          </div>
          <div className="mb-4">
            <input type="text" name="place_besttime" placeholder="Best Time to Visit" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <input type="text" name="place_howtoreach" placeholder="How to Reach" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="text-center">
            <button type="submit" name="addnewplace" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlace;
