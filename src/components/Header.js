
import React from 'react';
import ph1 from "../ph1.png";
import ph2 from "../ph2.png";
import ph4 from "../ph4.png";

const Header = () => {
  return (
    <div class="row g-10 margin-bottom: 3rem !important
    ">

      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ph1} className="d-block w-100" alt="ph1..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Pierwszy etap</h5>
        <p>Przeprowadzenie dokładnej rozmowy z potencjalnym klientem, w której podejmiemy wspólnie najważniejsze kwestie. </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={ph2} className="d-block w-100" alt="ph2..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Drugi etap</h5>
        <p>Od razu po zaakceptowaniu pisemnym warunków umowy, przystępujemy do pracy. .</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={ph4} className="d-block w-100" alt="ph4..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Trzeci etap</h5>
        <p>Rozmowa pracodawcy z pracownikiem, podpisanie z nim umowy, lub poszukiwanie kolejnego kandydata.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Header
