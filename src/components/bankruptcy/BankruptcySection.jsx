import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BankruptcySection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="w-full px-6 py-16 bg-gradient-to-b from-white to-gray-50 text-black">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <h2
          className="text-blue-700 font-black text-center tracking-wide text-[6vw] md:text-[3vw]"
          data-aos="fade-up"
        >
          BANKRUPTCY
        </h2>

        <p
          className="leading-relaxed text-gray-700 text-[4.2vw] md:text-[1.1vw]"
          data-aos="fade-up"
        >
          A fundamental goal of the federal bankruptcy laws enacted by Congress is to give debtors a financial “fresh start”
          from burdensome debts. This goal is accomplished through the bankruptcy discharge, which releases debtors from
          personal liability from specific debts and prohibits creditors from ever taking any action against the debtor
          to collect those debts.
        </p>

        <div
          className="bg-red-100 border-l-8 border-red-600 p-6 rounded-xl shadow-md"
          data-aos="fade-up"
        >
          <p className="font-bold uppercase text-red-700 text-[4.2vw] md:text-[1.1vw]">
            ARE YOU SICK, TIRED AND FRUSTRATED WITH YOUR FINANCES? BILLS ARE PILING UP? LOSING SLEEP OVER THE FAMILY BUDGET?
          </p>
        </div>

        <div
          className="bg-blue-100 p-8 rounded-3xl shadow-xl border-l-[10px] border-blue-600"
          data-aos="fade-up"
        >
          <p className="font-semibold text-blue-800 text-[4.2vw] md:text-[1.1vw]">
            WE CAN STOP COLLECTOR’S CALLS, GARNISHMENTS, FORECLOSURES, REPOSSESSIONS, CIVIL PENALTIES AND LATE FEES AND HELP
            YOU AND YOUR FAMILY TO GET A FRESH START.
          </p>
        </div>

        <p
          className="text-gray-700 leading-relaxed text-[4vw] md:text-[1.05vw]"
          data-aos="fade-up"
        >
          Most Americans count on their earnings to make ends meet. We go to work and pay the bills from our paychecks.
          We make our financial decisions and commitments based on what we believe we can afford. But sometimes life
          happens: death or serious illness, divorce or a job loss can easily derail all our well-thought plans.
        </p>

        <p
          className="text-gray-700 text-[4vw] md:text-[1.05vw]"
          data-aos="fade-up"
        >
          We understand that filing bankruptcy is a difficult decision, involving severe financial hardships and
          emotional anguish.
        </p>

        <div
          className="bg-green-50 p-8 border-l-8 border-green-600 rounded-xl shadow-md"
          data-aos="fade-up"
        >
          <p className="font-bold text-green-800 mb-3 text-[4.2vw] md:text-[1.1vw]">
            We promise effective legal representation at an affordable price.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 text-[4vw] md:text-[1.05vw]">
            <li>Bankruptcy Chapter 7 filing for an $800 attorney fee (plus court’s fees)</li>
            <li>Help you decide what type of bankruptcy is right for your specific circumstances</li>
            <li>Straight-forward and honest advice</li>
          </ul>
        </div>

        <div
          className="bg-yellow-100 p-8 border-l-[10px] border-yellow-600 rounded-2xl shadow-md mt-4"
          data-aos="fade-up"
        >
          <h3 className="text-yellow-800 text-center uppercase font-black mb-3 text-[5vw] md:text-[1.5vw]">
            Here are some answers to the most frequently asked questions:
          </h3>

          {[
            {
              q: "When is the right time to file?",
              a: `Once you realize that your financial situation is not likely to improve and you have exhausted all possible means
              of fixing the situation yourself, call us immediately for a free consultation: once we are retained we can curb the
              calls from your creditors so that you can regain your peace of mind and go on with your day to day life.`,
            },
            {
              q: "What type of bankruptcy should you file, Chapter 7 or Chapter 13?",
              a: `Whether you should file Chapter 7 or Chapter 13 depends on your unique financial circumstances. One Chapter may
              be right and work miracles for you and your family, but not for someone else. We will closely analyze your financial
              situation, your assets and obligations and will advise you on the best course of action.`,
            },
            {
              q: "Can I just file for bankruptcy myself?",
              a: `If you're the type of person who would try to fill a cavity with “Bondo” or “Crazy Glue” instead of going to a dentist,
              you can try to file for bankruptcy yourself too—but can you really afford it? Mistakes may cost you significant and
              unnecessary losses, including loss of your home, vehicle, or other personal property. Undoing that damage can be
              a very lengthy and costly process.`,
            },
            {
              q: "Will filing bankruptcy stop creditors from calling?",
              a: `Yes! Once you file your petition with the court the automatic stay prevents creditors from taking any action to try
              to collect the debt. No lawsuits, no garnishments, no bank liens, no phone calls.`,
            },
            {
              q: "How long after filing will the creditors stop calling?",
              a: `Once your creditors receive their notice from the court or become aware of your bankruptcy by other means they
              must immediately stop all collection efforts and can be held in contempt if they fail to do so.`,
            },
            {
              q: "Who deals with the creditors during bankruptcy?",
              a: `Once you file bankruptcy, your attorney will deal directly with your creditors.`,
            },
            {
              q: "Can my employer fire me because I filed for bankruptcy?",
              a: `No. The law prohibits both government and private employers from discriminating against you for filing for bankruptcy protection.`,
            },
          ].map((item, index) => (
            <details key={index} className="mb-4">
              <summary className="cursor-pointer font-semibold text-blue-800 text-[4.2vw] md:text-[1.1vw]">
                {item.q}
              </summary>
              <p className="mt-2 text-gray-800 text-[4vw] md:text-[1.05vw]">{item.a}</p>
            </details>
          ))}
        </div>

        <div
          className="pt-6 space-y-2 text-gray-500 text-[3.5vw] md:text-[0.95vw]"
          data-aos="fade-up"
        >
          <p>
            <strong>LEGAL DISCLAIMER:</strong> The use of the internet or the email contact form for communication does
            not establish an attorney-client relationship. Attorneys of Pugh and Karpov Law PC do not guarantee any
            particular outcome of the representation. Every case is different and fact-specific, and the results obtained
            will be related to the facts and merits of the particular case.
          </p>
          <p>
            Pursuant to federal law, Pugh & Karpov is a debt relief agency and helps people file for consumer bankruptcy
            relief under title II of the United States Code.
          </p>
        </div>
      </div>
    </section>
  );
}
