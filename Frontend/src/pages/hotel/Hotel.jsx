import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263366704.jpg?k=79ebc7c04eac127861fb75518cc1acfce90618d4240e61643e795fe3f4aae202&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/220488400.jpg?k=5809009b3c33ccefa6d0e56a21bf0da852fc8fab64f4eb7bec917381db1f40a2&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/220488453.jpg?k=1e26f48a19efcee4edd5ba451e45237d3b05216eece2a614bc9918422388e813&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/220488411.jpg?k=dee85bad5bcaa889b05704fbbfe1422aaa3113a052c042d35c78ae4cce626294&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/220488416.jpg?k=10fc918ef612f3c0314f320b62ff6f4920417573686004568a97f69ab9f93a70&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/220488518.jpg?k=cc0a9dad1b73b67b10b7b504a5a672ac3af5afe943ce95a2efec5f11a21475b1&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/220488440.jpg?k=d2ef720b1ccbf558c9f89f223586bd33c52b5af2b43eeef74b69e46b29853275&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/245515835.jpg?k=65360016c22607ba1e94ed86c98a1d2dda7d6f2a5c81dd9cb7dcbbd4f3f1487a&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/220488680.jpg?k=690f70266f1ead73fc59c268e922290b3f7e5180f74ea93110283a7b538123d2&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 8 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 8 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve Or Book Now!</button>
          <h1 className="hotelTitle">Hotel Seven Hills Inn</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Millenium Plaza, New T2 Airport Link Road, Near Sakinaka,
              Telephone Exchange, Andheri East,
            </span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500m From Centre
          </span>
          <span className="hotelPriceHighlight">
            Book A Stay Over ₹41,000 At This Property & Get A Free Airport Taxi!
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt="hotelImg"
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Welcoming Lodgify.com guests to our abode!
              </h1>
              <p className="hotelDesc">
                Situated 2.8 km from Phoenix Market City Mall, Hotel Seven Hills
                Inn offers 3-star accommodation in Mumbai and has a restaurant.
                With a shared lounge, the 3-star hotel has air-conditioned rooms
                with free WiFi, each with a private bathroom. The accommodation
                features a shared kitchen and room service for guests. The rooms
                at the hotel are fitted with a TV with cable channels, a kitchen
                and a dining area. All guest rooms have a wardrobe. Guests at
                Hotel Seven Hills Inn can enjoy a continental breakfast. Staff
                at the 24-hour front desk speak English and Hindi. Powai Lake is
                5.5 km from the accommodation, while Indian Institute of
                Technology, Bombay is 6.1 km from the property. The nearest
                airport is Chhatrapati Shivaji International Mumbai Airport, a
                few steps from Hotel Seven Hills Inn.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect For A 19-Night Stay!</h1>
              <span>
                Guests at Hotel Seven Hills Inn can enjoy a phenomenal
                experience
              </span>
              <h2>
                <b>₹ 41,630</b> (19 Nights)
              </h2>
              <button>Reserve / Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
export default Hotel;
