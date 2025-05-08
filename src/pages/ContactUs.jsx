import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        query: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };




    // const handleSubmit = () => {

    // };

    return (
        <div className="bg-white py-16 px-6 md:px-16 lg:px-24 mt-20">
            <div className="max-w-7xl mx-auto">
                <h1
                    className="text-4xl font-extrabold text-center text-blue-700 mb-12"
                    data-aos="fade-up"
                >
                    Contact Us
                </h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <form
                        className="space-y-6"
                        data-aos="fade-up"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <select
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="" disabled>Select An Option</option>
                            <option value="Criminal Defense">Bankruptcy</option>
                            <option value="Traffic Defense">Criminal and Traffic Defense</option>
                            <option value="Family Law">Personal injury </option>
                            <option value="Other">Other</option>
                        </select>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Your Message"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Info Cards */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
                        data-aos="fade-up"
                    >
                        {/* Address Card */}
                        <div className="bg-gray-100 border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all flex items-start gap-4">
                            <MapPin className="text-blue-700 w-7 h-7 mt-1" />
                            <div>
                                <h2 className="text-xl font-bold text-blue-700 mb-1">Address</h2>
                                <p className="text-gray-700">Pugh and Karpov Law PC</p>
                                <p className="text-gray-700">2400 Princess Anne Road</p>
                                <p className="text-gray-700">Virginia Beach, VA, 23456</p>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-gray-100 border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all flex items-start gap-4">
                            <Phone className="text-blue-700 w-7 h-7 mt-1" />
                            <div>
                                <h2 className="text-xl font-bold text-blue-700 mb-1">Phone</h2>
                                <p className="text-gray-700">757-721-2390</p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-gray-100 border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all flex items-start gap-4">
                            <Mail className="text-blue-700 w-7 h-7 mt-1" />
                            <div>
                                <h2 className="text-xl font-bold text-blue-700 mb-1">Email</h2>
                                <p className="text-gray-700">legal@pughkarpov.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-16 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.9309819191926!2d-76.053178!3d36.751621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae56828f6a457%3A0x6d5a2c9358508a9b!2s2400%20Princess%20Anne%20Rd%2C%20Virginia%20Beach%2C%20VA%2023456%2C%20USA!5e0!3m2!1sen!2sin!4v1712840398890!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    ></iframe>
                </div>

                {/* Disclaimer */}
                <div
                    className="mt-16 text-sm text-gray-600 leading-relaxed border-t pt-6"
                    data-aos="fade-up"
                >
                    <p>
                        The information contained in this electronic message is legally
                        privileged and confidential under applicable law and is intended
                        only for the use of the individual or entity named above. If you are
                        not the intended recipient of this message, you are hereby notified
                        that any use, distribution, copying or disclosure of this
                        communication is strictly prohibited. If you have received this
                        communication in error, please notify PUGH & KARPOV LAW, P.C. at
                        (757) 426-7660 or by return e-mail to legal@pughkarpov.com and
                        purge the communication immediately without making any copy or
                        distribution.
                    </p>
                    <br />
                    <p className="font-semibold text-red-600">
                        LEGAL DISCLAIMER:
                        <span className="text-gray-700 font-normal">
                            {" "}
                            The use of the internet or the email contact form for
                            communication does not establish an attorney-client relationship.
                            Attorneys of Pugh and Karpov Law PC do not guarantee any
                            particular outcome of the representation.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
