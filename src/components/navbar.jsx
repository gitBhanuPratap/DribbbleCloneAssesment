import React from 'react';
import logo from './images/dribbble_logo.jpg';
import profile from './images/profile.png';

function Navbar() {
  return (
    <nav className=" bg-white pb-10 pt-4">
      <div className="max-w-full mx-auto px-10 sm:px-10 lg:px-15">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-10">
            <button className="text-gray-800 font-semibold hover:text-red-500">Find Designers</button>
            <button className="text-gray-800 font-semibold hover:text-red-500">Inspiration</button>
            <button className="text-gray-800 font-semibold hover:text-red-500">Courses</button>
            <button className="text-gray-800 font-semibold hover:text-red-500">Jobs</button>
          </div>
          <div className="flex text-center object-fill">
            <img src={logo} alt="Dribbble Logo" className="h-14 inline-block" /> {/* Adjusted height for larger logo */}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-md">
              <input type="text" placeholder="Search..." className="px-4 py-2 w-64 rounded-l-md focus:outline-none" />
              <button className="bg-red-500 text-white px-4 rounded-r-md hover:bg-red-600">Search</button>
            </div>
            <img src={profile} alt="Profile" className="h-10 w-10 rounded-full" />  
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
