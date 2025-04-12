import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGavel, FaBalanceScale, FaTrophy, FaListAlt } from "react-icons/fa";

const LawFirmExperienceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const cards = [
    {
      icon: <FaGavel />,
      title: "Experience",
      text: "Legal troubles or challenges often invite feelings of anxiety and fear. Putting them to rest and making legal problems go away is our specialty. Founders of Pugh and Karpov Law, Virginia attorneys Gregory Pugh and Anton Karpov put their superior trial skills, advanced Law Degrees (LLM) from William and Mary School of Law, and over 50 years of legal experience to benefit their clients. When the opportunity arose in 2019, they merged their law practices, expanding their area of expertise. They built Pugh & Karpov, a premier Virginia full-service law firm with the mission of providing expert legal advice and zealous representation to anyone in need.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Integrity",
      text: "At Pugh & Karpov, we strive to approach each client’s legal issue with the utmost integrity and pride ourselves in meeting the highest expectations of professional conduct, ethics, and diligence. Our commitment to integrity has helped make Pugh and Karpov an AV-Rated firm, a distinction given only to those law firms who demonstrate the highest ethical standards and professional excellence.",
    },
    {
      icon: <FaTrophy />,
      title: "Results",
      text: "Our attorneys are ready to extend a helping hand to those in need and always prepared to fight for their clients, consistently delivering the best results possible. When Pugh & Karpov represent you in litigation, negotiate favorable terms, or work on any other legal matter, they do it with one goal in mind – make you wholly satisfied with the outcome.",
    },
  ];

  const practiceAreas = [
    "Bankruptcy",
    "Criminal Defense",
    "Traffic Tickets",
    "Personal Injury",
    "Civil Litigation",
  ];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Title */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-2 tracking-wide">
            Experience. Integrity. Results.
          </h2>
          <p className="text-lg text-gray-600 italic">“Never say Never…”</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 p-8 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-[#1E3A8A] text-4xl mx-auto mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center text-black mb-3">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm text-center leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Practice Areas */}
        <div
          className="bg-white drop-shadow-lg rounded-3xl px-10 py-14 shadow-2xl border"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-3xl font-semibold mb-10 text-center flex justify-center items-center gap-2 text-black">
            <FaListAlt className="text-[#1E3A8A]" />
            Areas of Practice
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {practiceAreas.map((item, index) => (
              <div
                key={index}
                className="rounded-xl px-4 py-3 text-center text-sm font-medium border border-[#1E3A8A] text-[#1E3A8A] bg-white hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawFirmExperienceSection;
