
import React, { useState } from 'react';
import Nav from './pages/Nav';
import Footer from './pages/Footer';
import ApplePay from './pages/ApplePay';
import About from './pages/About';
import Cash from './pages/Cash';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if (currentPage === 'ApplePay') {
      return <div className='align'> <ApplePay /></div>;
    }
    if (currentPage === 'Cash') {
      return <div className='align'> <Cash /></div>;
    }
    return <div className='align'> <About /></div>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <div>
 <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
{renderPage()}
    </div>
    <Footer />
    </>
  );
}
