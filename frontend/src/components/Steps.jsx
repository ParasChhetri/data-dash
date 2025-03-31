import { useState } from "react";

export const Steps = () => {
    const steps = [
        {
            id: 1,
            title: "Select your file",
            description: "Choose your monthly expense CSV file now.",
            image: "/img/select-file-img.png"
        },
        {
            id: 2,
            title: "Upload or Drag & Drop",
            description: "After selecting, simply upload it or you can drag and drop it.",
            image: "https://www.bytewebster.com/javascriptprojects/uploads/images/drag-and-drop-image-uploader-with-animation-using-html-css-and-javascript.png"
        },
        {
            id: 3,
            title: "Generate",
            description: "Click on generate and get your Expense Tracker Dashboard generated in seconds.",
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2a8ac65608331.5afa862ca7e21.png"
        }
    ];

    const [selectedStep, setSelectedStep] = useState(steps[0]);

    return (
        <div className="flex w-full flex-col items-center justify-center min-h-screen py-20 px-5 gap-10 bg-blue-50/50">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D1B2A]">
                Steps to follow
            </h1>

            <div className="flex flex-col items-center md:flex-row gap-8 lg:mx-36 md:mx-8">
                {/* Steps Section */}
                <div className="w-full md:w-1/2 space-y-5">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            onClick={() => setSelectedStep(step)}
                            className={`cursor-pointer p-5 rounded-xl shadow-lg border-2 transition-all duration-300 transform 
                                ${selectedStep.id === step.id ? "border-green-500 bg-white scale-105 shadow-xl" : "bg-gray-100"}
                                hover:scale-110 hover:rotate-1 hover:shadow-2xl`}
                        >
                            <h2 className="text-green-600 font-bold text-xl">
                                {step.id}. {step.title}
                            </h2>
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-[90%] h-[350px] flex justify-center items-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl blur-2xl opacity-30"></div>
                        <img
                            src={selectedStep.image}
                            alt={selectedStep.title}
                            className="rounded-xl shadow-lg transition-all duration-500 w-full h-full object-cover transform hover:scale-105 hover:rotate-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
