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
} from "lucide-react";
import "../../style/home/villa-overview.css";

const tabs = [
  "Overview",
  "About Us",
  "Experiences",
  "Refund Policy",
  "Spaces",
  "Reviews",
  "Amenities",
  "Meals",
  "Location",
  "FAQ's",
];

export default function VillaOverviewSection() {
  const [activeTab, setActiveTab] = useState("Overview");

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
              <a href="/refund-policy">
                <button>View More</button>
              </a>
              <a href="/refund-policy">
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

          <section id="refund-policy" className="villaBlock">
            <h2>Refund Policy</h2>
            <div className="policyBtns">
              <button>Refund Policy</button>
              <button>House Rules</button>
            </div>
            <p>
              Check-in time: <b>2:00 PM</b>, Check-out time: <b>11:00 AM</b>
            </p>
            <small>
              Note: Early check-in and late check-out is subject to
              availability.
            </small>
          </section>

          <section id="spaces" className="villaBlock">
            <h2 className="sectionTitle">Spaces</h2>

            <div className="spaceCards">
              {[1, 2, 3].map((item) => (
                <div className="spaceCard" key={item}>
                  <div className="spaceImg">
                    <img src="/images/exterior/1.jpeg" alt="bedroom" />
                    <span>King-Size Bed</span>
                    <h4>Bedroom {item}</h4>
                  </div>
                  <ul>
                    <li>This bedroom is on the ground floor.</li>
                    <li>
                      Includes an AC, TV, Wi-Fi, workstation and extra mattress.
                    </li>
                    <li>Ensuite bathroom. Attached Balcony.</li>
                  </ul>
                </div>
              ))}
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

          <section id="amenities" className="villaBlock">
            <h2>Amenities</h2>
            <p>
              Wi-Fi, heated pool, parking, gazebo, lawn, balcony and elevator.
            </p>
          </section>

          <section id="meals" className="villaBlock">
            <h2>Meals</h2>
            <p>Fresh meals are available on request with prior confirmation.</p>
          </section>

          <section id="location" className="villaBlock">
            <h2>Location</h2>
            <p>
              Located in Shimla, Himachal Pradesh with beautiful hill views.
            </p>
          </section>

          <section id="faqs" className="villaBlock">
            <h2>FAQ's</h2>
            <p>
              For booking, cancellation and meal details, connect with host.
            </p>
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
