export default function TanyPage() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5d5f5] rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e2b4e0]/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="nauryz text-6xl md:text-8xl font-bold text-[#e2b4e0] leading-[0.9] mb-4 transform -rotate-2">
                                    Татьяна
                                </h1>
                                <p className="nauryz text-2xl md:text-3xl text-[#949ab1] mt-4">
                                    Frontend разработчик
                                </p>
                            </div>

                            <div className="w-64 h-80 md:w-80 md:h-96 shrink-0 relative">
                                <div className="absolute inset-0 bg-[#e2b4e0] rounded-2xl transform rotate-3"></div>
                                <img
                                    src="/tany/tany_main.JPG"
                                    alt="Татьяна"
                                    className="relative w-full h-full object-cover rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h2 className="nauryz text-3xl text-center font-bold text-[#949ab1] mb-4">tiny curious soul</h2>
                            <div className="flex items-start gap-4">
                                <div className="space-y-2 text-[#949ab1]">
                                    <p className="nauryz">Люблю код, тишину и глубокие мысли</p>
                                    <p className="nauryz text-5xl text-[#e2b4e0]">Frontend is my passion</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-6 shadow-lg ">
                            <h2 className="nauryz text-3xl text-center font-bold text-[#949ab1] mb-4">currently into</h2>
                            <div className="space-y-3 py-7 ">
                                <div className="flex items-center gap-3 py-2 ">
                                    <p className="nauryz text-[#949ab1] hover:bg-pink-400  py-2 px-4 rounded">Web Development</p>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <p className="nauryz text-[#949ab1] hover:bg-pink-400   py-2 px-4 rounded">Йога каждый день</p>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <p className="nauryz text-[#949ab1] hover:bg-pink-400  py-2 px-4 rounded">Чтение классики</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl m-6">
                    <h2 className="nauryz text-4xl font-bold text-center mb-8">
                        it's not just coding, <br />
                        <span className="text-[#e2b4e0]">it's feeling deeply</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-linear-to-b from-[#f5d5f5] to-[#e2b4e0]/20 rounded-2xl p-6 text-center">
                            <img
                                src="/tany/yoga.jpg"
                                alt="Йога"
                                className="w-40 h-40 mx-auto object-cover rounded-full border-4 border-white mb-4"
                            />
                            <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1]">Yoga soul</h3>
                            <p className="nauryz text-[#949ab1] text-sm">Возвращаюсь в тело и отпускаю лишнее 🕉️</p>
                        </div>

                        <div className="bg-linear-to-b from-[#b9abab]/30 to-[#949ab1]/20 rounded-2xl p-6 text-center">
                            <img
                                src="/tany/michlel.jpg"
                                alt="Michael Jackson"
                                className="w-40 h-40 mx-auto object-cover rounded-full border-4 border-white shadow mb-4"
                            />
                            <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1]">Moonwalk forever</h3>
                            <p className="nauryz text-[#949ab1] text-sm">Майкл Джексон — энергия, которая до сих пор пробивает</p>
                        </div>

                        <div className="bg-linear-to-b from-[#e2b4e0]/20 to-[#f5d5f5] rounded-2xl p-6 text-center">
                            <div className="w-full h-40 bg-[#f5d5f5]/50 rounded-xl mb-4 flex items-center justify-center">
                                <img src="/tany/books.jpg" alt="Книги" className="w-40 h-40 object-cover rounded-full border-4 border-white shadow" />
                            </div>
                            <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1]">Dostoevsky & Chekhov</h3>
                            <p className="nauryz text-[#949ab1] text-sm">Глубина и точность, от которой мурашки</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#f5d5f5]/30 rounded-3xl p-8 shadow-lg">
                    <h2 className="nauryz text-4xl font-bold text-center mb-6 text-[#e2b4e0]">hobbies & stuff</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#e2b4e0]">Йога</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#949ab1]">Чтение классики</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#b9abab]">Майкл Джексон</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#949ab1]">Английский C1+</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#e2b4e0]">Frontend</span>
                    </div>
                </div>
            </div>
        </div>

    );
}