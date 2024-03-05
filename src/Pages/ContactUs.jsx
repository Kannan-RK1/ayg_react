import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import "react-phone-number-input/style.css";
import my_img from "../Images/banner_hcb.png";
import { ref, push } from "firebase/database";
import { database } from "../firebase";
import axios from "axios";
import Express_URL from "../Components/Express_URL";
import prof from "../Images/ayg-icon.jpg"

function Contact() {
  const formRef = useRef();

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const formatPhoneNumber = (input) => {
    // Remove non-digit characters
    const phoneNumber = input.replace(/\D/g, "");

    // Apply the desired format
    const formattedPhoneNumber = phoneNumber.replace(
      /^(\d{3})(\d{3})(\d{4})$/,
      "($1) $2-$3"
    );

    return formattedPhoneNumber;
  };

  const [formData, setFormData] = useState({
    NM_firstName: "",
    NM_lastName: "",
    ID_email: "",
    NO_phoneNumber: "",
    CD_city: "",
    CD_state: "",
    CD_country: "",
    CA_category: "",
    DS_comments1: "",
    DS_comments2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "NO_phoneNumber") {
      // Remove non-digit characters
      const phoneNumber = value.replace(/\D/g, "");

      // Limit to 10 digits
      if (phoneNumber.length <= 10) {
        // Apply the desired format
        const formattedValue = formatPhoneNumber(phoneNumber);
        setFormData({ ...formData, [name]: formattedValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Set to true for 12-hour clock format
    });
    try {
      // Push the form data to the "inquiries" collection in Firebase
      const inquiriesRef = ref(database, "inquiries");
      await push(inquiriesRef, {
        ...formData,
        submitDateTime: formattedDateTime,
      });
      // Show success alert
      alert("Form submitted successfully!");
      // Send email
      await axios.post(`${Express_URL}/send-email-contact`, {
        ...formData,
        recipientEmail: formData.ID_email,
        subject: "Lead email",
        message: formData,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setFormData({
      NM_firstName: "",
      NM_lastName: "",
      ID_email: "",
      NO_phoneNumber: "",
      CD_city: "",
      CD_state: "",
      CD_country: "",
      CA_category: "",
      DS_comments1: "",
      DS_comments2: "",
    });
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "100px",
        }}
      ></div>

      <section className="py-4 py-lg-5" style={{ backgroundColor: "#ebf0f7" }}>
        <Container>
          <Row className="my-md-3 my-lg-0">
            <Col>
              <h3 className="text-center fw-bold mb-3">
                Our teams are ready to assist
              </h3>
              <h6 className="text-center lh-base" style={{ fontSize: "14px" }}>
                Join our network and stay connected by reaching out through the
                provided contact details.
              </h6>
              <p
                className="text-center"
                style={{
                  color: "#537FE7",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                "We'd love to support you!"
              </p>
              <div className="text-center">
                <Button
                  className="lh-base mt-3"
                  variant="outline-dark"
                  onClick={scrollToForm}
                >
                  Get Help
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 py-lg-0">
        <Container>
          <Row className="my-md-3 mt-lg-5">
            <Col>
              <h4 className="text-center mb-3">
                Get in Touch:{" "}
                <span className="fw-bold">Feel free to reach out to us</span>
              </h4>
              <h6
                className="text-center mb-0 col-md-10 mx-auto lh-base mb-4"
                style={{ fontSize: "14px" }}
              >
                If you're considering purchasing a yacht, our American Yacht Group broker commits to dedicating the necessary time to assist you in finding the perfect vessel. Your yacht broker will guide you through the entire process, from presenting offers to arranging sea trials and surveys. American Yacht Group has a proven track record of assisting clients worldwide in acquiring a diverse range of vessels, including superyachts, catamarans, sailboats, trawlers, and more.
              </h6>
             
            </Col>
          </Row>
        </Container>
      </section>

      
    <section>
      <div class="container c-contact py-5">
        <div class="text-center">
          <h4 class="mb-2 c-heading">SALES OFFICES</h4>
          <hr class="hr-1" />
        </div>
        <div class="row g-4">
          <div class="col-sm-12 col-md-6">
            <div class="border-2 border-white bg-white rounded-3 shadow">
              <div class="row g-0">
                <div class="col-3 p-3">
                  <img
                    src={prof}
                    alt="profile"
                    class="rounded-circle img-fluid"
                  />
                </div>
                <div class="col-9">
                  <div class="card border-0">
                    <div class="card-body">
                      <h1 class="card-title fw-bold c-contact-h">
                        AYG CORPORATE OFFICE
                      </h1>
                      <p class="card-text mb-3 c-contact-p">
                        <a href="https://www.google.com/maps/place/303+Banyan+Blvd,+West+Palm+Beach,+FL+33401,+USA/@26.7146347,-80.0521389,17z/data=!3m1!4b1!4m6!3m5!1s0x88d8d688354d4eb9:0x1268d29a15238587!8m2!3d26.7146347!4d-80.0521389!16s%2Fg%2F11bw3ym2cd?entry=ttu"
                          ><i class="fa-solid fa-location-dot"></i> 303 Banyan
                          Blvd.<br />West Palm Beach, FL 33401</a
                        >
                      </p>
                      <p class="card-text mb-1 c-contact-p d-none d-md-block d-lg-block">
                        <span 
                          ><i class="fa-solid fa-phone"></i> ( 954 ) 802-7474</
                        span>
                      </p>
                      <p class="card-text mb-1 c-contact-p d-md-none d-lg-none">
                        <a href="tel:954-802-7474"
                          ><i class="fa-solid fa-phone"></i> ( 954 ) 802-7474</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="border-2 border-white bg-white rounded-3 shadow">
              <div class="row g-0">
                <div class="col-3 p-3">
                  <img
                    src={prof}
                    alt="profile"
                    class="rounded-circle img-fluid"
                  />
                </div>
                <div class="col-9">
                  <div class="card border-0">
                    <div class="card-body">
                      <h1 class="card-title fw-bold c-contact-h">
                        JUPITER SALES CENTER AND MARINA
                      </h1>
                      <p class="card-text mb-3 c-contact-p">
                        <a href="https://www.google.com/maps/place/104+Breakwater+CourtJupiter,+FL+33477"
                          ><i class="fa-solid fa-location-dot"></i> 104
                          Breakwater Court<br />Jupiter, FL 33477</a
                        >
                      </p>
                      <p class="card-text mb-1 c-contact-p d-none d-md-block d-lg-block">
                        <span
                          ><i class="fa-solid fa-phone"></i> ( 561 ) 440-0690</
                        span>
                      </p>
                      <p class="card-text mb-1 c-contact-p d-md-none d-lg-none">
                        <a href="#"
                          ><i class="fa-solid fa-phone"></i> ( 561 ) 440-0690</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="border-2 border-white bg-white rounded-3 shadow">
              <div class="row g-0">
                <div class="col-3 p-3">
                  <img
                    src={prof}
                    alt="profile"
                    class="rounded-circle img-fluid"
                  />
                </div>
                <div class="col-9">
                  <div class="card border-0">
                    <div class="card-body">
                      <h1 class="card-title fw-bold c-contact-h">
                        ORANGE BEACH SALES CENTER
                      </h1>
                      <p class="card-text mb-3 c-contact-p">
                        <a href="https://www.google.com/maps/place/27075+Marina+Road+Orange+Beach,+AL+36561"
                          ><i class="fa-solid fa-location-dot"></i> 27075 Marina
                          Road.<br />Orange Beach, AL 36561</a
                        >
                      </p>
                      <p class="card-text mb-1 c-contact-p d-none d-md-block d-lg-block">
                        <span
                          ><i class="fa-solid fa-phone"></i> ( 251 ) 582-3221</span
                        >
                      </p>
                      <p class="card-text mb-1 c-contact-p d-md-none d-lg-none">
                        <a href="#"
                          ><i class="fa-solid fa-phone"></i> ( 251 ) 582-3221</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="border-2 border-white bg-white rounded-3 shadow">
              <div class="row g-0">
                <div class="col-3 p-3">
                  <img
                    src={prof}
                    alt="profile"
                    class="rounded-circle img-fluid"
                  />
                </div>
                <div class="col-9">
                  <div class="card border-0">
                    <div class="card-body">
                      <h1 class="card-title fw-bold c-contact-h">
                        NAPLES SALES AND DESIGN CENTER
                      </h1>
                      <p class="card-text mb-3 c-contact-p">
                        <a href="https://www.google.com/maps/place/436+Bayfront+Pl,+Naples,+FL+34102,+USA/@26.1440709,-81.7898657,17z/data=!3m1!4b1!4m6!3m5!1s0x88dae19b4cd2672f:0x3f2c5196213b69da!8m2!3d26.1440709!4d-81.7898657!16s%2Fg%2F11c5pkqg7t?entry=ttu"
                          ><i class="fa-solid fa-location-dot"></i> 436 Bayfront
                          Place.<br />Naples, FL 33102</a
                        >
                      </p>
                      <p class="card-text mb-1 c-contact-p d-none d-md-block d-lg-block">
                        <span
                          ><i class="fa-solid fa-phone"></i> ( 239 ) 384-9111</span
                        >
                      </p>
                      <p class="card-text mb-1 c-contact-p d-md-none d-lg-none">
                        <a href="#"
                          ><i class="fa-solid fa-phone"></i> ( 239 ) 384-9111</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="border-2 border-white bg-white rounded-3 shadow">
              <div class="row g-0">
                <div class="col-3 p-3">
                  <img
                    src={prof}
                    alt="profile"
                    class="rounded-circle img-fluid"
                  />
                </div>
                <div class="col-9">
                  <div class="card border-0">
                    <div class="card-body">
                      <h1 class="card-title fw-bold c-contact-h">
                        MIDWEST YACHT CLUB
                      </h1>
                      <p class="card-text mb-3 c-contact-p">
                        <a href="https://www.google.com/maps/place/1900+Victory+Ln,+Prospect,+KY+40059,+USA/@38.4139117,-85.6150178,17z/data=!3m1!4b1!4m6!3m5!1s0x886978107ef00001:0x3ed84ba83f4dd8bc!8m2!3d38.4139117!4d-85.6150178!16s%2Fg%2F11rp1x26jp?entry=ttu"
                          ><i class="fa-solid fa-location-dot"></i> 1900 Victory
                          Ln.<br />Prospect, KY 40059</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section class="py-5 c-contact" 
    >
      <div class="container">
        <div class="text-center">
          <h4 class="mb-2 c-heading">SERVICES OFFICES</h4>
          <hr class="hr-1" />
        </div>
        <div class="row g-4">
          <div class="col-sm-12 col-md-6">
            <div class="border-2 border-white bg-white rounded-3 shadow">
              <div class="row g-0">
                <div class="col-3 p-3">
                  <img
                    src={prof}
                    alt="profile"
                    class="rounded-circle img-fluid"
                  />
                </div>
                <div class="col-9">
                  <div class="card border-0">
                    <div class="card-body">
                      <h1 class="card-title fw-bold c-contact-h">
                        AYG/HCB SERVICE CENTER
                      </h1>
                      <p class="card-text mb-3 c-contact-p">
                        <a href="https://www.google.com/maps/place/2051+Griffin+Rd,+Fort+Lauderdale,+FL+33312,+USA/@26.0659725,-80.1660615,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9aa135bd0eb23:0xe9b639b4c590d5cd!8m2!3d26.0659725!4d-80.1660615!16s%2Fg%2F11bw3y1k76?entry=ttu"
                          ><i class="fa-solid fa-location-dot"></i> 2051 Griffin
                          Rd<br />Fort Lauderdale, FL 33312</a
                        >
                      </p>
                      <p class="card-text mb-1 c-contact-p d-none d-md-block d-lg-block">
                        <span
                          ><i class="fa-solid fa-phone"></i> ( 865 ) 406-6514</span
                        >
                      </p>
                      <p class="card-text mb-1 c-contact-p d-md-none d-lg-none">
                        <a href="#"
                          ><i class="fa-solid fa-phone"></i> ( 865 ) 406-6514</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="border-2 border-white bg-white rounded-3 shadow">
              <div class="row g-0">
                <div class="col-3 p-3">
                  <img
                    src={prof}
                    alt="profile"
                    class="rounded-circle img-fluid"
                  />
                </div>
                <div class="col-9">
                  <div class="card border-0">
                    <div class="card-body">
                      <h1 class="card-title fw-bold c-contact-h">
                        AYG FL KEYS REMOTE SERVICE HOTLINE
                      </h1>
                       {/* <p class="card-text mb-3 c-contact-p">
                        <a href="#"
                          ><i class="fa-solid fa-location-dot"></i> 104
                          Breakwater Court<br />Jupiter, FL 33477</a
                        >
                      </p>  */}
                      <p class="card-text mb-1 c-contact-p d-none d-md-block d-lg-block">
                        <span
                          ><i class="fa-solid fa-phone"></i> ( 865 ) 406-6514</
                        span>
                      </p>
                      <p class="card-text mb-1 c-contact-p d-md-none d-lg-none">
                        <a href="#"
                          ><i class="fa-solid fa-phone"></i> ( 865 ) 406-6514</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="c-contact-us" style={{ backgroundColor: "#ebf0f7" }}>
        <Container fluid className="col-lg-11 py-3">
          <div class="text-center">
            <h4 class="py-2 c-heading">Let's Get In Touch</h4>
            <hr class="hr-1" />
            <p>
              <small>
                Send us a messages and we will get back to you as soon as
                possible!
              </small>
            </p>
          </div>
          <Row>
            <Col md={12} lg={6} ref={formRef}>
              <Form onSubmit={handleSubmit}>
                <Row className="g-2">
                  <Col lg={6}>
                    <Form.Group controlId="firstName">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        placeholder="First Name"
                        name="NM_firstName"
                        value={formData.NM_firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group controlId="lastName">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="NM_lastName"
                        placeholder="Last Name"
                        value={formData.NM_lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2">
                  <Col lg={6}>
                    <Form.Group controlId="email">
                      <Form.Control
                        className="mb-2"
                        type="email"
                        placeholder="Email"
                        name="ID_email"
                        value={formData.ID_email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group controlId="phoneNumber">
                      <Form.Control
                        className="mb-2"
                        type="tel"
                        name="NO_phoneNumber"
                        placeholder="Phone (123) 456-7890"
                        value={formData.NO_phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2">
                  <Col lg={4}>
                    <Form.Group controlId="city">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="CD_city"
                        placeholder="City"
                        value={formData.CD_city}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group controlId="state">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        placeholder="State"
                        name="CD_state"
                        value={formData.CD_state}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group controlId="country">
                      {/* Change controlId to "country" */}
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="CD_country"
                        value={formData.CD_country}
                        placeholder="Country"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="selectService">
                  <Form.Control
                    className="mb-2"
                    as="select"
                    required
                    value={formData.CA_category}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        CA_category: e.target.value,
                      });
                    }}
                  >
                    <option value="">Inquire About</option>
                    <option value="I want to build my own">
                      I want to build my own
                    </option>
                    <option value="Request Information">
                      Request Information
                    </option>
                    <option value="Inquire about Trade">
                      Inquire about Trade
                    </option>
                    <option value="Inquire about Pricing and Inventory">
                      Inquire about Pricing and Inventory
                    </option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="comments">
                  <Form.Control
                    className="mb-2"
                    as="textarea"
                    placeholder="Leave your comments"
                    rows={3}
                    name="DS_comments1"
                    value={formData.DS_comments1}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="comments2">
                  <Form.Control
                    className="mb-2"
                    as="textarea"
                    rows={3}
                    name="DS_comments2"
                    placeholder="Do you currently own a boat? If so, what kind?"
                    value={formData.DS_comments2}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    className="btn custom-contact-btn text-uppercase"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
            <Col xs={12} md={12} lg={6} className="">
              <img src={my_img} alt="" className="img-fluid" />
              {/* src="https://hcbyachts.com/wp-content/uploads/2023/11/HCB-48-Rendering_White_StarboardStern-Transparetn-Website-1536x675.png" */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
