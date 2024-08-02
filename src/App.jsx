import "./App.css";
import Dimas from "./assets/Dimas.png";
import GITHUB from "./assets/github.png";
import GMAIL from "./assets/gmail.svg";
import Instagram from "./assets/instagram.svg";
import LinkedIn from "./assets/linkedin.svg";

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
            <main className="relative mt-28">
                {/* Intro/Banner section */}
                <section id="name">
                    <div className="container mt-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-10 text-center sm:text-left">
                        <div>
                            <h2 className="font-bold text-4xl">
                                Hallo, Saya Dimas
                            </h2>
                            <div>
                                <h2 className="font-bold text-3xl mt-1 gradiant-text">
                                    Junior Web Developer
                                </h2>
                            </div>
                            <div>
                                <p className="mt-3 text-gray-400">
                                    Sebagai Junior Web Developer saya mempunyai
                                    tekat yang tinggi untuk menggali yang luas
                                    dibidang tehnologi, saya lulus dari Bootcamp
                                    Web Developer{" "}
                                    <a
                                        className="text-blue-600"
                                        href="https://www.harisenin.com/"
                                        target="_blank"
                                    >
                                        Harisenin.com
                                    </a>
                                    &nbsp;menguasai beberapa bahasa pemrograman
                                    Ayo berteman di mediaa sosisal saya.
                                </p>
                                <div className="container m-auto flex justify-between px-4 py-6">
                                    <div>
                                        <ul className="flex gap-4">
                                            <li>
                                                <a
                                                    href="mailto:prasetyodimasp2711@gmail.com"
                                                    target="_blank"
                                                >
                                                    <img
                                                        src={GMAIL}
                                                        className="w-7"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/samiiddddd"
                                                    target="_blank"
                                                >
                                                    <img
                                                        src={Instagram}
                                                        className="w-7"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.linkedin.com/in/prasetyodimasp/"
                                                    target="_blank"
                                                >
                                                    <img
                                                        src={LinkedIn}
                                                        className="w-7"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://github.com/prasetyodimasp"
                                                    target="_blank"
                                                >
                                                    <img
                                                        src={GITHUB}
                                                        className="w-7"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="px-6 py-3 m-auto bg-gradient-to-t from-blue-500 rounded-xl to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                    Download CV
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <img
                                    src={Dimas}
                                    className="relative z-10 w-[280px] m-auto sm:w-[650px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
