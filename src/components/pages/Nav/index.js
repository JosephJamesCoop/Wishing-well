import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="flex-row px-1">
      <h2>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className='{
                currentPage === "About" ? "nav-link active" : "nav-link"
              }  mx-4'
            >
              Mr. & Mrs. <br></br>
              Joseph James Craig Cooper
            </a>
          </li>
        </ul>
      </h2>
      <nav>
        <h5>
          <ul className="flex-row">
            <li className="mx-2 mx-22">
              <a
                href="#firstConvo"
                onClick={() => handlePageChange("FirstConvo")}
                className='{
                currentPage === "FirstConvo" ? "nav-link active" : "nav-link"
              }  mx-4'
              >
                First Conversation
              </a>
            </li>
            <li className="mx-2 mx-22">
              <a
                href="#longConvo"
                onClick={() => handlePageChange("LongConvo")}
                className='{
                currentPage === "LongConvo" ? "nav-link active" : "nav-link"
              }  mx-4'
              >
                First Long Conversation
              </a>
            </li>
            <li className="mx-2 mx-22">
              <a
                href="#SealTheDeal"
                onClick={() => handlePageChange("SealTheDeal")}
                className='{
                currentPage === "SealTheDeal" ? "nav-link active" : "nav-link"
              }  mx-4'
              >
                Sealing The Deal
              </a>
            </li>
            <li className="mx-2 mx-22">
              <a
                href="#firstDate"
                onClick={() => handlePageChange("FirstDate")}
                className='{
                currentPage === "FirstDate" ? "nav-link active" : "nav-link"
              }  mx-4'
              >
                Our Official First Date
              </a>
            </li>
            <li className="mx-2 mx-22">
              <a
                href="#proposal"
                onClick={() => handlePageChange("Proposal")}
                className='{
                currentPage === "Proposal" ? "nav-link active" : "nav-link"
              }  mx-4'
              >
                The Big Proposal
              </a>
            </li>
          </ul>
        </h5>
      </nav>
    </header>
  );
}

export default Nav;
