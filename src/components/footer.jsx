import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between">
          <div>
            <h5 className="text-lg font-bold mb-2">About Us</h5>
            <p className="text-sm">
              We are committed to delivering the best visual designs.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-2">Quick Links</h5>
            <ul className="list-none">
              <li className="mb-1"><a href="#" className="hover:text-gray-300">Home</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-300">Portfolio</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-2">Follow Us</h5>
            <ul className="list-none">
              <li className="mb-1"><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-2">Contact</h5>
            <p className="text-sm">Email: bhanupratapsingh3939@gmail.com</p>
            <p className="text-sm">Phone: 6376653351</p>
          </div>
        </div>
        <div className="text-center pt-5 border-t border-gray-700">
          <p className="text-sm">This is dribble clone website for assesment</p>
          <br></br>
          <p className="text-xl">Made with love by Bhanu Pratap</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
