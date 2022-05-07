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
              Mr. & Mrs. Joseph James Craig Cooper
            </a>
          </li>
        </ul>
      </h2>
      <nav>
        <h5>
          <ul className="flex-row">
            
          </ul>
        </h5>
      </nav>
    </header>
  );
}

export default Nav;
