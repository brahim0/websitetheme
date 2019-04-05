import React, { Component } from 'react';
import './App.css';
import logo from './img/nest.png';
import portfolio1 from './img/1.png';
import portfolio2 from './img/2.png';
import portfolio3 from './img/3.png';
import portfolio4 from './img/4.png';
import test1 from './img/5.png';
import test2 from './img/6.png';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="home">
          <nav className="navbar navbar-dark  navbar-expand-md fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand"><img src={logo} /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials">Testimonials</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>

                </ul>

              </div>
            </div>
          </nav>
          <div className="landing">
            <div className="home-wrap">
              <div className="home-inner">

              </div>

            </div>

          </div>
          <div className="caption center-block text-center">
            <h3>NEST Responsive Bootstrap Theme</h3>
            <a className="btn btn-outline-light" href="#about">Get Started</a>

          </div>
          <div id="about">
            <div className="jumbotron">
              <h3 className="heading">About</h3>

              <div className="row">
                <div className="col-md-4 text-center" >
                  <h4>Full Screen Landing</h4>
                  <p>BEST WEBSITES EXAMPLES OF DESIGNS WITH FULLSCREEN</p>

                </div>
                <div className="col-md-4 text-center" >
                  <h4>Smooth Scroling</h4>
                  <p>For browsers that do not support the scroll-behavior property, you could use JavaScript or a JavaScript library,
  like jQuery, to create a solution that will work for all browsers</p>

                </div>
                <div className="col-md-4 text-center" >
                  <h4>Contact Form</h4>
                  <p>Use a form element to process the input. You can learn more about this in our PHP tutorial.
   Then add inputs</p>

                </div>



              </div>
            </div>

          </div>
          <div id="portfolio">
            <div className="container-fluid padding">
              <h3 className="heading" >
                Portfolio
               </h3>
              <div className="row no-padding">
                <div className="col-md-6">
                  <img className="portfolio" src={portfolio1} />

                </div>
                <div className="col-md-6">
                  <img className="portfolio" src={portfolio2} />

                </div>
                <div className="col-md-6">
                  <img className="portfolio" src={portfolio3} />

                </div>
                <div className="col-md-6">
                  <img className="portfolio" src={portfolio4} />

                </div>
              </div>
            </div>

          </div>
          <div id="testimonials">
            <h3 className="heading">
              Testimonials
          </h3>
            <div className="row padding">
              <div className="col-md-6">
                <div className="card text-center">
                  <img src={test1} className="card-img-top" />
                  <div className="card-body">
                    <h4>John Lee</h4>
                    <p>I have 10 years of experience in tecknologie system</p>

                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card text-center">
                  <img src={test2} className="card-img-top" />
                  <div className="card-body">
                    <h4>Jessica Willer</h4>
                    <p>I have 15 years of experience in frontend technologie</p>

                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="contact">
            <div className="container-fluid footer">
              <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6 text-center">
                  <img src={logo} />
                  <p>
                    Get one Google Home Mini with the purchase of each full-priced
                    Nest product priced over $99 and each Nest-packaged product bundle
                    priced
           </p>
                  <strong>Our Location</strong>
                  <p>
                    100 street name <br /> Our city ,AA 1000
           </p>
                  <strong>Contact Info</strong>
                  <p>
                    (888) 888 888 <br /> info@nest.com
           </p>

                </div>
                <div className="col-md-3">

                </div>

              </div>

            </div>
          </div>

        </div>
      
      </div>
    );
  }
}

export default App;
