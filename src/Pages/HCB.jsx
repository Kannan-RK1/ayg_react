import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const HCB = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Navbar />
      <div className="mob-banner d-md-none mb-4">
        <iframe
          src="https://player.vimeo.com/video/415942826?background=1"
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
        <div className="mob-banner-text container-fluid col-lg-11">
          {/* <div>
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
          </div> */}
          <p className="mb-0 fs-5 fw-bold">
            Performance. Luxury. Comfort. Athleticism.
          </p>
        </div>
      </div>

      <div className="banner d-none d-md-block">
        <div className="banner-content">
          <iframe
            src="https://player.vimeo.com/video/415942826?background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="hcb-video"
          ></iframe>
          <div className="banner-text">
            <h5 className="text-center fw-bold text-white">
              Performance. Luxury. Comfort. Athleticism.
            </h5>
            {/* <div className="text-center row">
              <div className="col-6 text-end">
                <Link
                  to={`/hcb`}
                  className="btn btn-light me-2"
                  onClick={handleClick}
                >
                  Explore Models
                </Link>
              </div>
              <div className="col-6 text-start">
                <Link
                  to={`/search?make=HCB`}
                  className="btn btn-dark"
                  onClick={handleClick}
                >
                  View Inventory
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className=" pt-4">
        <Container fluid>
          <Row className="g-3 py-3">
            <Col xs={12} md={6} lg={6}>
              <Link to={`/48-campeon`} className=" text-white">
                <Card className="rounded-0 border-0 p-lg-4 bg-secondary">
                  <Card.Body>
                    <Card.Title className="text-center fw-bold text-white">
                      CAMPEÓN
                    </Card.Title>
                    <Card.Text className="text-center text-white fs-18px">
                      Equipped with the latest technological advancements, it
                      offers you a seamless and unparalleled boating experience.
                    </Card.Text>
                    <Card.Text className="text-center text-white  fs-18px">
                      <span className="fw-bold">
                        <span className="fw-bold">Learn More{"  "}</span>
                      </span>
                      <i class="fa-solid fa-angles-right"></i>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img
                    className="py-lg-4"
                    variant="bottom"
                    src="https://hcbyachts.com/wp-content/uploads/2023/11/HCB-48-Rendering_White_Side-Transparent-Website-1536x453.png"
                  />
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={6} lg={6}>
              <Link
                to={`/65-estrella`}
                className=" text-dark"
                onClick={handleClick}
              >
                <Card className="rounded-0 border-0 p-lg-4">
                  <Card.Body>
                    <Card.Title className="text-center fw-bold ">
                      ESTRELLA
                    </Card.Title>
                    <Card.Text className="text-center fs-18px">
                      The world’s largest Center Console, introducing the first
                      ever Mega Center Console Yacht™
                    </Card.Text>
                    <Card.Text className="text-center fs-18px">
                      <span className="fw-bold">Learn More{"  "}</span>
                      <i class="fa-solid fa-angles-right"></i>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img
                    variant="bottom"
                    src="https://hcbyachts.com/wp-content/uploads/2022/03/suenos_updated2.jpg"
                  />
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={6} lg={6}>
              <Link
                to={`/53-suenos`}
                className=" text-dark"
                onClick={handleClick}
              >
                <Card className="rounded-0 border-0 p-lg-4">
                  <Card.Body>
                    <Card.Title className="text-center fw-bold ">
                      SUEÑOS
                    </Card.Title>
                    <Card.Text className="text-center fs-18px">
                      The sophisticated design to perfectly balance speed, ride,
                      comfort, and all of the luxury of your “dream” yacht.
                    </Card.Text>
                    <Card.Text className="text-center fs-18px">
                      <span className="fw-bold">Learn More{"  "}</span>
                      <i class="fa-solid fa-angles-right"></i>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img
                    variant="bottom"
                    src="https://hcbyachts.com/wp-content/uploads/2022/03/suenos2.jpg"
                  />
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={6} lg={6}>
              <Link
                to={`/42-lujo`}
                className=" text-dark"
                onClick={handleClick}
              >
                <Card className="rounded-0 border-0 p-lg-4">
                  <Card.Body>
                    <Card.Title className="text-center fw-bold ">
                      LUJO
                    </Card.Title>
                    <Card.Text className="text-center fs-18px">
                      A seamless blend of brawn and refinement which provides
                      sustained offshore performance and an impeccable ride.
                    </Card.Text>
                    <Card.Text className="text-center fs-18px">
                      <span className="fw-bold">Learn More{"  "}</span>
                      <i class="fa-solid fa-angles-right"></i>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img
                    variant="bottom"
                    src="https://hcbyachts.com/wp-content/uploads/2022/04/lujo_updated.jpg"
                  />
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={6} lg={6}>
              <Link
                to={`/39-speciale`}
                className=" text-dark"
                onClick={handleClick}
              >
                <Card className="rounded-0 border-0 p-lg-4">
                  <Card.Body>
                    <Card.Title className="text-center fw-bold ">
                      SPECIALE
                    </Card.Title>
                    <Card.Text className="text-center fs-18px">
                      Family-friendly center console yacht, with the all of the
                      desired standard features and comfort you expect from HCB.
                    </Card.Text>
                    <Card.Text className="text-center fs-18px">
                      <span className="fw-bold">Learn More{"  "}</span>
                      <i class="fa-solid fa-angles-right"></i>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img
                    variant="bottom"
                    src="https://hcbyachts.com/wp-content/uploads/2022/03/39_scaled.jpg"
                  />
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={6} lg={6}>
              <Link
                to={`/services`}
                className="text-white"
                onClick={handleClick}
              >
                <Card className="rounded-0 border-0 p-lg-4 bg-secondary">
                  <Card.Body>
                    <Card.Title className="text-center fw-bold text-white">
                      TRADE-IN
                    </Card.Title>
                    <Card.Text className="text-center fs-18px text-white">
                      Contact us today and we will provide you with an accurate
                      price of what your boat is worth in today’s market.
                    </Card.Text>
                    <Card.Text className="text-center fs-18px">
                      <span className="fw-bold">Learn More{"  "}</span>
                      <i class="fa-solid fa-angles-right"></i>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img
                    className="py-lg-4"
                    variant="bottom"
                    src="https://hcbyachts.com/wp-content/uploads/2023/11/HCB-48-Rendering_White_Side-Transparent-Website-1536x453.png"
                  />
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container className="py-4">
          <p style={{ textAlign: "justify" }}>
            HCB Yachts makes the world’s largest center console yacht and is the
            only true luxurious center console yacht on the water. With
            unsurpassed horsepower and expansive amenities, all models are
            completely customizable vessels ranging between 39’-65’. HCB Yachts
            is committed to helping build the perfect luxury center console
            yacht to fit every enthusiasts' lifestyle.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default HCB;
