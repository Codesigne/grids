import React from 'react';
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div>
      <div className="container--1">
        <div className="key key--lock"> lock </div>
        <div className="key key--divide"> / </div>
        <div className="key key--multi">*</div>

        <div className="key">1</div>
        <div className="key">
          <p className="sub-item">2</p>
        </div>
        <div className="key">3</div>
        <div className="key">4</div>
        <div className="key key--5">5</div>
        <div className="key">6</div>
        <div className="key">7</div>
        <div className="key">8</div>
        <div className="key">9</div>
        <div className="key key--zero">0</div>


        <div className="key key--add">+</div>
        <div className="key key--minus">-</div>

        <div className="key key--dot"> . </div>

        <div className="key key--enter"> enter </div>
      </div>
    </div>
  );
}

export default App;
