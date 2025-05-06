import { useState } from "react";

const data = [
    {
        id: 0,
        question: "Do I need to download anything?",
        answere: "Nope - you just need a web browser to make or view a dashboard."
    },
    {
        id: 1,
        question: "You don’t have an integration with a tool I use - can I still use Data-Dash?",
        answere: "If you want to vizualize data from a source we don’t support out-of-the-box, we have a few options. If you can get data into a spreadsheet, you can get it into Data-Dash, and a number of plugins can help."
    },
    {
        id: 2,
        question: "How do I display my dashboard on a big screen or TV?",
        answere: "You’ll need to set your TV or screen up to show a web browser - we’ve got a guide on how to do this here. After that, pair it with your Geckoboard account and you’ll be able to choose which dashboards display on your screen"
    }
];


export const Accordion = () => {
    const [selected, setSelected] = useState(false);
    const handelSingle = (getCurrentId) => {
        // console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);

    }
    return (
        <div className="w-full min-h-screen flex items-center justify-center flex-col gap-4">
            <h1 className="text-xl font-bold lg:text-4xl">FAQ</h1>
            <div className="w-[80%] mx-auto">
                {
                    // when the data is comming from the API` first check it if it has some data or not. To do this we have to check if the length is greater than 0 that means thier is some data. if the length is less than 0 that means thier is no data  
                    data && data.length > 0 ?
                        data.map(dataItem =>
                            <div key={dataItem.id} className="item">
                                {/* on the click of the title our single accordion will open */}
                                <div className="flex border items-center justify-between py-2 px-1 bg-gray-100 cursor-pointer" onClick={() => handelSingle(dataItem.id)}>
                                    <h2 className="text-md lg:text-3xl">{dataItem.question}</h2>
                                    <span>{selected === dataItem.id ? "➖" : "➕"}</span>
                                </div>
                                {

                                    selected === dataItem.id ?
                                        <p className="py-2 text-justify lg:text-3xl">{dataItem.answere}</p> : null
                                }
                            </div>) :
                        <h1>No data found</h1>
                }
            </div>
        </div>
    )
}