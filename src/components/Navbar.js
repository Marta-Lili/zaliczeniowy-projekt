import React from "react";

const Navbar = () => {
    return(
<nav className="navbar navbar-expand-md navbar bg-light fixed-top">
    <div className="container-fluid">
    <a className="navbar-brand" href="/#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Dla Pracodawców</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Dla Kandydatów</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Usługi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Konsulting</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Oferty pracy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Kontakt</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;