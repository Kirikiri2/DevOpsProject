import '../../styles/Kate.css'


export default function PortfolioPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#faf7f8] to-white">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* 🔷 HERO SECTION */}
                <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden border border-[#f8e8ec]/50">
                    {/* Декоративные blur-пятна */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#f8e8ec] rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-y-1/3 translate-x-1/3 animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#9b6b7a]/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 animate-pulse-slow delay-1000"></div>

                    <div className="relative flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 text-center md:text-left z-10">
                            <div className="handwritten-intro text-[#7a6b6f] text-lg mb-2">Hi. Since you're new here.</div>
                            <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] mb-3">
                                <span className="text-[#9b6b7a] block -rotate-1">KATE'S</span>
                                <span className="text-[#7a6b6f] block rotate-1">WORLD</span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-[#7a6b6f] mt-2 font-medium">
                                Web Developer / Designer
                            </p>
                            <div className="hero-tags flex flex-wrap justify-center md:justify-start gap-2 mt-5">
                                {['веб-разработка', 'веб-дизайн', 'Figma'].map((tag, i) => (
                                    <span key={i} className="px-4 py-1.5 bg-[#f8e8ec]/60 text-[#7a6b6f] rounded-full text-sm font-medium backdrop-blur-sm border border-[#9b6b7a]/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="hero-deco text-[#a89499] mt-4 italic">let me be ya tour guide ✨</div>
                        </div>

                        {/* Placeholder для фото — замени на своё */}
                        <div className="w-64 h-80 md:w-80 md:h-96 shrink-0 relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#9b6b7a] to-[#f8e8ec] rounded-2xl transform rotate-3 shadow-lg group-hover:rotate-0 transition-transform duration-500"></div>
                            <div className="relative w-full h-full rounded-2xl bg-[#faf7f8] border-2 border-dashed border-[#9b6b7a]/50 flex items-center justify-center text-[#7a6b6f] text-sm p-4 text-center overflow-hidden">
                                <img src='/главная(1).jpg' alt="Катя" className="w-full h-full object-cover rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🔷 ABOUT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Обо мне */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f8e8ec]/40 hover:shadow-xl transition-shadow">
                        <h2 className="text-3xl font-bold text-[#7a6b6f] mb-4 relative inline-block">
                            Обо мне
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#9b6b7a] to-transparent rounded-full"></span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-start gap-5">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-xl bg-gradient-to-br from-[#f8e8ec] to-[#9b6b7a]/30 border-2 border-[#9b6b7a]/40 flex items-center justify-center text-[#7a6b6f] text-xs text-center p-2 overflow-hidden">
                                <img src="/портрет.jpg" alt="Портрет" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="space-y-3 text-[#7a6b6f]">
                                <p>Привет! Меня зовут Катя 👋</p>
                                <p>Я учусь на веб-разработчика и увлекаюсь веб-дизайном. Хорошо владею Figma и создаю удобные интерфейсы.</p>
                                <p className="text-[#9b6b7a] font-medium">✨ Упорно учусь в ITHub • Открыта к проектам</p>
                            </div>
                        </div>
                    </div>

                    {/* Currently learning */}
                    <div className="bg-gradient-to-br from-[#f8e8ec] to-[#9b6b7a]/20 rounded-2xl p-6 shadow-lg border border-[#9b6b7a]/30">
                        <h2 className="text-3xl font-bold text-[#7a6b6f] mb-4">currently learning</h2>
                        <ul className="space-y-3">
                            {[
                                'Веб-разработка (HTML/CSS/JS)',
                                'UI/UX дизайн в Figma',
                                'Адаптивная вёрстка',
                                'Игра на барабанах 🥁',
                                'Танцы 💃',
                                'Реснички ✨',
                                'Ноготочки 💅'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#7a6b6f]">
                                    <span className="w-2 h-2 bg-[#9b6b7a] rounded-full shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stats */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f8e8ec]/40">
                        <h2 className="text-3xl font-bold text-[#7a6b6f] mb-4">my toolkit</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Figma', desc: 'основной инструмент' },
                                { label: 'HTML/CSS', desc: 'база вёрстки' },
                                { label: 'JavaScript', desc: 'учусь активно' },
                                { label: 'ITHub', desc: 'место учёбы' }
                            ].map((stat, i) => (
                                <div key={i} className="p-3 bg-[#faf7f8] rounded-xl border border-[#f8e8ec]">
                                    <div className="font-bold text-[#9b6b7a]">{stat.label}</div>
                                    <div className="text-sm text-[#7a6b6f]">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Moments / Gallery */}
                    <div className="bg-[#a89499]/10 rounded-2xl p-4 shadow-lg border border-[#a89499]/20">
                        <h2 className="text-2xl font-bold text-[#7a6b6f] mb-3 text-center">moments ✨</h2>
                        <div className="grid grid-cols-3 gap-2">

                            <div className="aspect-square bg-gradient-to-br from-[#f8e8ec] to-[#9b6b7a]/30 rounded-lg border border-[#9b6b7a]/30 flex items-center justify-center text-[#7a6b6f] text-xs overflow-hidden">
                                <img src="\момент1.jpg" alt="Telegram" className="w-full h-full object-cover rounded-lg" />


                            </div>
                            <div className="aspect-square bg-gradient-to-br from-[#f8e8ec] to-[#9b6b7a]/30 rounded-lg border border-[#9b6b7a]/30 flex items-center justify-center text-[#7a6b6f] text-xs overflow-hidden">
                                <img src="\момент2.jpg" alt="Telegram" className="w-full h-full object-cover rounded-lg" />


                            </div>
                            <div className="aspect-square bg-gradient-to-br from-[#f8e8ec] to-[#9b6b7a]/30 rounded-lg border border-[#9b6b7a]/30 flex items-center justify-center text-[#7a6b6f] text-xs overflow-hidden">
                                <img src="\момент3.jpg" alt="Telegram" className="w-full h-full object-cover rounded-lg" />


                            </div>

                        </div>
                    </div>
                </div>

                {/* 🔷 INTERESTS SECTION */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f8e8ec]/50">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        it's not just coding, <br />
                        <span className="text-[#9b6b7a]">it's vibing with life</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Барабаны */}
                        <div className="bg-gradient-to-b from-[#f8e8ec] to-[#9b6b7a]/20 rounded-2xl p-6 text-center border border-[#9b6b7a]/30 hover:scale-[1.02] transition-transform">
                            <div className="w-full h-40 bg-[#faf7f8] rounded-xl mb-4 flex items-center justify-center text-[#7a6b6f] text-sm border-2 border-dashed border-[#9b6b7a]/40 overflow-hidden">
                                <img src="/ресни.jpg" alt="Барабаны" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#7a6b6f]">Nail & Lash</h3>
                            <p className="text-[#7a6b6f] text-sm">Делаю красивые ресни и ногточки</p>
                        </div>

                        {/* Танцы */}
                        <div className="bg-gradient-to-b from-[#a89499]/20 to-[#7a6b6f]/10 rounded-2xl p-6 text-center border border-[#a89499]/30 hover:scale-[1.02] transition-transform">
                            <div className="w-full h-40 bg-[#faf7f8] rounded-xl mb-4 flex items-center justify-center text-[#7a6b6f] text-sm border-2 border-dashed border-[#a89499]/40 overflow-hidden">
                                <img src="/танцы.jpg" alt="Танцы" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#7a6b6f]">Dance Flow</h3>
                            <p className="text-[#7a6b6f] text-sm">Танцую для души и энергии</p>
                        </div>

                        {/* Telegram */}
                        <div className="bg-gradient-to-b from-[#9b6b7a]/20 to-[#f8e8ec] rounded-2xl p-6 text-center border border-[#9b6b7a]/30 hover:scale-[1.02] transition-transform">
                            <div className="w-full h-40 bg-[#faf7f8] rounded-xl mb-4 flex items-center justify-center text-[#7a6b6f] text-sm border-2 border-dashed border-[#9b6b7a]/40 overflow-hidden">
                                <img src="/тг.jpg" alt="Telegram" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#7a6b6f]">Telegram</h3>
                            <p className="text-[#7a6b6f] text-sm">Делюсь процессом и находками</p>
                            <a href="https://t.me/Suicideofrottensouls" className="inline-block mt-3 text-[#9b6b7a] hover:text-[#a89499] font-medium transition-colors">
                                Подпишись! →
                            </a>
                        </div>
                    </div>
                </div>

                {/* 🔷 HOBBIES TAGS */}
                <div className="bg-[#f8e8ec]/30 rounded-3xl p-8 shadow-lg border border-[#f8e8ec]/50">
                    <h2 className="text-4xl font-bold text-center mb-6 text-[#9b6b7a]">hobbies & stuff</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Figma', 'HTML/CSS', 'UI/UX', 'Барабаны 🥁', 'Танцы 💃', 'Ноготочки', 'Реснички', 'ITHub'].map((hobby, i) => (
                            <span
                                key={i}
                                className="bg-white px-5 py-2.5 rounded-full shadow-md text-[#7a6b6f] hover:text-[#9b6b7a] hover:shadow-lg transition-all cursor-default border border-[#f8e8ec]"
                            >
                                {hobby}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 🔷 CONTACT SECTION */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f8e8ec]/50 text-center">
                    <h2 className="text-4xl font-bold mb-4">and that's a wrap. ✨</h2>
                    <p className="text-[#7a6b6f] mb-6 max-w-2xl mx-auto">
                        Спасибо, что заглянули в моё портфолио!
                        Готова к новым проектам и сотрудничеству 🤍
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <a href="https://t.me/RachelGardner0" className="flex items-center gap-2 px-6 py-3 bg-[#f8e8ec] text-[#7a6b6f] rounded-full hover:bg-[#9b6b7a] hover:text-white transition-all font-medium">
                            <span>✈</span> @RachelGardner0
                        </a>
                        <button className="px-6 py-3 bg-[#9b6b7a] text-white rounded-full hover:bg-[#8b5a6b] transition-all font-medium shadow-md">
                            Написать мне
                        </button>
                    </div>
                    <p className="text-[#a89499] text-sm">Давайте создавать вместе!</p>
                </div>

            </div>
        </div>
    );
}