"use client";

import { useEffect, useState } from "react";
import {
  Bed,
  Bath,
  Coffee,
  FileText,
  Info,
  Phone,
  Users,
  Home,
  ThermometerSun,
  Mountain,
  Baby,
  Flame,
  CookingPot,
  Snowflake,
  CalendarX,
  Wifi,
  Car,
  Trees,
  Tv,
  Music,
  Dumbbell,
  Waves,
} from "lucide-react";
import "../../style/home/villa-overview.css";

const tabs = [
  "Overview",
  "About Us",
  "Experiences",
  "Amenities",
  "Gallery",
  "Rooms",
  "Location",
  "Reviews",
  "Refund Policy",
];

export default function VillaOverviewSection() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    "/images/dining/1.jpeg",
    "/images/dining/2.jpeg",
    "/images/dining/3.jpeg",
    "/images/dining/4.jpeg",
    "/images/dining/5.jpeg",

    "/images/exterior/1.jpeg",
    "/images/exterior/2.jpeg",
    "/images/exterior/3.jpeg",
    "/images/exterior/4.jpeg",

    "/images/play-area/1.jpeg",
    "/images/play-area/2.jpeg",
    "/images/play-area/3.jpeg",

    "/images/facade/1.jpeg",
    "/images/facade/2.jpeg",
    "/images/facade/3.jpeg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      tabs.forEach((tab) => {
        const id = tab.toLowerCase().replaceAll(" ", "-").replace("'", "");
        const section = document.getElementById(id);

        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 180 && top > -350) {
            setActiveTab(tab);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTab = (tab) => {
    const id = tab.toLowerCase().replaceAll(" ", "-").replace("'", "");
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const reviews = [
    {
      name: "Rishiv Sharma",
      avatar: "RS",
      time: "2 weeks ago on Google",
      rating: "5",
      review:
        "Excellent stay and service. The place was very beautiful and luxurious. Away from city chaos. Better to stay here than Shimla city. Just one suggestion, the hot water should be continuously available.",
      tags: ["Stay", "Luxury", "Service", "View"],
      link: "https://www.google.com/maps/contrib/101091405777478671558/reviews?hl=en",
    },

    {
      name: "Kuldeep Birwal",
      avatar: "KB",
      time: "2 weeks ago on Google",
      rating: "5",
      review:
        "An absolutely luxurious and serene escape in the hills of Himachal Pradesh. Shilayvas Cottages offers a perfect blend of elegance, comfort, and natural beauty. The cottages are beautifully designed with premium interiors, breathtaking valley views, and a peaceful atmosphere that instantly relaxes you.",
      tags: ["Luxury", "Hospitality", "Nature", "Food"],
      link: "https://www.google.com/maps/contrib/110258072321805160692/reviews?hl=en",
    },

    {
      name: "Shonick Roach",
      avatar: "SR",
      time: "2 weeks ago on Google",
      rating: "5",
      review:
        "Stayed at Shilayvas Cottage recently and honestly had a really peaceful experience. The location is beautiful with amazing mountain views and fresh air all around. The rooms were clean, cozy, and well maintained.",
      tags: ["Peaceful", "Mountain View", "Rooms", "Nature"],
      link: "https://www.google.com/maps/contrib/104413053557823133419/reviews/@29.8659165,76.980712,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <section className="villaDetail">
      <div className="villaDetail__tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => scrollToTab(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="villaDetail__layout">
        <div className="villaDetail__left">
          <section id="overview" className="villaBlock">
            <h1>Welcome to Shilayvas Cottages</h1>
            <h3>Shimla, Himachal Pradesh</h3>

            <div className="villaReview">
              <div className="villaLogoText">
                <span>
                  <img
                    src="/images/logo.png"
                    alt="Vieda Logo"
                    style={{ width: "100px" }}
                  />
                </span>
              </div>
              <a href="#">39 Reviews</a>
            </div>

            <div className="villaChips">
              <span>
                <Users size={20} /> Up to 45 Guests
              </span>

              <span>
                <Home size={20} /> 12 Cottages
              </span>

              <span>
                <Bath size={20} /> Bathtub
              </span>

              <span>
                <ThermometerSun size={20} /> Central Heating
              </span>

              <span>
                <FileText size={20} /> View Brochure
              </span>
            </div>

            <div className="villaGreat">
              <span>
                <Users size={18} />
                Ideal for Families & Couples
              </span>

              <span>
                <Mountain size={18} />
                Peaceful Location in Kufri
              </span>

              <span>
                <Baby size={18} />
                Spacious & Elegant Interiors
              </span>
              <a href="#" className="view-more-icons">
                +29 More{" "}
              </a>
            </div>
          </section>

          <section id="about-us" className="villaBlock">
            <h1>About Us</h1>
            <p>
              Nestled amidst the serene hills of Kufri, Shilayvas Cottages
              offers a luxurious mountain escape surrounded by breathtaking
              Himalayan views. Designed with elegant stone architecture and
              modern comforts, our premium cottages provide the perfect blend of
              nature, comfort, and privacy for families, couples, and travelers
              seeking a peaceful getaway near Shimla.
            </p>
            <br />
            <p>
              Our property features 12 beautifully crafted cottages equipped
              with spacious interiors, private balconies, cozy central heating,
              modern bathrooms with bathtubs, and panoramic valley views. Wake
              up to fresh mountain air, enjoy mesmerizing sunsets, and
              experience the calmness of the hills in a truly relaxing
              atmosphere.
            </p>
            <div className="policyBtns">
              <a href="#">
                <button>View More</button>
              </a>
              <a href="#">
                {" "}
                <button>Book Now</button>
              </a>
            </div>
          </section>

          <section
            id="experiences"
            className="villaExperienceSection villaBlock"
          >
            <h1>Shilayvas's Experiences</h1>

            <div className="villaExperienceGrid">
              <div className="villaExperienceCard">
                <img src="/images/exterior/2.jpeg" alt="Butler Service" />
                <div className="overlay"></div>
                <h3>Luxury Cottages</h3>
              </div>

              <div className="villaExperienceCard">
                <img src="/images/exterior/2.jpeg" alt="Meals" />
                <div className="overlay"></div>
                <h3>Elegant Interiors</h3>
              </div>

              <div className="villaExperienceCard">
                <img src="/images/exterior/2.jpeg" alt="Luxury Interiors" />
                <div className="overlay"></div>
                <h3>Peaceful Location in Kufri</h3>
              </div>

              <div className="villaExperienceCard">
                <img src="/images/dining/2.jpeg" alt="Curated Experiences" />
                <div className="overlay"></div>
                <h3>Restaurant</h3>
              </div>
            </div>
          </section>

          <section id="amenities" className="villaAmenitiesSection villaBlock">
            <div className="villaAmenitiesContainer">
              <h1>Our Amenities</h1>

              <div className="villaAmenitiesGrid">
                {/* Item */}

                <div className="villaAmenityItem">
                  <div className="villaAmenityIcon">
                    <Flame size={22} strokeWidth={1.7} />
                  </div>

                  <div className="villaAmenityContent">
                    <h4>Bonfire</h4>
                    <p>₹1,500</p>
                  </div>
                </div>

                <div className="villaAmenityItem">
                  <div className="villaAmenityIcon">
                    <CookingPot size={22} strokeWidth={1.7} />
                  </div>

                  <div className="villaAmenityContent">
                    <h4>Barbecue</h4>
                    <p>₹1,500 / Person</p>
                  </div>
                </div>

                <div className="villaAmenityItem">
                  <div className="villaAmenityIcon">
                    <Bath size={22} strokeWidth={1.7} />
                  </div>

                  <div className="villaAmenityContent">
                    <h4>Bathtub</h4>
                  </div>
                </div>

                <div className="villaAmenityItem">
                  <div className="villaAmenityIcon">
                    <Snowflake size={22} strokeWidth={1.7} />
                  </div>

                  <div className="villaAmenityContent">
                    <h4>Centralized AC</h4>
                  </div>
                </div>

                <div className="villaAmenityItem">
                  <div className="villaAmenityIcon">
                    <CalendarX size={22} strokeWidth={1.7} />
                  </div>

                  <div className="villaAmenityContent">
                    <h4>Cancellation Policy</h4>
                    <p>7 Days Before Check-In</p>
                  </div>
                </div>

                <div className="villaAmenityItem">
                  <div className="villaAmenityIcon">
                    <Wifi size={22} strokeWidth={1.7} />
                  </div>

                  <div className="villaAmenityContent">
                    <h4>Free Wi-Fi</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="gallery" className="villaImageGallerySection villaBlock">
            <div className="villaImageGalleryContainer">
              <h1>Our Gallery</h1>

              <div className="villaImageGalleryGrid">
                {galleryImages.map((img, index) => (
                  <div
                    className="villaImageGalleryCard"
                    key={index}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt="Villa" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Popup */}

          {activeImage && (
            <div
              className="villaGalleryPopupOverlay"
              onClick={() => setActiveImage(null)}
            >
              <div className="villaGalleryPopupContent">
                <img src={activeImage} alt="Popup" />
              </div>
            </div>
          )}

          <section id="rooms" className="luxuryCottageSection villaBlock">
            <div className="luxuryCottageContainer">
              <h1>Luxury Cottage 12</h1>

              {/* Images Row */}

              <div className="luxuryCottageGrid">
                <div className="luxuryCottageCard">
                  <img src="/images/calmara/1.jpg" alt="Luxury Cottage" />
                </div>

                <div className="luxuryCottageCard">
                  <img src="/images/calmara/2.jpg" alt="Luxury Cottage" />
                </div>

                <div className="luxuryCottageCard">
                  <img src="/images/calmara/3.jpg" alt="Luxury Cottage" />
                </div>
              </div>

              {/* Description */}

              <div className="luxuryCottageContent">
                <p style={{ textAlign: "justify" }}>
                  Experience a premium luxury stay surrounded by breathtaking
                  mountain views, elegant interiors, serene landscapes, and
                  peaceful nature. Luxury Cottage offers the perfect blend of
                  comfort, privacy, warmth, and modern amenities designed for
                  families, couples, friends, and memorable group getaways.
                  Enjoy spacious living areas, cozy bedrooms, scenic outdoor
                  spaces, and an unforgettable retreat experience in the heart
                  of nature.
                </p>

                <div className="policyBtns">
                  <a href="#">
                    <button>View More</button>
                  </a>
                  <a href="#">
                    {" "}
                    <button>Book Now</button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="location" className="villaLocationSection villaBlock">
            <div className="villaLocationContainer">
              <h1>Our Location</h1>

              {/* Map */}

              <div className="villaLocationMapWrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.2834029531!2d77.2478678!3d31.0407671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390581001eeee7bf%3A0xdb28500a65c076dc!2sShilayvas%20Cottages!5e1!3m2!1sen!2sin!4v1780087047526!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Villa Location"
                ></iframe>
              </div>

              {/* Description */}

              <div className="villaLocationDescription ">
                <p>
                  Located in the beautiful hills of Shimla, Himachal Pradesh,
                  this luxury villa offers breathtaking mountain views, peaceful
                  surroundings, and a perfect escape into nature. Enjoy the
                  pleasant weather, nearby tourist attractions, and a relaxing
                  stay surrounded by lush greenery.
                </p>
              </div>
            </div>
          </section>

          <section id="reviews" className="villaBlock">
            <h1>Guest Reviews</h1>

            <div className="villaReviewsGrid">
              {reviews.map((review, index) => (
                <div className="villaReviewCard" key={index}>
                  <div className="reviewTop">
                    <div className="reviewUser">
                      <div className="reviewAvatar">{review.avatar}</div>

                      <div>
                        <h4>{review.name}</h4>
                        <span>{review.time}</span>
                      </div>
                    </div>

                    <div className="reviewRating">
                      ⭐ <strong>{review.rating}</strong>/5
                    </div>
                  </div>

                  <div className="reviewTags">
                    {review.tags.map((tag, i) => (
                      <span key={i}>✔ {tag}</span>
                    ))}
                  </div>

                  <p>{review.review}</p>

                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </section>
          <section id="refund-policy" className="villaPolicySection villaBlock">
            <div className="villaPolicyContainer">
              <h1>Refund Policy & House Rules</h1>

              {/* Buttons */}

               <div className="policyBtns">
                  <a href="#">
                    <button>Refund Policy</button>
                  </a>
                  <a href="#">
                    {" "}
                    <button>House Rules</button>
                  </a>
                </div>

              {/* Policy List */}

              <div className="villaPolicyContent">
                <ul className="villaPolicyList">
                  <li>
                    Check-in time: <strong>2:00 PM</strong>
                  </li>

                  <li>
                    Check-out time: <strong>11:00 AM</strong>
                  </li>

                  <li>
                    Early check-in and late check-out are subject to
                    availability.
                  </li>

                  <li>
                    Guests are requested to maintain cleanliness and hygiene.
                  </li>

                  <li>
                    Loud music and parties are not allowed after 10:00 PM.
                  </li>

                  <li>Smoking inside the rooms is strictly prohibited.</li>

                  <li>Pets are allowed only with prior approval.</li>

                  <li>Any damage to property will be chargeable.</li>

                  <li>
                    Cancellation made within 7 days of check-in may not be
                    eligible for refund.
                  </li>

                  <li>
                    Valid government ID proof is mandatory during check-in.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <aside className="villaBookingSticky">
          <div className="bookingCard">
            <p className="oldPrice">₹100,733</p>
            <h2>
              ₹81,186 <span>(for 6 rooms) Per Night + Taxes</span>
            </h2>

            <div className="bookingGrid">
              <div>
                <label>Check-in⌄</label>
                <strong>Add Date</strong>
              </div>
              <div>
                <label>Check-out⌄</label>
                <strong>Add Date</strong>
              </div>
              <div>
                <label>Guests</label>
                <strong>6 Adults, 0 Chil...</strong>
              </div>
              <div>
                <label>No. of Rooms</label>
                <strong>6 Rooms</strong>
              </div>
            </div>
          </div>

          <h3 className="bestPrice">Select Dates for Best Price</h3>

          <div className="offerBox">
            Reserve to get exciting offer for this property!
          </div>

          <button className="selectDateBtn">Select Dates</button>

          <div className="refundText">
            For Cancellation and Refund Policy, <a href="#">click here</a>
          </div>

          <div className="hostBox">
            <Phone size={28} />
            <strong>Connect with Host</strong>
            <button>Request Callback</button>
          </div>
        </aside>
      </div>
    </section>
  );
}
