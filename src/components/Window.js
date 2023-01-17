import React from 'react';
import word1 from "../word1.png";
import word2 from "../word2.png";
import word3 from "../word3.png";

const Window = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
        <img src={word1} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Szybkość</h5>
          <p className="card-text">Pomimo szybkości wykonywanych zleceń, staramy się skrupulatnie wybierać kandydatów, aby idealnie współgrali z danym stanowiskiem.</p>
        </div>
        <div className="card-footer">
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={word2} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Perfekcjonizm</h5>
          <p className="card-text">Szybkość, skuteczność i dokładność oraz biegłość w kilku językach to cechy wyróżniające nas na rnyku, oferujemy usługi rekrutacyjne na każdym kontynencie. </p>
        </div>
        <div className="card-footer">
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={word3} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Dokładność</h5>
          <p className="card-text">Nasz system rekrutacyjny trójetapowy przechodzi tylko kandydat, który idealnie pasuje na dane stanowisko.</p>
        </div>
        <div className="card-footer">
        </div>
      </div>
    </div>
  </div>
  )
}

export default Window
