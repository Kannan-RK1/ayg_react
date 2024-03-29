import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import NavBar from "../Components/Navbar";
import { Link } from "react-router-dom";

const NewsEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "100px",
        }}
      ></div>
      <img
        src="https://eventspassstorage7539.blob.core.windows.net/ocs-public/Marketplace/1364/themeImage-638309963851394299.jpg"
        alt=""
        className="img-fluid"
      />

      <Container fluid>
        <Row className="g-3 py-3">
          {/* <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://www.boatbeds.com/wp-content/uploads/2018/12/palm-beach-international-boat-show-600x600-400x400.jpg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">MARCH 21-24, 2024</Card.Text>
                  <Card.Title className="text-primary-emphasis">
                    PALM BEACH INTERNATIONAL BOAT SHOW
                  </Card.Title>
                  <Button
                    variant=""
                    href="https://www.pbboatshow.com/en/home.html#"
                  >
                    Book Now <i class="fa-solid fa-angles-right"></i>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col> */}

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://hcbyachts.com/wp-content/uploads/2024/03/48-sunrise-scaled.jpg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">Feb 24, 2024</Card.Text>
                  <Card.Title className="text-primary-emphasis text-uppercase">
                    New HCB Campeon Wins Prestigious Innovation Award!
                  </Card.Title>
                  <Link to={`/newsDetails/feb24`} variant="" className="btn">
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://ayg.s3.us-east-2.amazonaws.com/hurricane-season.jpeg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">Aug 28, 2023</Card.Text>
                  <Card.Title className="text-primary-emphasis">
                    PREPARING YOUR BOAT FOR HURRICANE
                  </Card.Title>
                  <Link to={`/newsDetails/aug28`} variant="" className="btn">
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://ayg.s3.us-east-2.amazonaws.com/hcb-fishing.jpg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">August 3, 2023</Card.Text>
                  <Card.Title className="text-primary-emphasis">
                    HCB 39′ SPECIALE TURNS HEADS AT THE 24TH ANNUAL MBGFC
                    BILLFISH LIMITED TOURNAMENT
                  </Card.Title>
                  <Link to={`/newsDetails/aug3`} variant="" className="btn">
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsEvents;
