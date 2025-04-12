import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShieldCheck, Gavel, AlertTriangle, UserX, Users, BookOpen, Lock, UserCheck, Slash, FileText } from "lucide-react";

const offenses = [
  { icon: <ShieldCheck size={20} className="text-blue-600" />, text: "Assault and Battery" },
  { icon: <Gavel size={20} className="text-blue-600" />, text: "Computer Crimes" },
  { icon: <AlertTriangle size={20} className="text-blue-600" />, text: "Drug Crimes" },
  { icon: <UserX size={20} className="text-blue-600" />, text: "Expungement" },
  { icon: <Users size={20} className="text-blue-600" />, text: "Protective Orders" },
  { icon: <BookOpen size={20} className="text-blue-600" />, text: "Theft Crimes" },
  { icon: <Lock size={20} className="text-blue-600" />, text: "Violent Offenses" },
  { icon: <UserCheck size={20} className="text-blue-600" />, text: "Weapons/Firearms Charges" },
  { icon: <Slash size={20} className="text-blue-600" />, text: "Domestic Violence" },
  { icon: <FileText size={20} className="text-blue-600" />, text: "Juvenile Offenses" },
];

const FamilyLawSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 px-6 py-16 text-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <h2
          className="text-[7vw] md:text-[3vw] font-black text-center text-blue-700 tracking-wide"
          data-aos="fade-up"
        >
          CRIMINAL AND TRAFFIC DEFENSE
        </h2>

        <p
          className="text-[4vw] md:text-[1.1vw] text-gray-700 leading-relaxed"
          data-aos="fade-up"
        >
          We bring 45 years of combined trial experience defending adult and juvenile criminal charges and traffic offenses
          in Virginia Beach, Norfolk, Chesapeake and other courts of the Tidewater area.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" data-aos="fade-up">
          {offenses.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex items-center gap-2 border-l-4 border-blue-600"
            >
              {item.icon}
              <span className="text-[3.8vw] md:text-[0.95vw] font-medium text-gray-800">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border-l-8 border-yellow-500 p-6 md:p-10 rounded-xl shadow-lg" data-aos="fade-up">
          <p className="text-[4vw] md:text-[1.05vw] text-gray-800 leading-relaxed">
            <strong className="text-yellow-800 font-semibold">Traffic Cases:</strong> Our main focus is on DUI, reckless driving and driving on a suspended license as these charges are generally the most serious and conviction may carry jail time, loss of driver’s license and expensive fines.
          </p>
        </div>

        <div className="bg-blue-100 border-l-8 border-blue-600 p-6 md:p-10 rounded-2xl shadow-md" data-aos="fade-up">
          <p className="text-[4vw] md:text-[1.05vw] text-blue-900 leading-relaxed">
            We will establish the trial strategy, prepare and file all court documents, and expertly conduct hearings related to your particular situation: bond and bond appeals, criminal discovery and evidentiary motions, preliminary hearings, probation hearings, and trials in the General District, Juvenile and Domestic, and Circuit Courts.
          </p>
        </div>

        <div className="bg-green-100 border-l-8 border-green-600 p-6 md:p-10 rounded-2xl shadow-md" data-aos="fade-up">
          <h3 className="text-[4.5vw] md:text-[1.5vw] font-bold text-green-800 mb-3">WHY SHOULD YOU CHOOSE US?</h3>
          <p className="text-[4vw] md:text-[1.05vw] text-gray-800 leading-relaxed">
            Attorneys at Pugh & Karpov love to win cases and see relief on their client’s faces. When hired, they prepare the best defense of your case using legal research, investigating alleged facts and potential witnesses and then aggressively pursue the best course, specifically tailored to the case in hand. We stay in touch with our clients and their families, providing the support and guidance during the entire litigation process.
          </p>
        </div>

        <div className="text-[3.6vw] md:text-[0.95vw] text-gray-500 space-y-2 pt-8" data-aos="fade-up">
          <p>
            <strong>LEGAL DISCLAIMER:</strong> The use of the internet or the email contact form for communication does not
            establish an attorney-client relationship. Attorneys of Pugh and Karpov Law PC do not guarantee any particular
            outcome of the representation. Every case is different and fact specific, and the results obtained will be
            related to the facts and merits of the particular case.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamilyLawSection;
