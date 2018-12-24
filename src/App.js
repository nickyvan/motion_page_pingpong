import React, { Component } from 'react';
import './App.css'
import Slideshow from './motion'
class App extends Component {
  componentDidMount(){
    new Slideshow(document.querySelector('.slideshow'));
  }
  render() {
    return (
      <div className="App">
        <div className="deco deco--bg" />
        <div className="deco deco--shape deco--shape-hor deco--shape-1" />
        <div className="deco deco--shape deco--shape-hor deco--shape-2" />
        <div className="slideshow">
          <div className="slide">
            <div
              className="slide__image"
              style={{ backgroundImage: 'url(./images/1.jpg)' }}
            />
            <h2 className="slide__title">Masupitami</h2>
          </div>
          <div className="slide">
            <div
              className="slide__image slide__image--hidden"
              style={{ backgroundImage: 'url(./images/2.jpg)' }}
            />
            <h2 className="slide__title slide__title--hidden">Waldorfian</h2>
          </div>
          <div className="slide">
            <div
              className="slide__image slide__image--hidden"
              style={{ backgroundImage: 'url(./images/3.jpg)' }}
            />
            <h2 className="slide__title slide__title--hidden">Hindsberg</h2>
          </div>
          <div className="slide">
            <div
              className="slide__image slide__image--hidden"
              style={{ backgroundImage: 'url(./images/4.jpg)' }}
            />
            <h2 className="slide__title slide__title--hidden">Kitschmas</h2>
          </div>
          <div className="slide">
            <div
              className="slide__image slide__image--hidden"
              style={{ backgroundImage: 'url(./images/5.jpg)' }}
            />
            <h2 className="slide__title slide__title--hidden">Friendlein</h2>
          </div>
          <nav className="nav">
            <button className="nav__button nav__button--previous">
              Previous
            </button>
            <button className="nav__button nav__button--next">Next</button>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
