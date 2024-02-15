import React from "react";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center p-4 bg-[#A3B184]">
        <h1 className="sm:text-3xl text-2xl font-bold text-neutral-800">
          About Us
        </h1>
        <p className="flex justify-between items-center p-1 w-[75%] text-center sm:text-xl text-lg text-neutral-700">
          Welcome to Carno-Flora! We are dedicated enthusiasts committed to the
          cultivation and propagation of carnivorous plants, aiming to share our
          passion with you. Our mission is to provide superior quality plant
          material and exemplary service, prioritizing your satisfaction above
          all else. Should you have any inquiries or require assistance, kindly
          utilize the form below to reach out to us. Rest assured, we will
          promptly attend to your needs.
        </p>
      </div>
      <div className="p-4 bg-[#bfc4ac]">
        <h2 className="sm:text-2xl text-xl font-bold text-neutral-800 p-2 text-center">
          Contact Us
        </h2>
        <form className="max-w-md mx-auto">
          <div className="grid grid-cols-1 gap-y-6">
            <input
              type="text"
              name="Full name"
              placeholder="Full Name"
              className="input-field"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="input-field"
            />
            <input
              type="tel"
              name="Phone Number"
              placeholder="Phone Number"
              className="input-field"
            />
            <input
              type="text"
              name="Subject"
              placeholder="Subject"
              className="input-field"
            />
            <textarea
              rows={5}
              name="Message"
              placeholder="Message"
              className="input-field"
            />
            <button
              type="submit"
              className="bg-[#588157] text-white px-4 py-2 rounded hover:bg-[#3A5A40] w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
