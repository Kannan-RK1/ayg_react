import "./Home.css";
import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Express_URL from "../Components/Express_URL";
//import ikon from "../Images/ikon.gif";

const HomeHCB = () => {
  const [yachts, setYachts] = useState([]);
  const make = "HCB";
  const condition = "New";
  const fetchData = (start, rows) => {
    let apiUrl = `${Express_URL}/documents/?start=${start}&rows=${rows}&make=${make}&condition=${condition}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const yachtsArray = data.data.results;
        setYachts(yachtsArray);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData(0, 8);
  }, [make]);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="banner mb-4">
        <iframe
          src="https://player.vimeo.com/video/884489762?background=1"
          style={{
            position: "absolute",
            top: " 50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "177.77777778vh",
            height: "56.25vw",
            boxSizing: "border-box",
            minHeight: "100%",
            minWidth: "100%",
          }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen=""
          data-ready="true"
          title="hcb-video"
        ></iframe>

        <div className="banner-text container-fluid col-lg-11">
          <div>
            <Row className="g-2 mb-2 d-flex justify-content-center">
              <Col
                xs={6}
                md={4}
                lg={2}
                className="btn btn-light "
                type="button"
              >
                <Link
                  to={`/hcb`}
                  className="text-dark fs-5"
                  onClick={handleClick}
                >
                  Explore Models
                </Link>
              </Col>

              <Col xs={6} md={4} lg={2} className="btn btn-dark" type="button">
                <Link
                  to={`/search?make=HCB`}
                  className="text-white fs-5"
                  onClick={handleClick}
                >
                  View Inventory
                </Link>
              </Col>
            </Row>
          </div>
          <p className="mb-0 fs-5 fw-bold">
            Performance. Luxury. Comfort. Athleticism.
          </p>
        </div>
      </div>

      <div>
        <Container fluid className="col-lg-11">
          <h5 className="text-dark fw-bold mb-4">
            Explore Featured HCB Collection
          </h5>
          <Row className="g-3">
            {yachts.map((yacht, index) => (
              <>
                <Col xs={12} md={6} lg={4}>
                  <div
                    class="card border-0"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    }}
                  >
                    <img
                      src={yacht.Images[0].Uri}
                      class="card-img-top"
                      alt="..."
                      loading="lazy"
                      height={"260px"}
                    />
                    <div class="card-body p-2">
                      <div className="text-start">
                        <h5 class="fw-bold mb-1">
                          {yacht.MakeString}{" "}
                          <span className="text-dark">{yacht.Model}</span>
                        </h5>
                      </div>
                      <p class="text-dark mb-0 ">
                        {/* <i className="fa-solid fa-location-dot text-secondary"></i>{" "} */}
                        {yacht.ModelYear} | {yacht.BoatLocation.BoatCityName},{" "}
                        {yacht.BoatLocation.BoatStateCode},{" "}
                        {yacht.BoatLocation.BoatCountryID}
                      </p>
                      <div class="d-flex justify-content-between">
                        <div>
                          <p className="mb-0 fw-bold">
                            {yacht.Price
                              ? `${yacht.Price}`
                              : "$ Call For Price"}
                          </p>
                        </div>
                        <div>
                          <Link
                            to={`/yachtdetails/${yacht.DocumentID}`}
                            className="text-dark fw-bold"
                          >
                            View Details{"  "}
                            <i class="fa-solid fa-angles-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                {/* Display advertisement after the 3rd card */}
                {index === 2 && (
                  <Col xs={12} md={6} lg={4} key="advertisement">
                    <div
                      class="border-0 py-4 rounded-2 bg-white"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="https://ayg.s3.us-east-2.amazonaws.com/HCB+(2).gif"
                          alt="Advertisement"
                          height={"305px"} // Adjust the height of the image as needed
                          width={"auto"}
                        />
                      </div>
                    </div>
                  </Col>
                )}
              </>
            ))}
          </Row>
          {yachts.length === 0 && (
            // <Alert variant="warning">No yachts found.</Alert>
          <div className="text-center">
          <Spinner animation="border" variant="warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
          )}
        </Container>
      </div>
      <Container fluid className="col-lg-11">
      <Link to={`/search?make=HCB`} className=" text-white fs-5">
        <div className="mt-3 p-3 text-center text-white gradient-c1">
        <span>
              View Our Wide Collection Of New and Used HCB Yachts
              <i class="fa-solid fa-angles-right"></i>
            </span>
        </div>
        </Link>
      </Container>
    </>
  );
};

export default HomeHCB;
