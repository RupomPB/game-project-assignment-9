import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-300 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#28EBE8]">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2 flex justify-center gap-2 items-center">
              <span className=" text-red-500">
                <FaPhoneAlt />
              </span>{" "}
              Phone
            </h3>
            <p className="text-gray-300">01568-115886</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2 flex justify-center gap-2 items-center">
              <span>
                <MdAttachEmail />
              </span>{" "}
              Email
            </h3>
            <p className="text-gray-300">rupombadhan111@gmail.com</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2"> Office</h3>
            <p className="text-gray-300">
              30/31 Rupnagar Residential Area, Mirpur, Dhaka
            </p>
          </div>
        </div>

        {/* form for contact  */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-[#28EBE8] text-center">
            Send Us a Message
          </h3>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered bg-gray-800 text-white p-3 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="input input-bordered bg-gray-800 text-white p-3 rounded-lg md:col-span-2 h-32"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 btn bg-linear-to-r from-[#28EBE8] to-[#468CE8] text-white mt-4"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-72"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.903964522518!2d90.36710747425841!3d23.750885688696056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5973a1bdf7%3A0x22aef5ee34a2df21!2sMirpur%20-%201!5e0!3m2!1sen!2sbd!4v1699549875785!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
