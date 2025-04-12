import React from 'react';
import {
  FaCarCrash,
  FaTruck,
  FaMotorcycle,
  FaShip,
  FaProcedures,
  FaUserInjured,
  FaHeartbeat,
} from 'react-icons/fa';
import img from "../../assets/bankruptcy/image.png"

const services = [
  { icon: <FaCarCrash className="text-3xl text-blue-600 z-10" />, title: 'Auto Accidents' },
  { icon: <FaTruck className="text-3xl text-blue-600 z-10" />, title: 'Truck Accidents' },
  { icon: <FaMotorcycle className="text-3xl text-blue-600 z-10" />, title: 'Motorcycle Accidents' },
  { icon: <FaShip className="text-3xl text-blue-600 z-10" />, title: 'Boat Accidents' },
  { icon: <FaProcedures className="text-3xl text-blue-600 z-10" />, title: 'Slip and Fall Lawsuits' },
  { icon: <FaHeartbeat className="text-3xl text-blue-600 z-10" />, title: 'Medical Malpractice' },
  { icon: <FaUserInjured className="text-3xl text-blue-600 z-10" />, title: 'Wrongful Deaths' },
];

const PersonalInjurySection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12" id="personal-injury">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4" data-aos="fade-up">
          PERSONAL INJURY
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6" data-aos="fade-up" data-aos-delay="100">
          Pugh & Karpov can assist you with your personal injury case. We dedicate ourselves to helping local Hampton Roads residents fight for what is owed to them. We have more than 50 years of experience handling personal injury cases in Hampton Roads and the surrounding area.
        </p>

        {/* Image added */}
        <img
          src={img}
          alt="Personal Injury"
          className="  md:w-[50%] mx-auto rounded-2xl shadow-lg mb-10 object-cover"
          data-aos="fade-up"
          data-aos-delay="150"
        />

        <p className="text-gray-700 text-base md:text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
          Our fees are based upon a contingency fee so you pay nothing unless we recover funds on your behalf. We are a boutique law firm so unlike the large personal injury factories with huge advertising machines to feed, we are able to provide you and your case the individual attention necessary for the best possible outcome. We are committed to improving lives one at a time.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-6" data-aos="fade-up" data-aos-delay="250">
          <strong>Experience and Skilled Injury Attorneys</strong><br />
          When you hire Pugh and Karpov you can be rest assured that we will take time to get to know you and your situation. We never treat our clients like a case number. Being able to facilitate your best possible results is always our goal.
        </p>

        {/* Card section with hover animation */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group bg-gray-100 p-6 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Hover Box */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 group-hover:h-2 rounded-b-xl"></div>

              {/* Content */}
              <div className="flex flex-col items-center text-center z-10 relative">
                {service.icon}
                <p className="mt-3 font-medium text-gray-800">{service.title}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-10" data-aos="fade-up" data-aos-delay="400">
          <strong>LEGAL DISCLAIMER:</strong> The use of the internet or the email contact form for communication does not establish an attorney-client relationship. Attorneys of Pugh and Karpov Law PC do not guarantee any particular outcome of the representation. Every case is different and fact specific, and the results obtained will be related to the facts and merits of the particular case.
        </p>
      </div>
    </section>
  );
};

export default PersonalInjurySection;
