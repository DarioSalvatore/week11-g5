import Logo from "../images/Spotify_Logo.png";
import { Form, Button } from "react-bootstrap";
import Next from "../images/Next.png";
import Play from "../images/Play.png";
import Previous from "../images/Previous.png";
import Repeat from "../images/Repeat.png";
import Shuffle from "../images/Shuffle.png";
import { Link } from "react-router-dom";

const MyArtist = () => {
  const handlesubmit = async (e) => {
    e.preventDefault();
    search();
  };

  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

  const search = async () => {
    try {
    } catch (err) {
      console.log("qualcosa è andato storto nella ricerca!");
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/*SIDEBAR VERTICAL*/}
          <div className="col-2">
            <nav
              className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
              id="sidebar"
            >
              <div className="nav-container">
                <img src={Logo} alt="Spotify_Logo" width={131} height={40} />

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <ul>
                      <li>
                        <Link to="/" className="nav-item nav-link">
                          <i className="fas fa-home fa-lg" />
                          &nbsp; Home
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="nav-item nav-link">
                          <i className="fas fa-book-open fa-lg" />
                          &nbsp; Your Library
                        </Link>
                      </li>
                      <li>
                        <Form className="mt-3">
                          <Form.Control
                            type="text"
                            className="mb-2"
                            placeholder="Search"
                          />
                          <div
                            className="input-group-append"
                            style={{ marginBottom: "4%" }}
                          >
                            <Button
                              className="btn btn-outline-secondary btn-sm"
                              type="button"
                              id="button-addon1"
                              onSubmit={handlesubmit}
                            >
                              GO
                            </Button>
                          </div>
                        </Form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nav-btn">
                <button className="btn signup-btn" type="button">
                  Sign Up
                </button>
                <button className="btn login-btn" type="button">
                  Login
                </button>
                <Link to="#">Cookie Policy</Link> |<Link to="#"> Privacy</Link>
              </div>
            </nav>
          </div>
          {/*END SIDEBAR VERTICAL*/}
          {/*MAIN*/}
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row mb-3">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <Link to="#">TRENDING</Link>
                <Link to="#">PODCAST</Link>
                <Link to="#">MOODS AND GENRES</Link>
                <Link to="#">NEW RELEASES</Link>
                <Link to="#">DISCOVER</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-10 mt-5">
                <h2 className="titleMain" />
                <div id="followers" />
                <div
                  className="d-flex justify-content-center"
                  id="button-container"
                >
                  <button
                    className="btn btn-success mr-2 mainButton d-none"
                    id="playButton"
                  >
                    PLAY
                  </button>
                  <button
                    className="btn btn-outline-light mainButton d-none"
                    id="followButton"
                  >
                    FOLLOW
                  </button>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                <div className="mt-4 d-flex justify-content-start">
                  <h2 className="text-white font-weight-bold">Tracks</h2>
                </div>
                <div className="pt-5 mb-5">
                  <div className="row" id="apiLoaded" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*END MAIN*/}
        {/*NAVBAR FLEX-BOTTOM*/}
        <div className="container-fluid fixed-bottom bg-container pt-1">
          <div className="row">
            <div className="col-lg-10 offset-lg-2">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                  <div className="row">
                    <Link to="#">
                      <img src={Shuffle} alt="shuffle" />
                    </Link>
                    <Link to="#">
                      <img src={Previous} alt="shuffle" />
                    </Link>
                    <Link to="#">
                      <img src={Play} alt="shuffle" />
                    </Link>
                    <Link to="#">
                      <img src={Next} alt="shuffle" />
                    </Link>
                    <Link to="#">
                      <img src={Repeat} alt="shuffle" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center playBar py-3">
                <div className="col-8 col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtist;
