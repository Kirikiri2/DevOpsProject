export default function KrisPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5d5f5] rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e2b4e0]/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-y-1/2 -translate-x-1/2"></div>
                    <div className="relative flex flex-col md:flex-row items-center gap-8">
                        <div className="w-64 h-80 md:w-80 md:h-96 shrink-0 relative">
                            <div className="absolute inset-0 bg-[#e2b4e0] rounded-2xl transform rotate-3"></div>
                            <img
                                src="/nika/ника.jpg"
                                alt="Ника"
                                className="relative w-full h-full object-cover rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex-1 text-right">
                            <h1 className="nauryz text-6xl md:text-8xl font-bold text-[#e2b4e0] leading-[0.9] mb-4 transform -rotate-2">
                                Это КРИСТИНА
                            </h1>
                            <p className="nauryz text-2xl md:text-3xl text-[#949ab1] mt-4">
                                Frontend разработчик / Creative soul
                            </p>
                        </div>
                    </div>
                </div>

                {/* ABOUT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <h2 className="nauryz text-3xl font-bold text-[#949ab1] mb-4">tiny curious soul</h2>
                        <div className="flex items-start gap-4">
                            <img
                                src="/nika/ника-портрет.jpg"
                                alt="Портрет"
                                className="w-50 h-50 object-cover rounded-xl"
                            />
                            <div className="space-y-2 text-[#949ab1]">
                                <p className="nauryz">Мне 18 лет и я учусь на разработчика веб и мультимедийных приложений уже 3 года</p>
                                <p className="nauryz text-sm text-[#e2b4e0]">Frontend is my passion 💕</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-linear-to-br from-[#f5d5f5] to-[#e2b4e0]/30 rounded-2xl p-6 shadow-lg">
                        <h2 className="nauryz text-3xl font-bold text-[#949ab1] mb-4">love story</h2>
                        <div className="flex items-center gap-4">
                            <img
                                src="/nika/фото-с-парнем.jpg"
                                alt="С парнем"
                                className="w-45 h-45 object-cover rounded-xl"
                            />
                            <p className="nauryz text-[#949ab1]">Встречаемся почти 2 года <br /><span className="text-[#e2b4e0]">❤️</span></p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <h2 className="nauryz text-3xl font-bold text-[#949ab1] mb-4">currently learning</h2>
                        <div className="space-y-3 py-7">
                            <div className="flex items-center gap-3 py-2">
                                <p className="nauryz text-[#949ab1]">Web & Multimedia Development</p>
                            </div>
                            <div className="flex items-center gap-3 py-2">
                                <p className="nauryz text-[#949ab1]">Учусь вождению (механика)</p>
                            </div>
                            <div className="flex items-center gap-3 py-2">
                                <p className="nauryz text-[#949ab1]">Сертификат тату-мастера</p>
                            </div>
                            <div className="flex items-center gap-3 py-2">
                                <p className="nauryz text-[#949ab1]">Занимаюсь спортом по приколу</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#b9abab]/20 rounded-2xl p-4 shadow-lg">
                        <h2 className="nauryz text-2xl font-bold text-[#949ab1] mb-3 text-center">moments</h2>
                        <div className="grid grid-cols-3 gap-2">
                            <img src="/nika/фото-1.jpg" alt="Момент 1" className="w-full h-45 object-cover rounded-lg" />
                            <img src="/nika/фото-2.jpg" alt="Момент 2" className="w-full h-45 object-cover rounded-lg" />
                            <img src="/nika/фото-3.jpg" alt="Момент 3" className="w-full h-45 object-cover rounded-lg" />
                            <img src="/nika/фото-4.jpg" alt="Момент 4" className="w-full h-45 object-cover rounded-lg" />
                            <img src="/nika/фото-5.jpg" alt="Момент 5" className="w-full h-45 object-cover rounded-lg" />
                            <img src="/nika/фото-6.jpg" alt="Момент 6" className="w-full h-45 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* INTERESTS SECTION */}
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <h2 className="nauryz text-4xl font-bold text-center mb-8">
                        it's not just coding, <br />
                        <span className="text-[#e2b4e0]">it's vibing with life</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-linear-to-b from-[#f5d5f5] to-[#e2b4e0]/20 rounded-2xl p-6 text-center">
                            <img
                                src="/nika/аниме-атака-титанов.jpg"
                                alt="Атака Титанов"
                                className="w-full h-40 object-cover rounded-xl mb-4"
                            />
                            <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1]">Anime lover</h3>
                            <p className="nauryz text-[#949ab1] text-sm">Attack on Titan - мое любимое аниме 🗡️</p>
                        </div>

                        <div className="bg-linear-to-b from-[#b9abab]/30 to-[#949ab1]/20 rounded-2xl p-6 text-center">
                            <div className="flex justify-center gap-4 mb-4">
                                <img src="/nika/кот-сем.jpg" alt="Сем" className="w-35 h-35 object-cover rounded-full border-4 border-white shadow" />
                                <img src="/nika/кошка-буся.jpg" alt="Буся" className="w-35 h-35 object-cover rounded-full border-4 border-white shadow" />
                            </div>
                            <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1] py-3">My fur babies</h3>
                            <p className="nauryz text-[#949ab1] text-sm">Кот Сем и кошка Буся</p>
                        </div>

                        <div className="bg-linear-to-b from-[#e2b4e0]/20 to-[#f5d5f5] rounded-2xl p-6 text-center">
                            <div className="w-full h-40 bg-[#f5d5f5]/50 rounded-xl mb-4 flex items-center justify-center">
                                <img src="/nika/tg.jpg" alt="tg" className="w-40 h-40 object-cover rounded-full border-4 border-white shadow" />
                            </div>
                            <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1]">Telegram</h3>
                            <p className="nauryz text-[#949ab1] text-sm">Публикую всякую фигню в своем канале</p>
                            <a href="https://t.me/+qBX2bJLVWuc0MDJi" className="inline-block mt-3 text-[#e2b4e0] hover:text-[#b9abab] nauryz text-sm">Подпишись! →</a>
                        </div>
                    </div>
                </div>

                {/* HOBBIES */}
                <div className="bg-[#f5d5f5]/30 rounded-3xl p-8 shadow-lg">
                    <h2 className="nauryz text-4xl font-bold text-center mb-6 text-[#e2b4e0]">hobbies & stuff</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#e2b4e0]">Тату искусство</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#949ab1]">Собирать лего</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#b9abab]">Чтение</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#949ab1]">Скетчбукинг</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#b9abab]">Занимаюсь pole dance</span>
                        <span className="nauryz bg-white px-6 py-3 rounded-full shadow-md text-[#e2b4e0]">Алмазная мозайка</span>
                    </div>
                </div>
            </div>
        </div>
    );
}