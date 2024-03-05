const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const path = require("path");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, "build")));

const allowedOrigins = [
  "http://18.223.93.100",
  "http://localhost:3000",
  "http://3.130.189.92",
  "https://www.megasails.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors());
// corsOptions
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "broker@megasails.com",
    pass: "Mega#$2023",
  },
});
app.use(bodyParser.json());

app.post("/api/send-email-yachtdetails*", async (req, res) => {
  try {
    const { recipientEmail, subject, message } = req.body;

    if (!recipientEmail || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const {
      NM_firstName,
      NM_lastName,
      ID_email,
      NO_phoneNumber,
      CA_category,
      DS_comments1,
      NM_docId,
    } = message;

    const mailOptions = {
      from: "broker@megasails.com",
      to: recipientEmail,
      subject: "American Yacht Group - Yacht Broker Services",
      text: `
Dear ${NM_firstName} ${NM_lastName},

Thank you for choosing American Yacht Group for your yacht broker services. Our dedicated Yacht Experts will contact you soon.

Best Regards,
American Yacht Group
      `,
    };
    const mailOptions1 = {
      from: "broker@megasails.com",
      to: "broker@megasails.com",
      subject: "American Yacht Group - Yacht Broker Services",
      text: `
    Name: ${NM_firstName} ${NM_lastName}
    Email: ${ID_email}
    Phone: ${NO_phoneNumber}
    Category: ${CA_category}
    Comments: ${DS_comments1}
    DocId:${NM_docId}
    Link: https://americanyachtgroup.com/yachtdetails/${NM_docId}
          `,
    };

    // Send email
    await transporter.sendMail(mailOptions); //Customer
    await transporter.sendMail(mailOptions1); //AYG team

    console.log("Email sent successfully");
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});

app.post("/api/send-email-contact*", async (req, res) => {
  try {
    const { recipientEmail, subject, message } = req.body;

    if (!recipientEmail || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const {
      NM_firstName,
      NM_lastName,
      ID_email,
      NO_phoneNumber,
      CA_category,
      DS_comments1,
    } = message;

    const mailOptions2 = {
      from: "broker@megasails.com",
      to: recipientEmail,
      subject: "American Yacht Group - Yacht Contact Inquiry",
      text: `
Dear ${NM_firstName} ${NM_lastName},

Thank you for choosing American Yacht Group for your yacht brokerage services. Our dedicated Yacht Experts will contact you soon.

Best Regards,
American Yacht Group
      `,
    };
    const mailOptions3 = {
      from: "broker@megasails.com",
      to: "broker@megasails.com",
      subject: "American Yacht Group - Yacht Contact Inquiry",
      text: `
    Name: ${NM_firstName} ${NM_lastName}
    Email: ${ID_email}
    Phone: ${NO_phoneNumber}
    Category: ${CA_category}
    Comments: ${DS_comments1}    
          `,
    };

    // Send email
    await transporter.sendMail(mailOptions2); //Customer
    await transporter.sendMail(mailOptions3); //AYG team

    console.log("Email sent successfully");
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});

app.post("/api/send-email-service*", async (req, res) => {
  try {
    const { recipientEmail, subject, message } = req.body;

    if (!recipientEmail || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const {
      NM_firstName,
      NM_lastName,
      ID_email,
      NO_phoneNumber,
      CA_category,
      DS_comments1,
    } = message;

    const mailOptions4 = {
      from: "broker@megasails.com",
      to: recipientEmail,
      subject: "American Yacht Group - Yacht Service Inquiry",
      text: `
Dear ${NM_firstName} ${NM_lastName},

Thank you for choosing American Yacht Group for your yacht ${CA_category} services.Our dedicated Yacht Experts will contact you soon.

Best Regards,
American Yacht Group
      `,
    };
    const mailOptions5 = {
      from: "broker@megasails.com",
      to: "broker@megasails.com",
      subject: "American Yacht Group - Yacht Service Inquiry",
      text: `
    Name: ${NM_firstName} ${NM_lastName}
    Email: ${ID_email}
    Phone: ${NO_phoneNumber}
    Category: ${CA_category}
    Comments: ${DS_comments1}    
          `,
    };

    // Send email
    await transporter.sendMail(mailOptions4); //Customer
    await transporter.sendMail(mailOptions5); //AYG team

    console.log("Email sent successfully");
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});

app.post('/api/send-email-careers', upload.single('FL_file'), async (req, res) => {
  try {
    const { NM_firstName, NM_lastName, ID_email, NO_phoneNumber, CA_category, DS_comments1 } = req.body;
    const file = req.file;
    
    const mailOptions6 = {
      from: 'broker@megasails.com',
      to: ID_email,
      subject: 'Application Submission',
      text: `
      Dear ${NM_firstName} ${NM_lastName},

      Thank you for application. Our team will contact you soon.
      
      Best Regards,
      American Yacht Group
      `,
      attachments: [
        {
          filename: file.originalname,
          content: file.buffer
        }
      ]
    };
    const mailOptions7 = {
      from: "broker@megasails.com",
      to: "broker@megasails.com",
      subject: "American Yacht Group - Yacht Broker Services",
      text: `
    Name: ${NM_firstName} ${NM_lastName}
    Email: ${ID_email}
    Phone: ${NO_phoneNumber}
    Category: ${CA_category}
    Comments: ${DS_comments1}   
          `,
          attachments: [
            {
              filename: file.originalname,
              content: file.buffer
            }
          ]
    };
    // Send email
    await transporter.sendMail(mailOptions6); //Candidate
    await transporter.sendMail(mailOptions7); //AYG Team


    console.log('Email sent successfully');
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: error.message || 'An error occurred' });
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/api/documents*", async (req, res) => {
  try {
    const {
      start = 0,
      rows = 25,
      make = null,
      condition = null,
      boatClass = null,
      length = null,
      price = null,
      year = null,
      DocumentID = null,
    } = req.query;
    const response = await axios.get(
      "https://services.boats.com/pls/boats/search",
      {
        params: {
          fields:
            "DocumentID,numResults,CompanyName,LengthOverall,NumberOfEngines,AdditionalDetailDescription,TotalEnginePowerQuantity,length,owner,LengthOverall,OwnerPartyID,salesrep,SalesRepPartyID,ModelYear,make,MakeString,Model,Images,BoatName,BoatLocation,SaleClassCode,BoatClassCode,Office,PriceHideInd,Price,GeneralBoatDescription,price=${minPrice}:${maxPrice}|USD,length=${minLength}:${maxLength},year=${minYear}:${maxYear},price=${minPrice}:${maxPrice}|USD",
          key: "gs4g3hpp688c",
          start,
          rows,
          make,
          condition,
          price,
          length,
          year,
          sort: "ModelYear|desc",
          class: boatClass,
          DocumentID,
        },
      }
    );

    const responseData = response.data.data.results.map((result) => {
      const {
        DocumentID,
        CompanyName,
        owner,
        length,
        OwnerPartyID,
        salesrep,
        SalesRepPartyID,
        ModelYear,
        MakeString,
        NumberOfEngines,
        LengthOverall,
        TotalEnginePowerQuantity,
        AdditionalDetailDescription,
        Model,
        Images,
        BoatName,
        BoatLocation,
        SaleClassCode,
        BoatClassCode,
        Office,
        PriceHideInd,
        Price,
        GeneralBoatDescription,
      } = result;

      return {
        DocumentID,
        CompanyName,
        owner,
        length,
        OwnerPartyID,
        LengthOverall,
        NumberOfEngines,
        TotalEnginePowerQuantity,
        AdditionalDetailDescription,
        salesrep,
        SalesRepPartyID,
        ModelYear,
        MakeString,
        Model,
        Images,
        BoatName,
        BoatLocation,
        SaleClassCode,
        BoatClassCode,
        Office,
        PriceHideInd,
        Price,
        GeneralBoatDescription,
      };
    });

    const numResults = response.data.data.numResults;
    const totalPages = Math.ceil(numResults / rows);

    res.json({ data: { results: responseData, numResults, totalPages } });
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});

app.get("/api/unique-makes*", async (req, res) => {
  try {
    const uniqueMakesSet = new Set();

    // Make multiple requests with pagination parameters
    const rowsPerPage = 25;
    const response = await axios.get(
      "https://services.boats.com/pls/boats/search",
      {
        params: {
          fields: "MakeString",
          key: "gs4g3hpp688c",
          rows: rowsPerPage,
          start: 0, // Always start from the beginning for unique-makes
        },
      }
    );

    const totalPages = Math.ceil(response.data.data.numResults / rowsPerPage);

    for (let page = 1; page <= totalPages; page++) {
      const response = await axios.get(
        "https://services.boats.com/pls/boats/search",
        {
          params: {
            fields: "MakeString",
            key: "gs4g3hpp688c",
            rows: rowsPerPage,
            start: (page - 1) * rowsPerPage,
          },
        }
      );

      const makes = response.data.data.results.map(
        (result) => result.MakeString
      );

      makes.forEach((make) => uniqueMakesSet.add(make));
    }

    const uniqueMakesArray = Array.from(uniqueMakesSet);

    res.json({ data: { uniqueMakes: uniqueMakesArray } });
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
