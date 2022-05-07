
import React, { useState } from 'react';
import Nav from './pages/Nav';
import Footer from './pages/Footer';
import About from './pages/About';
import ApplePay from './pages/ApplePay';
import Cash from './pages/Cash';
import Proposal from './pages/Proposal';
import SealTheDeal from './pages/SealTheDeal';
import FirstDate from './pages/FirstDate';
import FirstConvo from './pages/FirstConvo';
import LongConvo from './pages/LongConvo';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if (currentPage === 'FirstConvo') {
      return <div className='align'> <FirstConvo /></div>;
    }
    if (currentPage === 'LongConvo') {
      return <div className='align'> <LongConvo /></div>;
    }
    if (currentPage === 'SealTheDeal') {
      return <div className='align'> <SealTheDeal /></div>;
    }
    if (currentPage === 'FirstDate') {
      return <div className='align'> <FirstDate /></div>;
    }
    if (currentPage === 'Proposal') {
      return <div className='align'> <Proposal /></div>;
    }
    return <div className='align'> <About /></div>;
  };
  const renderPage2 = () => {
    if (currentPage === 'ApplePay') {
      return <div className='align'> <ApplePay /></div>;
    }
    if (currentPage === 'Cash') {
      return <div className='align'> <Cash /></div>;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <div>
 <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
{renderPage()}
    </div>
    <div>
    <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage2()}
    </div>
    </>
  );
}
