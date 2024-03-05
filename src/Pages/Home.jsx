import React from "react";
import Navbar from "../Components/Navbar";
import HomeHCB from "../Components/HomeHCB";
//import HomeIKON from "../Components/HomeIKON";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Popup from "../Components/PopUP";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Navbar />
      {/* <Popup /> */}
      <div>
        {/* HCB Content  */}
        <HomeHCB />
        {/* IKON Content  */}
        {/* <HomeIKON /> */}
      </div>

      <section class="container-fluid col-lg-11 py-4">
      <div class="text-center">
        <h4 class="mb-3 c-heading fw-bold py-2">
          America's Top HCB Yacht Broker - Setting the Standard in Maritime
          Excellence.
        </h4>

        <p>
          American Yacht Group, South Florida's top HCB Yachts dealer. Based in
          Naples and serving Miami, Fort Lauderdale, Palm Beach, Stuart, the
          Bahamas, and beyond, we redefine yachting. As a leading yacht
          brokerage, we specialize in smooth experiences for buying and selling
          boats, motor yachts, cruising vessels, and center-consoles. At
          American Yacht Group, we're Info than dealers; we're passionate
          navigators dedicated to elevating your yachting dreams.
        </p>       
      </div>
      <div class="row g-0 mt-3">
        <div class="col-sm-12 col-md-4">
          <div class="c-ayg-effect-1">
            <div class="c-ayg-effect-img">
              <img
                src="https://americanyachtgroup.com/wp-content/uploads/2022/10/services-4.webp"
                alt="Image"
              />
            </div>
            <div class="c-ayg-effect-text">
              <h2>Why Choose Us</h2>
              <p>
                As a leading yacht brokerage, we specialize in smooth
                experiences for buying and selling boats, motor yachts, cruising
                vessels, and center-consoles.
              </p>
              {/* <div class="c-ayg-effect-btn">
                <a class="c-ayg-btn" href="#">Read More</a>
              </div> */}
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="c-ayg-effect-1">
            <div class="c-ayg-effect-img">
              <img
                src="https://americanyachtgroup.com/wp-content/uploads/2022/10/hcb-image-1-1.webp"
                alt="Image"
              />
            </div>
            <div class="c-ayg-effect-text">
              <h2>What We Do</h2>
              <p>
                American Yacht Group is your exclusive home for everything HCB
                YACHTS in South Florida.
              </p>
              {/* <div class="c-ayg-effect-btn">
                <a class="c-ayg-btn" href="#">Read More</a>
              </div> */}
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="c-ayg-effect-1">
            <div class="c-ayg-effect-img">
              <img
                src="https://americanyachtgroup.com/wp-content/uploads/2022/10/homepage-image-1-1.webp"
                alt="Image"
              />
            </div>
            <div class="c-ayg-effect-text">
              <h2>Who We Are</h2>
              <p>
                American Yacht Group, South Florida's top HCB Yachts dealer.
                Based in Naples and serving Miami, Fort Lauderdale, Palm Beach,
                Stuart, the Bahamas, and beyond, we redefine yachting.
              </p>
              {/* <div class="c-ayg-effect-btn">
                <a class="c-ayg-btn" href="#">Read More</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      </section>

      <section class="container-fluid col-lg-11 pb-5">
        <div class="col-lg-12 hr-line">
          <div class="d-flex justify-content-start">
            <h5 className="text-dark fw-bold ">Our Yacht Services</h5>
          </div>
        </div>
        <div class="row mt-3 g-2">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-handshake"></i> Brokerage
              </h5>
              <p class="mb-1">
                With AYG: Experience Your premier yacht brokerage for seamless
                buying and selling.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-money-bill"></i> Financing
              </h5>
              <p class="mb-1">
                AYG secures flexible yacht financing through premier financial
                partnerships for you.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-shield-alt"></i> Insurance
              </h5>
              <p class="mb-1">
                Insure your yacht seamlessly with tailored marine insurance from
                AYG Broker.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-truck"></i> Transportation
              </h5>
              <p class="mb-1">
                We offers expert Yacht Transportation: land or water, your
                choice.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-wind"></i> Hurricane Storage
              </h5>
              <p class="mb-1">
                Secure yacht hurricane storage available at AYG. Reserve your
                space!
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-exchange-alt"></i> Trade-In
              </h5>
              <p class="mb-1">
                We Offer effortless yacht upgrade: trade-in your boat for a
                better vessel.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services#trade-in`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Container fluid className="col-lg-11 py-4">
          <Row className="g-0">
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/86/99/9018699_950391052_0_280820231426_0.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link to={`/search?className=Motor Yachts`} className="text-white fs-5">
                    <h2>MOTOR YACHTS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/75/56/8617556_20231114143456262_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/search?className=Catamaran`}
                    className="text-white fs-5"
                  >
                    <h2>CATAMARANS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/4/52/9090452_20231116171616857_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link to={`/search?make=HCB`} className="text-white fs-5">
                    <h2>HCB YACHTS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/40/72/9134072_20231130084733155_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/search?className=Center Consoles`}
                    className="text-white fs-5"
                  >
                    <h2>CENTER CONSOLE</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/81/99/9018199_950373073_0_280820230947_0.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/search?className=Motor Yachts`}
                    className="text-white fs-5"
                  >
                    <h2>MOTOR YACHTS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/7/33/8660733_20230120054239615_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/search?make=Sailfish`}
                    className="text-white fs-5"
                  >
                    <h2>SAILFISH</h2>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Link to={`/search?make=HCB`}>
          <Container fluid className="col-lg-11 py-3">
            <Col key="advertisement" xs={12}>
              <Card
                className="border-0"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                <Card.Body className="p-2">
                  <Card.Text>
                    <div className="text-center">
                      {/* Mobile: Display Image 1 */}
                      <Row className="d-md-none">
                        <Col>
                          <img
                            src="https://ayg.s3.us-east-2.amazonaws.com/HCB+(2).gif"
                            alt="Mobile"
                            className="img-fluid"
                          />
                        </Col>
                      </Row>

                      {/* Tablet: Display Image 2 */}
                      <Row className="d-none d-md-flex d-lg-none">
                        <Col>
                          <img
                            src="https://ayg.s3.us-east-2.amazonaws.com/HCB+(2).gif"
                            alt="Tablet"
                            className="img-fluid"
                          />
                        </Col>
                      </Row>

                      {/* Desktop: Display Image 3 */}
                      <Row className="d-none d-lg-flex">
                        <Col>
                          <img
                            src="https://ayg.s3.us-east-2.amazonaws.com/Explore+Travel.gif"
                            alt="Desktop"
                            className="img-fluid"
                          />
                        </Col>
                      </Row>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Container>
        </Link>
      </section>
    </div>
  );
};

export default Home;
