export const TryForFree = () => {
    return (
        <div className="w-full bg-blue-50/10 min-h-screen py-20 px-5 flex flex-col items-center justify-center overflow-hidden">
            <h1 className="text-2xl font-medium text-[#0D1B2A] md:text-4xl md:font-semibold lg:text-6xl lg:font-extrabold">
                Visualize your dashboard
            </h1>
            <p className="text-[16px] text-center my-2 md:text-[28px] md:font-light md:my-5">
                Data Dash is the simplest way to generate your Dashboards
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3 flex-col-reverse md:flex-row">
                <button className="bg-green-400 py-2 px-4 rounded-full min-w-[180px] max-w-full">Try now</button>
                <button className="bg-transparent border-[1px] py-2 px-4 hover:bg-teal-100 rounded-full min-w-[180px] max-w-full">
                    Show me how it works
                </button>
            </div>

            {/* Image Section */}
            <div className="rounded-xl overflow-hidden w-full max-w-[1200px] h-auto md:h-[600px] my-14">
                <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2a8ac65608331.5afa862ca7e21.png"
                    alt="Dashboard Preview"
                    className="bg-no-repeat bg-center object-cover w-full h-full"
                />
            </div>

        </div>
    );
}
