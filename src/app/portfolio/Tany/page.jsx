export default function TanyPage() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5d5f5] rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e2b4e0]/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 text-center md:text-left group">
                                <h1 className="nauryz text-6xl md:text-8xl font-bold text-[#e2b4e0] leading-[0.9] mb-4 transform -rotate-2 group-hover:scale-105 transition-transform duration-500">
                                    Татьяна
                                </h1>
                                <p className="nauryz text-2xl md:text-3xl text-[#949ab1] mt-4 group-hover:text-[#e2b4e0] transition-colors duration-500">
                                    Frontend разработчик
                                </p>
                            </div>

                            <div className="w-64 h-80 md:w-80 md:h-96 shrink-0 relative">
                                <div className="absolute inset-0 bg-[#e2b4e0] rounded-2xl transform rotate-3"></div>
                                <img
                                    src="/tany/tany_main.JPG"
                                    alt="Татьяна"
                                    className="relative w-full h-full object-cover rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-2xl hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                            <h2 className="nauryz text-3xl text-center font-bold text-[#949ab1] mb-4 hover:text-[#e2b4e0] transition-colors duration-300">tiny curious soul</h2>
                            <div className="flex items-start gap-4">
                                <div className="space-y-2 text-[#949ab1]">
                                    <p className="nauryz hover:text-[#e2b4e0] transition-colors duration-300 cursor-default">Люблю код, тишину и глубокие мысли</p>
                                    <p className="nauryz text-5xl text-[#e2b4e0] hover:scale-110 transition-transform duration-300">Frontend is my passion</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                            <h2 className="nauryz text-3xl text-center font-bold text-[#949ab1] mb-4 hover:text-[#e2b4e0] transition-colors duration-300">currently into</h2>
                            <div className="space-y-3 py-7">
                                <div className="flex items-center gap-3 py-2">
                                    <p className="nauryz text-[#949ab1] bg-gray-100 hover:bg-pink-400 py-2 px-4 rounded transition-all duration-300 hover:shadow-md hover:scale-105">Web Development</p>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <p className="nauryz text-[#949ab1] bg-gray-100 hover:bg-pink-400 py-2 px-4 rounded transition-all duration-300 hover:shadow-md hover:scale-105">Йога каждый день</p>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <p className="nauryz text-[#949ab1] bg-gray-100 hover:bg-pink-400 py-2 px-4 rounded transition-all duration-300 hover:shadow-md hover:scale-105">Чтение классики</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl m-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                    <h2 className="nauryz text-4xl font-bold text-center mb-8 group">
                        it's not just coding, <br />
                        <span className="text-[#e2b4e0] group-hover:scale-110 transition-transform duration-500">it's feeling deeply</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-b from-[#f5d5f5] to-[#e2b4e0]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer">
                            <img
                                src="/tany/yoga.jpg"
                                alt="Йога"
                                className="w-40 h-40 mx-auto object-cover rounded-full border-4 border-white mb-4 hover:scale-110 hover:shadow-2xl transition-all duration-500"
                            />
                            <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1] hover:text-[#e2b4e0] transition-colors duration-300">Yoga soul</h3>
                            <p className="nauryz text-[#949ab1] text-sm hover:text-black transition-colors duration-300">Возвращаюсь в тело и отпускаю лишнее 🕉️</p>
                        </div>

                        <div className="bg-gradient-to-b from-[#b9abab]/30 to-[#949ab1]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer">
                            <img
                                src="/tany/michlel.jpg"
                                alt="Michael Jackson"
                                className="w-40 h-40 mx-auto object-cover rounded-full border-4 border-white shadow mb-4 hover:scale-110 hover:shadow-2xl transition-all duration-500"
                            />
                            <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1] hover:text-[#e2b4e0] transition-colors duration-300">Moonwalk forever</h3>
                            <p className="nauryz text-[#949ab1] text-sm hover:text-black transition-colors duration-300">Майкл Джексон — энергия, которая до сих пор пробивает</p>
                        </div>

                        <div className="bg-gradient-to-b from-[#e2b4e0]/20 to-[#f5d5f5] rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer">
                            <div className="w-full h-40 bg-[#f5d5f5]/50 rounded-xl mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-500">
                                <img src="/tany/books.jpg" alt="Книги" className="w-40 h-40 object-cover rounded-full border-4 border-white shadow hover:shadow-2xl transition-all duration-500" />
                            </div>
                            <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1] hover:text-[#e2b4e0] transition-colors duration-300">Dostoevsky & Chekhov</h3>
                            <p className="nauryz text-[#949ab1] text-sm hover:text-black transition-colors duration-300">Глубина и точность, от которой мурашки</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#f5d5f5]/30 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-[#f5d5f5]/50 transition-all duration-500">
                    <h2 className="nauryz text-4xl font-bold text-center mb-6 text-[#e2b4e0] hover:scale-105 transition-transform duration-300">hobbies & stuff</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#e2b4e0] hover:bg-pink-400 hover:text-white hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer">Йога</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#949ab1] hover:bg-pink-400 hover:text-white hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer">Чтение классики</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#b9abab] hover:bg-pink-400 hover:text-white hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer">Майкл Джексон</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#949ab1] hover:bg-pink-400 hover:text-white hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer">Английский C1+</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#e2b4e0] hover:bg-pink-400 hover:text-white hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer">Frontend</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
