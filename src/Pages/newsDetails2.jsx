import React from "react";
//import my_logo from "../Images/my-logo-white.png";
import NavBar from "../Components/Navbar";

const NewsDetails2 = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>
      <section className="news-details my-5">
        <div className="container p-5 bg-body-tertiary">
          <div className="row mb-5">
            <div className="col-12 col-md-6 d-flex align-items-center text-primary-emphasis">
              <div>
                {/* <img
                  src={my_logo}
                  alt="..."
                  height="50px"
                  style={{ filter: "brightness(100) invert(1)", color: "#000" }}
                /> */}
                <p className="mb-1 fw-bold">Feb 24, 2024</p>
                <h1 className="fw-bold text-uppercase">
                  New HCB Campeon Wins Prestigious Innovation Award!
                </h1>
                {/* <p className="mb-0">
                  <i className="fa-solid fa-pen-nib" /> David Kastan
                </p> */}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://images.boatsgroup.com/images/1/59/87/9295987_20240312081956140_1_XLARGE.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
          </div>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            The HCB 48 Campeon, the newest and fastest model in the HCB fleet,
            has just won the coveted 2024 Miami International Boat Show
            Innovation Award. The Innovation Award, managed by the National
            Marine Manufacturers Association and judged by Boating Writers
            International, is one of the industry's most prestigious honors
            recognizing manufacturers who bring new, innovative products for the
            boating industry to market.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            “The HCB 48 Campeón takes the idea of the custom boat to a new level
            with an ultra-widescreen display that can be customized to the
            owner’s desires and a one-touch digital switching system that powers
            up only the systems specified by the skipper,” Gary Reich noted.
            “The build quality and attention to detail overshadowed entrants in
            the category.”
          </p>
          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis fw-bold"
          >
            Congratulations to the HCB Engineering Team!
          </p>
          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis"
          ></p>
          <div className="row mb-5">
            <div className="col-12 col-md-6">
              <img
                src="https://images.boatsgroup.com/images/1/59/87/9295987_20240312082026580_1_XLARGE.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-12 col-md-6">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                Innovation is at the core of our newest center console yacht.
                Equipped with the latest technological advancements, it offers
                you a seamless and unparalleled boating experience. The
                state-of-the-art digital systems screen and integrated
                entertainment features ensure that your journey is as enjoyable
                as the destination. It’s a center console yacht that not only
                keeps up with your lifestyle but also enhances it.
              </p>
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                From the sophisticated hull design to luxurious capabilities,
                this yacht is engineered for unmatched performance. The Campeon
                is built to cut through waves with grace and speed, offering you
                the exhilarating experience you crave. Every inch of this center
                console yacht is a testament to the art of custom craftsmanship.
              </p>
            </div>
          </div>
          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis fw-bold"
          >
            From the luxurious interiors to the carefully designed layout, every
            element can be tailored to your unique preferences, ensuring that
            your yacht truly reflects your individual style.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            For the bold, the Campeon is a statement of your boldness, a vessel
            of innovation, a performer on the water, a masterpiece of custom
            craftsmanship, and a beacon of quality.
          </p>
          {/* <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Close, But No Trophy As the tournament drew to a close, and although
            they did not win, the HCB Yacht had made its mark on the northern
            Gulf fishing community. With its seamless blend of luxury,
            innovation, and power, it stood as a testament to HCB Yachts’
            commitment to excellence. Beyond this tournament’s stage, the HCB
            Speciale will continue to inspire and empower anglers to embark on
            their own adventures, cherishing the beauty of the seas while
            safeguarding its inhabitants. With their eyes on future tournaments,
            the AYG crew and their HCB Yacht will remain an emblem of
            excellence, a symbol of responsible sportfishing, and a beacon of
            hope for the preservation of our marine treasures.
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default NewsDetails2;
