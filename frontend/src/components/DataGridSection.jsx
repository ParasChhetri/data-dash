export const DataGridSection = () => {
    const blocks = Array.from({ length: 300 }); // adjust for number of blocks

    return (
        <section className="relative bg-white py-16 px-4 md:px-8 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-6 lg:grid-cols-10 gap-1 z-0 justify-items-center px-10 lg:px-40">
                {blocks.map((_, i) => (
                    <div
                        key={i}
                        className="border border-blue-500 w-8 h-4 md:w-10 md:h-5 lg:w-32 lg:h-6 rounded-sm"
                    />
                ))}
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-[300px]">
                <div className="bg-white text-center px-6 py-10 rounded-md">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                        Every dataset has a <br className="hidden md:block" />
                        million stories to tell
                    </h1>
                    <p className="mt-6 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
                        We want to give everyone the power to explore, visualize,
                        <br className="hidden sm:block" />
                        and present their data confidently.
                    </p>
                </div>
            </div>
        </section>
    );
};
