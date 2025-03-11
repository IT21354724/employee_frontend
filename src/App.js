import React from 'react';
import Nav from './components/Nav';
import SideBar from './components/content';
import Footer from './components/footer';
import backgroundImage from './assets/1.jpg'; // Import the image

function App() {
  return (
    <div>
      {/* Main Content with Background Image */}
      <div 
        className='col-span-1 p-4 shadow-lg min-h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image
      >
        <Nav />
        <SideBar />
      </div>

      {/* Separate Footer Section */}
      <div className=''>
        <Footer />
      </div>
    </div>
  );
}

export default App;