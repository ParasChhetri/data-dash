export const MissionSection = () => {
    return (
        <section className="py-16 px-4 md:px-12 lg:px-24 bg-white text-black">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-10">

                {/* Left Column */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Data-Dash mission
                    </h2>
                    <p className="text-base md:text-lg mb-4 text-gray-800">
                        Data continues to grow exponentially and organizations still struggle to be data-driven.
                        New data tools are emerging constantly, but remain complicated and confusing for non-technical teams.
                    </p>
                    <p className="text-base md:text-lg text-gray-800">
                        Data-Dash mission is to give every business person the power to work with their data directly and answer
                        fundamental business questions without needing advanced tools or training.
                    </p>
                </div>

                {/* Right Column */}
                <div className="flex-1 bg-gray-100 rounded-xl p-6 md:p-8">
                    <p className="text-gray-500 text-base md:text-lg mb-4">
                        The following three pillars lie at the core of Data-Dash product vision:
                    </p>
                    <ul className="space-y-3">
                        <li className="bg-yellow-300 font-semibold px-4 py-2 rounded-md">
                            No-code, accessible to all
                        </li>
                        <li className="bg-yellow-300 font-semibold px-4 py-2 rounded-md">
                            The fastest way to work with data
                        </li>
                        <li className="bg-yellow-300 font-semibold px-4 py-2 rounded-md">
                            The most beautiful interface for data
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};