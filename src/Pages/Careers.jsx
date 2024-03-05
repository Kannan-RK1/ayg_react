import React, { useRef, useState } from "react";
import NavBar from '../Components/Navbar'
import { Accordion, Button, Col, Container, Form, Row } from 'react-bootstrap'
import axios from "axios";
import Express_URL from "../Components/Express_URL";

const Careers = () => {
    const formRef = useRef();

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const [selectedService, setSelectedService] = useState("");

  const handleButtonClick = (service) => {
    setSelectedService(service);
    setFormData({
      ...formData,
      CA_category: service,
    });
    scrollToForm();
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
    NM_firstName: '',
    NM_lastName: '',
    ID_email: '',
    NO_phoneNumber: '',
    CD_city: '',
    CD_state: '',
    CD_country: '',
    CA_category: '',
    DS_comments1: '',
    FL_file: null,
  });

  const handleChange = (e) => {    
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'FL_file' ? files[0] : value
    }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const formDataToSend = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    formDataToSend.append(key, value);
  });

  try {
    await axios.post('/api/send-email-careers', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    alert('Form submitted successfully!');
    setFormData({
      ...formData,
      NM_firstName: '',
      NM_lastName: '',
      ID_email: '',
      NO_phoneNumber: '',
      CD_city: '',
      CD_state: '',
      CD_country: '',
      CA_category: '',
      DS_comments1: '',
      FL_file: null
    });
  } catch (error) {
    console.error('Error submitting form:', error);
  }
  };
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

<section class="careers-banner my-5">
      <div class="container p-5" style={{backgroundColor: "#eeeeee"}}>
        <div class="row mb-5">
          <div class="col-12 col-md-6 d-flex align-items-center">
            <div>
              <p class="mb-0 text-warning fw-bold">CAREER OPPORTUNITIES</p>
              <h1>
                DO YACHTS EXCITE YOU? JOIN US & GET EXCITED DAILY. SEND US YOUR
                RESUME.
              </h1>
              <p class="mb-0">
                At American Yacht Group, each employee plays a vital role in our
                success. The “AYG Culture” is inclusive, diverse, and values
                each employee as a critical element to our success. Come join
                our crew by applying to one of our active positions below or
                submitting your resume for future consideration.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img
              src="https://americanyachtgroup.com/wp-content/uploads/2023/11/FLIBS3.jpg"
              alt=""
              class="img-fluid mt-3"
            />
          </div>
          
          <div class="col-12 mt-5">
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>YACHTS SERVICE ADVISOR</Accordion.Header>
        <Accordion.Body>
          <ul>
                      <li>
                        4+ years’ experience or more working as a marine service
                        advisor with technician experience.
                      </li>
                      <li>
                        Maintain accurate promise dates based on Customer needs
                        and supplier/shop capacity.
                      </li>
                      <li>
                        Initiate and track work orders to completion while
                        maintaining communication with Customer.
                      </li>
                      <li>
                        Promptly respond to Customer requests for service
                        performing walk-arounds whenever possible.
                      </li>
                      <li>
                        Proactively develop, deliver and follow-up quotes for
                        service based on Technical Evaluations.
                      </li>
                      <li>
                        Maintain accurate pricing for service work performed.
                      </li>
                      <li>
                        Engage Sub-Contractors to determine quality, price, and
                        delivery.
                      </li>
                      <li>
                        Select solutions and products best suited to meet the
                        needs of our customers.
                      </li>
                    </ul>
                    <button type="button"  onClick={() => handleButtonClick("YACHTS SERVICE ADVISOR")} class="btn custom-contact-btn btn-sm">
                      Apply Now!
                    </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>YACHTS SERVICE TECHNICIAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                      <li>
                        4+ years’ experience or more working as a marine
                        technician.
                      </li>
                      <li>
                        Perform diagnostics, maintenance and repair of all types
                        of marine engines: Outboards/Inboards
                      </li>
                      <li>
                        Performing work on boats and yachts, service as needed
                      </li>
                      <li>
                        Handle multiple work orders to document work that has
                        been performed
                      </li>
                      <li>
                        Troubleshoot, repair and install electrical accessories
                        in boats including bilge pumps, charging systems, and
                        steering systems
                      </li>
                      <li>
                        Major Engine Manufacturer Certifications (Yamaha,
                        Mercury, Etc).
                      </li>
                      <li>
                        Knowledge of modern GPS/Chartplotter units (Garmin,
                        Simrad, Furuno etc).
                      </li>
                    </ul>
                    <button type="button"  onClick={() => handleButtonClick("YACHTS SERVICE TECHNICIAN")} class="btn custom-contact-btn btn-sm">
                      Apply Now!
                    </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>MOBILE YACHT TECHNICIAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                      <li>
                        4+ years’ experience or more working as a marine
                        technician.
                      </li>
                      <li>
                        Positive attitude and excellent attention to detail.
                      </li>
                      <li>
                        Works well with minimum supervision, alone or with team
                        members.
                      </li>
                      <li>Takes pride in their work.</li>
                      <li>
                        Clearly documents time, work completed, and hours.
                      </li>
                      <li>
                        Major Engine Manufacturer Certifications (Yamaha,
                        Mercury, Etc).
                      </li>
                      <li>
                        Knowledge of modern GPS/Chartplotter units (Garmin,
                        Simrad, Furuno etc).
                      </li>
                    </ul>
                    <button type="button"  onClick={() => handleButtonClick("MOBILE YACHT TECHNICIAN")} class="btn custom-contact-btn btn-sm">
                      Apply Now!
                    </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>ELECTRICAL AND ELECTRONICS TECHNICIAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                      <li>
                        4+ years’ experience or more working as a marine
                        electronics &nbsp; technician
                      </li>
                      <li>
                        Should have a good working understanding of 12V, 24V,
                        110V, and 220V systems.
                      </li>
                      <li>
                        Perform basic installation, diagnosis, and repair of
                        marine navigational, communication, and entertainment
                        and computer systems following blueprints and
                        manufacturers’ specifications, using hand-tools and test
                        instrumentation.
                      </li>
                      <li>
                        Technician should expect to work with electronics brands
                        such as Furuno, Raymarine, Garmin, and various satellite
                        communications systems.
                      </li>
                      <li>
                        The ideal candidate should have working knowledge of
                        ABYC compliance; ABYC and/or NEMA certifications are a
                        plus.
                      </li>
                      <li>
                        Perform software programming as necessary to complete
                        installations.
                      </li>
                      <li>
                        Skilled in reading, drawing and interpreting blueprints,
                        wiring diagrams and schematics.
                      </li>
                      <li>
                        Test electronic components and circuits to diagnose and
                        locate defects using signal generators, ammeters, and
                        voltmeters.
                      </li>
                      <li>
                        May operate equipment to check functioning of newly
                        installed equipment to evaluate system performance under
                        actual operating conditions.
                      </li>
                      <li>Develops material lists for project completion.</li>
                      <li>
                        Follow manufacturers’ requirements for repair or return
                        of defective equipment
                      </li>
                    </ul>
                    <button type="button"  onClick={() => handleButtonClick("ELECTRICAL AND ELECTRONICS TECHNICIAN")} class="btn custom-contact-btn btn-sm">
                      Apply Now!
                    </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>YACHT PAINT TECHNICIAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                      <li class="ayg-p-2">
                        Prepares wood, metal, fiberglass or other surfaces for
                        painting and varnishing.
                      </li>
                      <li class="ayg-p-2">
                        Tape or otherwise protect surrounding surfaces such as
                        decks, hardware, windows during work process.
                      </li>
                      <li class="ayg-p-2">
                        Cleans, sands, and smooth surfaces, using appropriate
                        tools, such as scrapers, sandpaper, steel wool, or
                        chemicals.
                      </li>
                      <li class="ayg-p-2">
                        Full knowledge of the requirements for varnish prepping
                        and sealing and the products utilized.
                      </li>
                      <li class="ayg-p-2">
                        Perform small repairs to surfaces to be painted using
                        appropriate materials and tools.
                      </li>
                      <li class="ayg-p-2">
                        Applies coats of paint, varnish, stain, enamel or
                        lacquer, as appropriate, to decorate and protect
                        interior and exterior surfaces, trimmings and fixtures
                        of boats.
                      </li>
                      <li class="ayg-p-2">
                        Cleans brushes and work area, using solvent or soap and
                        water.
                      </li>
                      <li class="ayg-p-2">
                        Sets up and dismantles staging following OSHA staging
                        guidelines
                      </li>
                      <li class="ayg-p-2">
                        Follow prescribed safety rules and regulations and
                        maintain safe, clean work area.
                      </li>
                    </ul>
                    <button type="button"  onClick={() => handleButtonClick("YACHT PAINT TECHNICIAN")} class="btn custom-contact-btn btn-sm">
                      Apply Now!
                    </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>A/C AND REFRIGERATION TECHNICIAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                      <li>
                        Perform installations, repairs, overhauls, and start-ups
                        of marine HVAC and refrigeration systems.
                      </li>
                      <li>
                        Use a variety of hand tools, following blueprints,
                        wiring diagrams, piping schemes or engineering
                        specifications, to diagnose and repair units.
                      </li>
                      <li>
                        Identify, analyze, diagnose, and repairs systems and
                        products onboard vessels
                      </li>
                      <li>
                        Perform preventative maintenance, survey, replacement,
                        and modify as needed or requested by customers
                      </li>
                      <li>
                        Perform service on warranty and non-warranty systems.
                      </li>
                      <li>
                        Prepare for on-site installation and repairs by
                        examining boat layout, anticipate difficulties, gather
                        materials and coordinate on-site work, as necessary.
                      </li>
                      <li>
                        Document work by completing paperwork on each job and
                        maintain files and reports.
                      </li>
                      <li>
                        Experience with water source heat pumps and
                        refrigeration is a plus.
                      </li>
                    </ul>
                    <button type="button"  onClick={() => handleButtonClick("A/C AND REFRIGERATION TECHNICIAN")} class="btn custom-contact-btn btn-sm">
                      Apply Now!
                    </button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </div>
          <div class="text-center mt-5">
            <h1>EQUAL EMPLOYMENT OPPORTUNITIES</h1>
            <p class="mb-0" style={{textAlign:"justify"}}>
              American Yacht Group provides equal employment opportunities to
              all employees and applicants for employment and prohibits
              discrimination and harassment of any type without regard to race,
              color, religion, age, sex, national origin, disability status,
              genetics, protected veteran status, sexual orientation, gender
              identity or expression, or any other characteristic protected by
              federal, state or local laws.
            </p>
            <p class="mb-0" style={{textAlign:"justify"}}>
              This policy applies to all terms and conditions of employment,
              including recruiting, hiring, placement, promotion, termination,
              layoff, recall, transfer, leaves of absence, compensation and
              training.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="c-contact-us" style={{ backgroundColor: "#ebf0f7" }}>
        <Container fluid className="col-lg-11 py-3">
          <div class="text-center">
            <h4 class="py-2 c-heading">
              Get In Touch for Full-Circle Yacht Ownership Experience
            </h4>
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
                    value={selectedService}
                    required
                    onChange={(e) => {
                      setSelectedService(e.target.value);
                      // manually selects a service
                      setFormData({
                        ...formData,
                        CA_category: e.target.value,
                      });
                    }}
                  >
                    <option value="">Select Position...</option>
                    <option value="YACHTS SERVICE ADVISOR">YACHTS SERVICE ADVISOR</option>
                    <option value="YACHTS SERVICE TECHNICIAN">YACHTS SERVICE TECHNICIAN</option>
                    <option value="MOBILE YACHT TECHNICIAN">MOBILE YACHT TECHNICIAN</option>
                    <option value="ELECTRICAL AND ELECTRONICS TECHNICIAN">ELECTRICAL AND ELECTRONICS TECHNICIAN</option>
                    <option value="YACHT PAINT TECHNICIAN">YACHT PAINT TECHNICIAN</option>
                    <option value="A/C AND REFRIGERATION TECHNICIAN">A/C AND REFRIGERATION TECHNICIAN</option>
                   
                  </Form.Control>
                </Form.Group>

                <Form.Control
                                        type="file"
                                        name="FL_file"
                                        onChange={handleChange}
                                        required
                                    />

      
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
              <img
                src="https://hcbyachts.com/wp-content/uploads/2023/11/HCB-48-Rendering_White_StarboardStern-Transparetn-Website-1536x675.png"
                alt=""
                className="img-fluid"
              />
              {/* src={my_img} */}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Careers