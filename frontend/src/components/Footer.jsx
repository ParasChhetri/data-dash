
export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="mr-4">
                        Data-Dash
                    </div>
                    <span className="text-sm">&copy; 2025</span>
                </div>

                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-gray-300">Contact sales</a>
                    <a href="#" className="hover:text-gray-300">Updates</a>
                    <a href="#" className="hover:text-gray-300">Support</a>
                    <a href="#" className="hover:text-gray-300">Legal</a>
                    <a href="#" className="hover:text-gray-300">Privacy</a>
                </div>

            </div>
        </footer>
    );
}
