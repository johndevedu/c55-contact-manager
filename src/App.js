import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <React.Fragment>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          Start Bootstrap
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>Your Favorite Source of Free Bootstrap Themes</strong>
            </h1>
            <hr />
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">
              Start Bootstrap can help you build better websites using the
              Bootstrap CSS framework! Just download your template and start
              going, no strings attached!
            </p>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </header>

    <section class="bg-primary" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-white">We've got what you need!</h2>
            <hr class="light my-4" />
            <p class="text-faded mb-4">
              Start Bootstrap has everything you need to get your new website up
              and running in no time! All of the templates and themes on Start
              Bootstrap are open source, free to download, and easy to use. No
              strings attached!
            </p>
            <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">
              Get Started!
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">At Your Service</h2>
            <hr class="my-4" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons" />
              <h3 class="mb-3">Sturdy Templates</h3>
              <p class="text-muted mb-0">
                Our templates are updated regularly so they don't break.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons" />
              <h3 class="mb-3">Ready to Ship</h3>
              <p class="text-muted mb-0">
                You can use this theme as is, or you can make changes!
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons" />
              <h3 class="mb-3">Up to Date</h3>
              <p class="text-muted mb-0">
                We update dependencies to keep things fresh.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-heart text-primary mb-3 sr-icons" />
              <h3 class="mb-3">Made with Love</h3>
              <p class="text-muted mb-0">
                You have to make your websites with love these days!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="p-0" id="portfolio">
      <div class="container-fluid p-0">
        <div class="row no-gutters popup-gallery">
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
              <img
                class="img-fluid"
                src="img/portfolio/thumbnails/1.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/2.jpg">
              <img
                class="img-fluid"
                src="img/portfolio/thumbnails/2.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/3.jpg">
              <img
                class="img-fluid"
                src="img/portfolio/thumbnails/3.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/4.jpg">
              <img
                class="img-fluid"
                src="img/portfolio/thumbnails/4.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/5.jpg">
              <img
                class="img-fluid"
                src="img/portfolio/thumbnails/5.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/6.jpg">
              <img
                class="img-fluid"
                src="img/portfolio/thumbnails/6.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-dark text-white">
      <div class="container text-center">
        <h2 class="mb-4">Free Download at Start Bootstrap!</h2>
        <a
          class="btn btn-light btn-xl sr-button"
          href="http://startbootstrap.com/template-overviews/creative/"
        >
          Download Now!
        </a>
      </div>
    </section>

    <script src="vendor/jquery/jquery.min.js" />
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />

    <script src="vendor/jquery-easing/jquery.easing.min.js" />
    <script src="vendor/scrollreveal/scrollreveal.min.js" />
    <script src="vendor/magnific-popup/jquery.magnific-popup.min.js" />

    <script src="js/creative.min.js" />
  </React.Fragment>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class Topic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { name: "J", age: 20 },
        { name: "M", age: 30 },
        { name: "C", age: 40 },
        { name: "A", age: 50 }
      ],
      messageFromServer: ""
    };
  }

  componentDidMount() {
    const config = {
      method: "GET",
      url: "http://localhost:8181",
      withCredentials: true
    };
    debugger;
    axios(config).then(response => {
      this.setState({
        messageFromServer: response.data
      });
    });
  }

  render() {
    const displayList = this.state.list.map(item => {
      return <li key={item.age}>{item.name}</li>;
    });
    return (
      <div>
        <h3>{this.props.match.params.topicId}</h3>
        <pre>{this.state.messageFromServer}</pre>
        <ul>{displayList}</ul>
      </div>
    );
  }
}
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
export default BasicExample;
