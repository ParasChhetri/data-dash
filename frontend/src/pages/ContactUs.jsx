export const ContactUs = () => {
    return (
        <section className="min-h-screen w-full py-28 px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Get in touch with us</h2>
                <p className="mt-2 text-gray-600">
                    Please submit your request and a Data-Dash representative will follow up with you as soon as we can.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative">
                {/* Left Yellow Blob (just decorative) */}
                <div className="absolute left-0 top-24 w-40 h-64 bg-yellow-300 rounded-full blur-3xl opacity-70 z-0 hidden lg:block" />

                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex-1 z-10">
                    <form className="space-y-5">
                        <div>
                            <label className="block font-semibold mb-1">
                                Your email address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            />
                        </div>

                        {/* <div>
                            <label className="block font-semibold mb-1">
                                Topic <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            >
                                <option>Select a topic</option>
                            </select>
                        </div> */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Subject <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Let us know how we can help you"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">
                                Full description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Include as much detail as you can"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            ></textarea>
                        </div>

                        {/* Placeholder for reCAPTCHA */}
                        <div className="border p-4">
                            <label className="flex items-center gap-3">
                                <input type="checkbox" className="w-4 h-4" />
                                I’m not a robot
                                {/* You can replace with real reCAPTCHA integration */}
                            </label>
                            <div className="text-xs text-gray-500 mt-1">reCAPTCHA Privacy · Terms</div>
                        </div>

                        <button className="bg-green-400 text-white font-bold py-3 px-6 rounded-md hover:bg-green-500 transition-all hover:cursor-pointer">
                            Submit request
                        </button>

                        <p className="text-sm text-gray-500 mt-2">
                            By clicking submit, I acknowledge receipt of the dataDash.com{" "}
                            <a href="#" className="text-blue-600 underline">Privacy policy</a>
                        </p>
                    </form>
                </div>

                {/* Address and Help Info */}
                <div className="flex flex-col gap-6 flex-1 z-10">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="font-semibold text-lg mb-2">Address</h3>
                        <p>Data-Dash Search Inc<br />Ludiana<br />Punjab</p>
                        <p className="mt-4">
                            <span className="font-semibold">Email:</span><br />
                            <a href="mailto:support@polymersearch.com" className="text-blue-600 hover:underline">support@dataDash.com</a>
                        </p>
                    </div>
                    {/* <div className="bg-white rounded-xl shadow-md p-6">
                        <p>For any issues you can also check our status at any time</p>
                        <a href="#" className="text-blue-600 hover:underline mt-2 block">Check status</a>
                    </div> */}
                </div>
            </div>
        </section>
    );
};