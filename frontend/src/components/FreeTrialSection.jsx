export const FreeTrialSection = () => {
    return (
        <section className="relative rounded-[2rem] overflow-hidden px-6 py-16 md:py-24 text-center bg-gradient-to-br from-[#1a1a1a] via-[#282d3c] to-[#281f2f] text-white shadow-lg mx-8 md:mx-10 lg:mx-14">

            {/* Background Shapes */}
            <div className="absolute top-4 left-8 w-0 h-0 border-l-8 border-r-8 border-b-[12px] border-l-transparent border-r-transparent border-b-pink-400"></div>
            <div className="absolute top-6 right-8 w-3 h-3 bg-yellow-300"></div>
            <div className="absolute bottom-10 right-12 w-4 h-4 bg-green-400 transform rotate-45"></div>
            <div className="absolute bottom-6 left-12 w-4 h-4 bg-lime-300 transform rotate-45"></div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-red-500"></div>
            <div className="absolute bottom-8 right-20 w-4 h-4 bg-teal-400 rounded-full"></div>

            {/* Text Content */}
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
                    Start using Data-Dash right now. Free for 14 days.
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-8">
                    See for yourself how fast and easy it is to create visualizations, build dashboards, and unmask valuable insights in your data.
                </p>
                <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md transition duration-300">
                    Start for free
                </button>
            </div>
        </section>
    );
};
