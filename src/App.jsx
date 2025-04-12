// App.jsx

import './App.css';
import Header from './layout/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './layout/Footer';
import BankruptcyPage from './pages/Bankruptcy';
import Criminal from './pages/Criminal';
import PersonalInjury from './pages/PersonalInjury';
import { useEffect } from 'react';
import ScrollToTopButton from './layout/ScrollToTopButton';
import ContactUs from './pages/ContactUs';


function App() {
  const {pathName} = useLocation()


  useEffect(() => {
    window.scrollTo({top : 0 , behavior : "smooth" })
  })
  return (
    <>
      <Header />
<ScrollToTopButton />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bankruptcy" element={<BankruptcyPage />} />
          <Route path="/criminal-traffic-defense" element={<Criminal />} />
          <Route path="/personal-injury" element={<PersonalInjury />} />
          <Route path="/contact" element={<ContactUs />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
