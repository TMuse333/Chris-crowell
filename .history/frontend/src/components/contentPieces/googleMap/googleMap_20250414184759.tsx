import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto my-8
    text-black">
      {/* Google Maps Iframe */}
      <div className="flex-1 h-[400px] md:h-[500px] w-full md:mr-4 mb-4 md:mb-0">
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

      {/* Contact Information */}
      <div className="flex-1 bg-gray-100 p-6 rounded-lg flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">
          <span className="font-medium">Name:</span> Chris Crowell
        </p>
        <p className="mb-2">
          <span className="font-medium">Phone:</span> (902) 555-1234
        </p>
        <p className="mb-2">
          <span className="font-medium">Email:</span>{" "}
          chris@yournetworkrealtor.com
        </p>
        <p className="mb-2">
          <span className="font-medium">Address:</span> 1234 Bedford Hwy, Bedford, NS B4A 1C6, Canada
        </p>
      </div>
    </section>
  );
};

export default GoogleMap;