"use client";

import { useState } from "react";
import {
  Search,
  User,
  Phone,
  ChevronDown,
  ArrowLeft,
  Share2,
  Heart,
  FileText,
  BadgeHelp,
} from "lucide-react";
import "../../style/home/header.css";

export default function VillaHeader() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <header className="villaHeader">
        <div className="villaHeader__inner">
          <div className="villaHeader__logo">
            <span>
              <img
                src="/images/logo.png"
                alt="Vieda Logo"
                style={{ width: "90px" }}
              />
            </span>
          </div>

          <button
            className="villaHeader__searchPill"
            // onClick={() => setOpenSearch(true)}
              onClick={() => window.location.href = "tel:8627045425"}
          >
            <span className="villaHeader__searchPill-text">
              Shilayvas Cottages
            </span>
            <i></i>
            <span className="villaHeader__searchPill-text">Select Date</span>
            <i></i>
            <span className="villaHeader__searchPill-text">6 Guests</span>
            <b>
              <Search size={18} />
            </b>
          </button>

          <div className="villaHeader__right">
            <button
              className="villaHeader__user"
              onClick={() => (window.location.href = "tel:+918627045425")}
            >
              <User size={20} />
            </button>

            <button
              className="villaHeader__contact"
              onClick={() => (window.location.href = "tel:+918627045425")}
            >
              <Phone size={20} />
              Get in touch
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </header>

      <header className="villaMobileHeader">
        <button>
          <ArrowLeft size={20} />
        </button>

        <h3>The Mohru Estate - Chail w/ Heated P...</h3>

        <div className="villaMobileHeader__icons">
          <button className="pink">
            <FileText size={18} />
          </button>
          <button>
            <Share2 size={20} />
          </button>
          <button>
            <BadgeHelp size={20} />
          </button>
          <button>
            <User size={22} />
          </button>
        </div>
      </header>

      {openSearch && (
        <div className="villaSearchOverlay">
          <div className="villaSearchBox">
            <div className="villaSearchBox__top">
              <div className="villaSearchField location">
                <label>Location/Villas/Landmark</label>
                <strong>The Mohru Estate - Chail W/ Heated Po...</strong>
              </div>

              <div className="villaSearchField active">
                <label>Check-in</label>
                <span>Select Date</span>
              </div>

              <div className="villaSearchField">
                <label>Check-out</label>
                <span>Select Date</span>
              </div>

              <div className="villaSearchField guest">
                <label>Guests</label>
                <strong>6 Guests</strong>
              </div>

              <button className="villaSearchBtn">SEARCH</button>
            </div>

            <div className="villaCalendar">
              <div className="villaCalendar__month">
                <button className="arrow">‹</button>
                <h3>May 2026</h3>
                <div className="week">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span className="red">Sat</span>
                  <span className="red">Sun</span>
                </div>

                <div className="days">
                  {[
                    "",
                    "",
                    "",
                    "",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                    "31",
                  ].map((d, i) => (
                    <span key={i} className={d === "27" ? "selected" : ""}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="villaCalendar__month">
                <button className="arrow right">›</button>
                <h3>Jun 2026</h3>
                <div className="week">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span className="red">Sat</span>
                  <span className="red">Sun</span>
                </div>

                <div className="days">
                  {[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                  ].map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="villaSearchBox__bottom">
              <button onClick={() => setOpenSearch(false)}>Apply</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
