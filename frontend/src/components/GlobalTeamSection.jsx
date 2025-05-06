import Worldmap from "../assets/world-map.png";
import { Link } from "react-router-dom";
export const GlobalTeamSection = () => {
    return (
        <section className="px-4 py-16 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Text Section */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        We’re just<br className="hidden md:block" /> getting started!
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                        Data-Dash has a big vision and a talented team. If you're interested in tackling tough technical and design challenges, get in touch.
                    </p>
                    <button className="bg-green-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-500 transition hover:cursor-pointer">
                        <Link to='/contact-us'>Contact us</Link>
                    </button>
                </div>

                {/* Right Map Section */}
                <div className="flex-1">
                    <div className="w-full max-w-2xl mx-auto">
                        <img
                            src={Worldmap} // Replace with actual map SVG or inline SVG
                            alt="World Map"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};