import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-6 w-full
    text-black max-w-[1200px] mx-auto py=-12">
      {/* Map Section */}
      <div className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.48195128505!2d-63.60605242274449!3d44.709774571071584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a21253bd82b11%3A0x97a989e7fae0ca99!2sChris%20Crowell%20-%20Your%20Network%20Realtor!5e0!3m2!1sen!2sca!4v1744666433170!5m2!1sen!2sca"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700 mb-1">Chris Crowell</p>
        <p className="text-gray-700 mb-1">Your Network Realtor</p>
        <p className="text-gray-700 mb-1">📍 Sackville, Nova Scotia</p>
        <p className="text-gray-700 mb-1">📞 (902) 123-4567</p>
        <p className="text-gray-700">✉️ chris@example.com</p>
      </div>
    </div>
  );
};

export default GoogleMap;
