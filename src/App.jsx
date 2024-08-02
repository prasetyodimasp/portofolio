import "./App.css";

function App() {
    return (
        <div className="max-w-4xl m-auto relative">
            <nav className="fixed left-0 right-0 top-0 z-20" id="home">
                <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
                    <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                        <div>
                            <a
                                href="#name"
                                className="font-bold text-2xl text-blue-500 cursor-pointer"
                            >
                                Prasetyodimas.
                            </a>
                        </div>
                        <div>
                            <ul className="flex gap-5">
                                <li>
                                    <a
                                        href="#skills"
                                        className="text-gray-400 hover:text-blue-500 cursor-pointer"
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#portofolio"
                                        className="text-gray-400 hover:text-blue-500 cursor-pointer"
                                    >
                                        Portofolio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#aboutme"
                                        className="text-gray-400 hover:text-blue-500 cursor-pointer"
                                    >
                                        Education
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#saya"
                                        className="text-gray-400 hover:text-blue-500 cursor-pointer"
                                    >
                                        Hubungi Saya
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default App;
