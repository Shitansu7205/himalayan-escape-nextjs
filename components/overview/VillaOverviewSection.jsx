"use client";

import { useEffect, useState } from "react";
import { Users, Bed, Bath, Coffee, FileText, Info, Phone } from "lucide-react";
import "../../style/home/villa-overview.css";

const tabs = [
  "Overview",
  "Highlights",
  "Refund Policy",
  "Spaces",
  "Reviews",
  "Amenities",
  "Meals",
  "Location",
  "Experiences",
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
            <h1>The Mohru Estate - Chail w/ Heated Pool</h1>
            <h3>Shimla, Himachal Pradesh</h3>

            <div className="villaReview">
              <div className="villaLogoText">
                <span>Vieda</span>
                <small>by STAYVISTA</small>
              </div>
              <a href="#">39 Reviews</a>
            </div>

            <div className="villaChips">
              <span>
                <Users size={22} /> Up to 18 Guests
              </span>
              <span>
                <Bed size={22} /> 6 Rooms <Info size={16} />
              </span>
              <span>
                <Bath size={22} /> 9 Baths
              </span>
              <span>
                <Coffee size={22} /> Meals Available
              </span>
              <span>
                <FileText size={20} /> View Brochure
              </span>
            </div>

            <div className="villaGreat">
              <strong>Great for:</strong>
              <span>Senior Citizens</span>
              <span>View</span>
              <span>Kids</span>
            </div>

            <div className="villaAmenityMini">
              <div>
                <span>♨</span>
                <p>
                  Heated
                  <br />
                  Pool
                </p>
              </div>
              <div>
                <span>❧</span>
                <p>Lawn</p>
              </div>
              <div>
                <span>⌂</span>
                <p>Gazebo</p>
              </div>
              <div>
                <span>▤</span>
                <p>Balcony</p>
              </div>
              <div>
                <span>⇳</span>
                <p>Elevator</p>
              </div>
              <a href="#">+29 Amenities</a>
            </div>
          </section>

          <section id="highlights" className="villaBlock">
            <h2>Highlights</h2>
            <p>
              A luxury hillside villa with heated pool, mountain views, spacious
              bedrooms, lawn, gazebo, balconies and premium interiors.
            </p>
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
            <h2>Reviews</h2>
            <p>Guests love the view, interiors, pool and peaceful location.</p>
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

          <section id="experiences" className="villaBlock">
            <h2>Experiences</h2>
            <p>Bonfire, nature walks, sightseeing and family gatherings.</p>
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
