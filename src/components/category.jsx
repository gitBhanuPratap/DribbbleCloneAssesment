import React from 'react';

function CategoryBar({ setCategory, setSortType }) {
  return (
    <div className="py-2">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between space-x-4 items-center">
        
        <div className="flex space-x-16 lg:px-12 ">
          <button onClick={() => setCategory('all')} className="text-gray-800 font-medium hover:text-red-500">All</button>
          <button onClick={() => setCategory('animation')} className="text-gray-800 font-medium hover:text-red-500">Animation</button>
          <button onClick={() => setCategory('illustration')} className="text-gray-800 font-medium hover:text-red-500">Illustration</button>
          <button onClick={() => setCategory('product')} className="text-gray-800 font-medium hover:text-red-500">Product Design</button>
          <button onClick={() => setCategory('typography')} className="text-gray-800 font-medium hover:text-red-500">Typography</button>
          <button onClick={() => setCategory('web')} className="text-gray-800 font-medium hover:text-red-500">Web Design</button>
          <button onClick={() => setCategory('mobile')} className="text-gray-800 font-medium hover:text-red-500">Mobile</button>
          <button onClick={() => setCategory('print')} className="text-gray-800 font-medium hover:text-red-500">Print</button>
          <button onClick={() => setCategory('3d design')} className="text-gray-800 font-medium hover:text-red-500">3d design</button>
          <button onClick={() => setCategory('Abstract')} className="text-gray-800 font-medium hover:text-red-500">Abstract</button>
        </div>

        <div>
          <label htmlFor="sort-select" className="sr-only">Sort by</label>
          <select id="sort-select" defaultValue="popularity" onChange={e => setSortType(e.target.value)} className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="popularity">Popularity</option>
            <option value="new">New</option>
            <option value="netWorthy">Net-Worthy</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;

