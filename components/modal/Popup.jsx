"use client";

import { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Popup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);

      setTimeout(() => {
        setOpen(true);
        document.body.style.overflow = "hidden";
      }, 50);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setOpen(false);

    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "auto";
    }, 300);
  };

  if (!visible) return null;

  const submitForm = () => {
    toast.success("Form submitted successfully!");

    setTimeout(() => {
      closePopup();
    }, 1000);
  };

  return (
    <div
      className={`
      fixed inset-0 z-[9999]
      flex items-center justify-center
      bg-black/70 backdrop-blur-sm
      transition-all duration-300
      ${open ? "opacity-100" : "opacity-0"}
    `}
    >
      <div
        className={`
        relative
        w-[95%]
        max-w-6xl
        overflow-hidden
        rounded-3xl
        bg-[#171717]
        shadow-2xl
        transition-all duration-300
        ${open ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}
      `}
      >
        {/* Close */}

        <button
          onClick={closePopup}
          className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* LEFT IMAGE */}

          <div className="relative min-h-[300px] md:min-h-[450px]">
            <Image
              src="/images/facade/5.jpeg"
              alt="Vacation"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute left-8 top-10 text-white md:left-12">
              <h2 className="text-4xl font-bold leading-none md:text-4xl">
                Get 10% OFF
              </h2>

              <p className="mt-2 text-lg md:text-xl">on your first booking!</p>

              <div className="mt-6 inline-block rounded bg-white px-5 py-2 text-sm font-medium text-black md:text-xl">
                Book Your Stay with Us!
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}

          <div className="p-6 text-white md:p-12">
            <h3 className="text-xl font-semibold md:text-3xl">
              Vacation Awaits
            </h3>

            <p className="mt-4 max-w-lg text-zinc-400">
              Gear up for your dream getaway! Share your details, and we'll
              craft an unforgettable escape.
            </p>

            <div className="mt-8 space-y-4">
              <input
                placeholder="First Name *"
                className="h-12 w-full rounded-md border border-zinc-700 bg-transparent px-4 outline-none focus:border-zinc-500"
              />

              <input
                placeholder="Last Name *"
                className="h-12 w-full rounded-md border border-zinc-700 bg-transparent px-4 outline-none focus:border-zinc-500"
              />

              <div className="flex gap-3">
                <button
                  className="
                  flex h-12 w-24 items-center justify-center gap-2
                  rounded-md border border-zinc-700
                "
                >
                  +91
                  <ChevronDown size={16} />
                </button>

                <input
                  placeholder="Phone Number *"
                  className="h-12 flex-1 rounded-md border border-zinc-700 bg-transparent px-4 outline-none focus:border-zinc-500"
                />
              </div>
              <button
                onClick={submitForm}
                className="
    mt-4 h-14 w-full rounded-md
    border border-zinc-700
    bg-transparent
    text-lg font-medium
    transition
    hover:bg-white hover:text-black
  "
              >
                Book Now
              </button>
            </div>

            {/* Slider Dots */}

            <div className="mt-12 flex justify-center gap-2">
              <div className="h-2 w-8 rounded-full bg-zinc-300" />
              <div className="h-2 w-2 rounded-full bg-zinc-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
