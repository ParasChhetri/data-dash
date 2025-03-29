
export const TryForFree = () => {
    return(
        <div className="w-screen bg-blue-50 h-screen py-20 px-5">
            <h1 className="text-2xl font-medium text-[#0D1B2A]">Visualize your dashboard</h1>
            <p className="text-[16px] text-center my-2">Data Dash is the simplest way to generate your Dashboards</p>
            
            {/* For buttons */}
            <div className="flex items-center justify-center gap-3 flex-col-reverse">
                <button className="bg-green-400 py-2 px-4 rounded-full w-52">Try now</button>
                <button className="bg-transparent border-[1px] py-2 px-4 hover:bg-teal-100 rounded-full w-52">Show me how it works</button>
            </div>
        </div>
    );
}
