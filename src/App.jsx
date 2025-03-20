// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';
import ContactForm from './components/ContactMe/ContactForm';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer'; // Import Footer
import './App.css';

// Homepage Layout
const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <main className="page-wrapper">
        <AboutMe showImage={false} />
        <Portfolio />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
};

// Layout for standalone pages
const StandaloneLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="page-wrapper">{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<Home />} />

          {/* About Me Page Route */}
          <Route
            path="/about"
            element={
              <StandaloneLayout>
                <AboutMe showImage={true} />
              </StandaloneLayout>
            }
          />

          {/* Portfolio Page Route */}
          <Route
            path="/portfolio"
            element={
              <StandaloneLayout>
                <Portfolio />
              </StandaloneLayout>
            }
          />

          {/* Resume Page Route */}
          <Route
            path="/resume"
            element={
              <StandaloneLayout>
                <Resume />
              </StandaloneLayout>
            }
          />

          {/* Contact Page Route */}
          <Route
            path="/contact"
            element={
              <StandaloneLayout>
                <ContactForm />
              </StandaloneLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



// // src/App.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import HeroBanner from './components/HeroBanner/HeroBanner';
// import AboutMe from './components/AboutMe/AboutMe';
// import Portfolio from './components/Portfolio/Portfolio';
// import ContactMe from './components/ContactMe/ContactMe'; // Import the ContactMe component
// import ContactForm from './components/ContactMe/ContactForm'; 
// import Footer from './components/Footer/Footer';
// import './App.css';

// // Homepage Layout
// const Home = () => {
//   return (
//     <>
//       <Header />
//       <HeroBanner />
//       <main className="page-wrapper">
//         <AboutMe />
//         <Portfolio />
//         <ContactMe /> {/* Add ContactMe section to the homepage */}
//       </main>
//       <Footer />
//     </>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//           {/* Homepage Route */}
//           <Route path="/" element={<Home />} />
//           {/* Contact Page Route */}
// //        <Route path="/contact" element={<ContactForm />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

