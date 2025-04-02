export const SupportSection = () => {
    return (
        <div className="bg-gray-100 py-16 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center">

                    {/* World Map with Team Members */}
                    <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="/img/world-globe-img.jpg" // Replace with your world map image
                            alt="World Map"
                            className="w-full rounded-xl"
                        />                        
                    </div>

                    {/* Support Text and Button */}
                    <div className="w-full md:w-1/2 md:pl-12">
                        <h2 className="text-3xl font-bold mb-4">We're here to support you, every step of the way.</h2>
                        <p className="text-gray-600 mb-6">
                            If you ever get stuck, our customer support team is here to help - 24 hours a day, 5 days a week. Want to see the product in action first? Book a walkthrough call with one of our helpful team members.
                        </p>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full">
                            Let's talk
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
