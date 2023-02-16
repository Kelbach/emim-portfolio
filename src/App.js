import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import components and icons
import NavTabs from './components/NavTabs';
// import About from './components/About';
// import Github from './components/Github';
import MyCV from './components/MyCV';
import Main from './pages/main';
import dfjkdsl from './assets/IMAGES/dfjkdsl.png';
import './style.css';

function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <Main />;
      case 'My CV':
        return <MyCV />;
        // case 'Github':
        //   return <Github />;
      default:
        return <Main />;
    }
  };

  return (
    <div>
    <header>
      <div className="header">
        <h1>Emily Safron</h1>
        <h4>Ph.D. candidate in astrophysics and Louisiana Board of Regents Fellow at Louisiana State University</h4>
        <img src={dfjkdsl} alt="Looking more put-together than usual, I confess"  />
      </div>
      <nav>
        {/* Pass the state value and the setter as props to NavTabs */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Call the renderPage function passing in the currentPage */}
      </nav>
      { currentPage === 'About Me' && <section className="hero">
      {/* <article>
        <p>Destiny is a gift. Some go their entire lives, living existence as a quiet desperation. Never learning the truth that what feels as though a burden pushing down upon our shoulders, is actually, a sense of purpose that lifts us to greater heights. Never forget that fear is but the precursor to valour, that to strive and triumph in the face of fear, is what is means to be a hero.
        </p>
      </article>  */}
    </section> }
    </header>
    <div className="booty">{renderPage(currentPage)}</div>
    <footer>
        <div className='contact'>
          <p><u>Email</u>: <a href = "mailto: ejsafron@gmail.com">ejsafron@gmail.com</a></p>
          <p><u>Phone</u>: <a href = "tel:+4408642581">(440) 864-2581</a></p>
          <p><u>Mailing address</u>: 
          Case Western Reserve University, 
          Sears Library 554, 
          2083 MLK Jr. Dr., 
          Cleveland, OH 44106</p>
          
        </div>
        <h4>Built with React by <a href="https://github.com/Kelbach">Kevin Kelbach</a></h4>
    </footer>
    </div>
  );
}  

export default App;
