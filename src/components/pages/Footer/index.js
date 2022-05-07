
import React, { useState } from 'react';
import FooterInfo from "./FooterInfo";
import ApplePay from '../ApplePay';
import Cash from '../Cash';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if (currentPage === 'ApplePay') {
      return <div className='align'> <ApplePay /></div>;
    }
    if (currentPage === 'Cash') {
      return <div className='align'> <Cash /></div>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <div>
 <FooterInfo currentPage={currentPage} handlePageChange={handlePageChange} />
{renderPage()}
    </div>
    </>
  );
}
