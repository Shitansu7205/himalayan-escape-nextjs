"use client";

import {
  ChevronRight,
  Heart,
  Share2,
  Play,
  Image as ImageIcon,
  BadgeHelp,
  FileText,
} from "lucide-react";
import "../../style/home/hero.css";

export default function VillaHero() {
  return (
    <section className="svHero">
      <div className="svHero__wrap">
        <div className="svHero__breadcrumb">
          <span>Home</span>
          <ChevronRight size={18} />
          <span>Welcome to Shilayvas Cottages</span>

          <button className="svHero__brochure">
            <FileText size={18} />
            View Brochure
          </button>
        </div>

        <div className="svHero__grid">
          <div className="svHero__main">
            <img src="/images/exterior/1.jpeg" alt="villa" />
            <span className="svHero__tag">Luxury</span>

            <button className="svHero__mobileHeart">
              <Heart size={20} />
            </button>

            <div className="svHero__actions">
              <button>
                <BadgeHelp size={20} />
                <span>360° Tour</span>
              </button>

              <button>
                <Play size={20} fill="white" />
                <span className="desktopText">View Video</span>
              </button>

              <button>
                <ImageIcon size={20} />
                <span>View Photos</span>
              </button>
            </div>

            <div className="svHero__dots">
              <span className="active"></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="svHero__side">
            <div className="svHero__sideTop">
              <img src="/images/exterior/3.jpeg" alt="interior" />

              <div className="svHero__floating">
                <button>
                  <Share2 size={20} />
                </button>
                <button>
                  <Heart size={20} />
                </button>
              </div>
            </div>

            <div className="svHero__sideBottom">
              <img src="/images/corridoor/1.jpg" alt="pool" />
              {/* <div className="svHero__overlay">
                <strong>+49</strong>
                <span>More</span>
              </div> */}
            </div>
          </div>
        </div>

        <a className="svHero__whatsapp" href="telto:+918627045425">
          <img src="/images/icons.png" alt="whatsapp" />
        </a>
      </div>
    </section>
  );
}
