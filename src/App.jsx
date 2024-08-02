import "./App.css";
import Dimas from "./assets/Dimas.png";
import Male from "./assets/Malefashion.png";
import CSS from "./assets/css.svg";
import GITHUB from "./assets/github.png";
import GMAIL from "./assets/gmail.svg";
import HTML from "./assets/html.svg";
import Instagram from "./assets/instagram.svg";
import JAVASCRIPT from "./assets/javascript.svg";
import LinkedIn from "./assets/linkedin.svg";
import Porto from "./assets/portofolio.png";
import REACT from "./assets/react.svg";
import TAILWIND from "./assets/tailwind.svg";

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
                {/* Skills*/}
                <section id="skills">
                    <div className="container mt-8 px-4 py-12">
                        <h2 className="text-2xl font-semibold text-blue-500">
                            Skllis
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-10 mt-10">
                            <div class="flex flex-col items-center">
                                <img
                                    src={HTML}
                                    alt="html icon"
                                    class="w-24 h-24"
                                />
                                <p class="font-semibold mt-3 text-[#cccccc]">
                                    HTML
                                </p>
                            </div>
                            <div class="flex flex-col items-center">
                                <img
                                    src={CSS}
                                    alt="css icon"
                                    class="w-24 h-24"
                                />
                                <p class="font-semibold mt-3 text-[#cccccc]">
                                    CSS
                                </p>
                            </div>
                            <div class="flex flex-col items-center">
                                <img
                                    src={TAILWIND}
                                    alt="tailwind icon"
                                    class="w-24 h-24"
                                />
                                <p class="font-semibold mt-3 text-[#cccccc]">
                                    TAILWIND
                                </p>
                            </div>
                            <div class="flex flex-col items-center">
                                <img
                                    src={JAVASCRIPT}
                                    alt="javascript icon"
                                    class="w-24 h-24"
                                />
                                <p class="font-semibold mt-3 text-[#cccccc]">
                                    JAVASCRIPT
                                </p>
                            </div>
                            <div class="flex flex-col items-center">
                                <img
                                    src={REACT}
                                    alt="react icon"
                                    class="w-24 h-24"
                                />
                                <p class="font-semibold mt-3 text-[#cccccc]">
                                    REACT.JS
                                </p>
                            </div>
                            <div class="flex flex-col items-center">
                                <img
                                    src={GITHUB}
                                    alt="github icon"
                                    class="w-24 h-24"
                                />
                                <p class="font-semibold mt-3 text-[#cccccc]">
                                    GITHUB
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Projects section */}
                <section id="portofolio">
                    <div className="container m-auto px-4 sm:py-12">
                        <h2 className="text-2xl font-semibold text-blue-500">
                            Portofolio
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-5 mt-10">
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={Male} className="w-100 h-auto" />
                                <h3 className="text-lg font-semibold mt-5">
                                    Membuat Halaman Checkout
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Website Belanja checkout yang saya buat
                                    menggunakan Tailwind CSS dan React Js dann
                                    Typescript.
                                </p>
                                <div className="flex mt-5 gap-4">
                                    <button className="px-4 py-2 border rounded-2xl hover:border-blue-500 hover:text-blue-500">
                                        <a
                                            href="https://github.com/KEL6-HS/backend-final-project"
                                            target="_blank"
                                        >
                                            Github
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={Porto} className="w-full h-auto" />
                                <h3 className="text-lg font-semibold mt-5">
                                    Portofolio Website Pribadi
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Portofolio yang saya buat menggunakan
                                    Tailwind CSS dan React Js.
                                </p>
                                <div className="flex gap-4 mt-5">
                                    <button className="px-4 py-2 border rounded-2xl hover:border-blue-500 hover:text-blue-500">
                                        <a
                                            href="https://github.com/KEL6-HS/backend-final-project"
                                            target="_blank"
                                        >
                                            Github
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
