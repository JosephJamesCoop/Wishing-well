import React from "react";

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer className="flex-row px-1">
           <p className="paragraph">
           Erin and I are so very thankful that you have come out today to
             support us. We don't expect anything from you just your physical
             presence here today is all that we ask for. If you would like to
             donate to our wishing well you're welcome to click any of the
             links below. Donations will be used to help fund our honeymoon in
             Hawaii. Also maybe if some billionaire comes across my website it
             will be used to buy a nice fishing boat too...
            </p>
      <nav>
        <h5>
          <ul className="flex-row">
            <li className="mx-1 mx-3">
              <a
                href="#applePay"
                onClick={() => handlePageChange("ApplePay")}
                className={
                  currentPage === "ApplePay" ? "nav-link active" : "nav-link"
                }
              >
                Apple Pay
              </a>
            </li>
            <li className="mx-1 mx-3">
              <a
                href="#cash"
                onClick={() => handlePageChange("Cash")}
                className={
                  currentPage === "Cash" ? "nav-link active" : "nav-link"
                }
              >
                Cash
              </a>
            </li>
            <li className="mx-1 mx-3">
              <a href="https://cash.app/$Cooper3869">Cash App</a>
            </li>
            <li className="mx-1 mx-3">
              <a href="https://www.paypal.com/qrcodes/managed/286038ac-0322-4b3c-bb39-b40cc39d930e">
                PayPal
              </a>
            </li>
            <li className="mx-1 mx-3">
              <a href="https://account.venmo.com/u/JosephJamesCoop">Venmo</a>
            </li>
          </ul>
        </h5>
      </nav>
    </footer>
  );
}

export default Footer;
