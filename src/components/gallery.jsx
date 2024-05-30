
import React from 'react';
import cardsData from '../data/cardData.js';

function Gallery({ currentCategory, sortType }) {
  const filteredData = cardsData.filter(card => currentCategory === 'all' || card.category === currentCategory);

  const sortedData = filteredData.sort((a, b) => {
    if (sortType === 'popularity') {
      return parseInt(b.likes.replace('k', '000')) - parseInt(a.likes.replace('k', '000'));
    } else if (sortType === 'new') {
      return new Date(b.createdDate) - new Date(a.createdDate);
    } else if (sortType === 'netWorthy') {
      return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'));
    }
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-0 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedData.map(card => (
          <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h5 className="text-lg font-bold">{card.title}</h5>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{card.views} Views</span>
                <span>{card.likes} Likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
