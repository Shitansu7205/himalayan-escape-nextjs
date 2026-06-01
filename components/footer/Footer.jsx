import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const quickLinks = ["Home", "Villas", "Collections", "Offers", "About Us"];

  return (
    <footer className="bg-[#1f1f1f] text-white pt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* 1. BRAND */}
          <div>
            <img
              src="/images/logo.png"
              alt="LuxuryStays Logo"
              className="w-32"
            />
            <h2 className="text-xl font-semibold tracking-wide">
              Shilayvas Cottages
            </h2>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Discover premium villas, curated stays, and unforgettable travel
              experiences across India.
            </p>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold mb-5 text-white/90">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item, i) => {
                const linkMap = {
                  Home: "index.html#home",
                  Villas: "index.html#villas",
                  Collections: "index.html#collections",
                  Offers: "index.html#offers",
                  "About Us": "index.html#about",
                };

                return (
                  <li key={i}>
                    <a
                      href={linkMap[item]}
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-white cursor-pointer transition"
                    >
                      <span className="text-white/40">›</span>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-5 text-white/90">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3 hover:text-white transition cursor-pointer">
                <Phone size={16} className="mt-0.5 text-white/60" />
                <span>+91 98160 32103 ,</span>
                <span>+91 80911 15150</span>
              </li>

              <li className="flex items-start gap-3 hover:text-white transition cursor-pointer">
                <Phone size={16} className="mt-0.5 text-white/60" />
                <span>shilayvascottages@gmail.com</span>
              </li>

              <li className="flex items-start gap-3 hover:text-white transition cursor-pointer">
                <MapPin size={16} className="mt-0.5 text-white/60" />
                <span>
                  Chail Rd, VPO, Koti, Shimla,
                  <br /> Himachal Pradesh 171012
                </span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition cursor-pointer">
                <Clock size={16} className="mt-0.5 text-white/60" />
                <span>24/7 Customer Support Available</span>
              </li>
            </ul>
          </div>

          {/* 4. MAP */}
          <div>
            <h3 className="text-sm font-semibold mb-5 text-white/90">
              Find Us
            </h3>

            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.2834029531!2d77.2478678!3d31.0407671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390581001eeee7bf%3A0xdb28500a65c076dc!2sShilayvas%20Cottages!5e1!3m2!1sen!2sin!4v1780119237822!5m2!1sen!2sin"
                className="w-full h-40"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10" />

        {/* BOTTOM BAR */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* COPYRIGHT */}
          <div className="text-sm text-white/50 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span
              style={{
                color: "#e3b673",
                fontFamily: "inherit",
                fontWeight: "bold",
              }}
            >
              Shilayvas Cottages
            </span>
            . All rights reserved || Powered by{" "}
            <a
              href="https://www.bookingjini.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition"
              style={{
                color: "#e3b673",
                fontFamily: "inherit",
                fontWeight: "bold",
              }}
            >
              Bookingjini
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5 text-white/60">
            {/* Instagram */}
            <a
              className="hover:text-white transition"
              href="https://www.instagram.com/shilayvas.cottages/"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
            </a>

            {/* Facebook */}
            <a className="hover:text-white transition" href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114 6h2v3h-2c-.6 0-1 .4-1 1v2h3l-.5 3H13v7A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* YouTube */}
            <a className="hover:text-white transition" href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 7s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C17.6 4 12 4 12 4s-5.6 0-8.3.1C3.3 4.2 2.5 4.2 1.8 5 .2 6.4 0 9 0 9s-.2 3.1 0 4.9c.1.6.2 1.2.5 1.7.7.8 1.6.8 2 .9C6.4 17 12 17 12 17s5.6 0 8.3-.1c.4-.1 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-3.1 0-4.9zM10 14V8l6 3-6 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
