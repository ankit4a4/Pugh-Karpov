import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img from "../../assets/Home/Gregory.jpg";
import img2 from "../../assets/Home/newImage.jpg";

const attorneys = [
  {
    name: "Gregory K. Pugh",
    image: img,
    bio: "Attorney Gregory Pugh obtained his Juris Doctor degree from Pettit College of Law at Ohio Northern University in 1981 and advanced Master of Laws Degree (LLM) was awarded to him by the Law School at the College of William and Mary in 1991. He has actively practiced in Virginia courts since 1988 and opened his own practice in 1996, specializing in civil litigation, bankruptcy, traffic and criminal defense. He represents clients in all courts in the greater Tidewater area and has argued cases before the Virginia Court of Appeals and the Virginia Supreme Court. It will be very hard to find another lawyer who can match Mr. Pugh’s legal experience or go toe-to-toe against him in the courtroom. But despite his toughness when he takes a stand protecting his clients, Mr. Pugh is a very personable and caring person, who also appointed by the courts to protect interest of children and mentally-ill individuals.",
  },
  {
    name: "Anton A. Karpov",
    image: img2,
    bio: "Attorney Anton Karpov, obtained his first law degree from Moscow State University in 1999 with the specialty in Contracts and Civil Litigation. After immigrating to the United States in 1999, he had to overcame many challenges to earn an advanced Master of Laws Degree (LLM) from Law School at the College of William and Mary in 2006. Since 2007 he practiced law in Virginia courts and represented hundreds of clients as a Public Defender. He tried every case imaginable – from DUI and juvenile delinquency cases to a drug, firearm, robbery, and homicide charges. Before leaving the public service, he worked as a supervisor of an adult felony team and he carried his trial experience into his private practice. When you or someone close to you is in trouble and you need a courtroom warrior like Mr. Karpov. He is always honest and forthcoming with his clients, always ready to fight defending their rights and ready to expertly defend you on traffic or criminal charges; or aggressively negotiate with the insurance company so you will get a generous compensation for your injuries.",
  },
];

const AttorneysSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">
            Get To Know Our Attorneys
          </h2>
          <p className="text-gray-600 text-lg">
            Meet the legal minds behind Pugh & Karpov
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {attorneys.map((attorney, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                src={attorney.image}
                alt={attorney.name}
                className="w-full h-72 object-contain bg-gray-100"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-[#1E3A8A]">
                  {attorney.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {attorney.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div
          className="mt-16 bg-[#F9FAFB] border-l-4 border-[#1E3A8A] p-6 rounded-xl shadow-sm"
          data-aos="fade-up"
        >
          <h4 className="text-lg font-semibold text-[#1E3A8A] mb-2">
            Legal Disclaimer:
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            The use of the internet or the email contact form for communication
            does not establish an attorney-client relationship. Attorneys of
            Pugh and Karpov Law PC do not guarantee any particular outcome of
            the representation. Every case is different and fact specific, and
            the results obtained will be related to the facts and merits of the
            particular case.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AttorneysSection;
