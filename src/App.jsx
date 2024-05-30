import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import CategoryBar from './components/category.jsx';
import Gallery from './components/gallery.jsx';
import Footer from './components/footer.jsx';


function App() {
  const [category, setCategory] = useState('all');
  const [sortType, setSortType] = useState('popularity');

  return (
    <div>
      <Navbar />
      <CategoryBar setCategory={setCategory} setSortType={setSortType} />
      <Gallery currentCategory={category} sortType={sortType}/>
      <Footer />
    </div>
  );
}

export default App;


