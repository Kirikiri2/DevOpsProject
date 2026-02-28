import Image from "next/image";
import Star from "./components/Star";
import PopUp from "./components/PopUp";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-4 items-center ">
            <div className="container flex items-center justify-center nauryz mx-auto">
                <div className="relative bg-white rounded-3xl pt-8 shadow-xl z-0 w-full ">
                    <div className="flex justify-center gap-x-1 mt-15 pl-15">
                        <Image src='/kris/photo1.png' alt='photo1' width={150} height={200} className="brightness-120" priority />
                        <Image src='/kris/kate.png' alt='photo2' width={150} height={200} className="brightness-130" priority />
                        <Image src='/kris/tanya1.png' alt='photo4' width={150} height={200} className="brightness-86" priority />
                        <Image src='/kris/nika.png' alt='photo3' width={250} height={200} className="brightness-120 -ml-7" priority />

                    </div>

                    <p className=" text-[184px] text-[#e2b4e0] absolute -z-10 -top-8 left-40">Frontend</p>
                    <p className=" text-[144px]  text-[#949ab1] absolute z-10 -bottom-8 right-40">Developers</p>


                    <div className="absolute top-30 translate-x-50 left-48">
                        <Star />
                    </div>
                    <div className="absolute top-30 translate-x-50 right-142">
                        <Star />
                    </div>
                    <div className="absolute top-12 right-55">
                        <PopUp />
                    </div>
                </div>
            </div>
            <div className=" flex items-center gap-5 container mx-auto justify-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg w-full">
                    <h2 className="nauryz text-3xl font-bold text-[#949ab1] mb-4">
                        Technology stack</h2>
                    <div className="space-y-3 py-7">
                        <div className="flex items-center gap-3 py-2">
                            <p className="nauryz text-[#949ab1]">React</p>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                            <p className="nauryz text-[#949ab1]">Next.js</p>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                            <p className="nauryz text-[#949ab1]">JavaScript</p>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                            <p className="nauryz text-[#949ab1]">TypeScript (ну так, чуть-чуть)</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#b9abab]/20 rounded-2xl p-4 shadow-lg w-full">
                    <h2 className="nauryz text-2xl font-bold text-[#949ab1] mb-3 text-center">moments</h2>
                    <div className="grid grid-cols-3 gap-2">
                        <Image src='/kris/photoB1.jpg' alt='moment1' width={200} height={180} className="w-full h-45 object-cover rounded-lg" />
                        <Image src='/kris/photoB2.jpg' alt='moment1' width={200} height={180} className="w-full h-45 object-cover rounded-lg" />
                        <Image src='/kris/photoB3.jpg' alt='moment1' width={200} height={180} className="w-full h-45 object-cover rounded-lg" />
                        <Image src='/kris/photoB4.jpg' alt='moment1' width={200} height={180} className="w-full h-45 object-cover rounded-lg" />
                        <Image src='/nika/фото-4.jpg' alt='moment1' width={200} height={180} className="w-full h-45 object-cover rounded-lg" />
                        <Image src='/nika/фото-3.jpg' alt='moment1' width={200} height={180} className="w-full h-45 object-cover rounded-lg" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="nauryz text-4xl font-bold text-center mb-8">
                    it's not just coding, <br />
                    <span className="text-[#e2b4e0]">it's vibing with life</span>
                </h2>

                <div className="grid grid-cols-4 gap-6">
                    <div className="bg-linear-to-b from-[#e2b4e0]/20 to-[#f5d5f5] rounded-2xl p-6 text-center">
                        <div className="w-full h-40 bg-[#f5d5f5]/50 rounded-xl mb-4 flex items-center justify-center">
                            <Image src='/kris/tgkate.jpg' alt="tg" width={40} height={40} className="w-40 h-40 object-cover rounded-full border-4 border-white shadow" />
                        </div>
                        <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1]">Telegram</h3>
                        <a href="https://t.me/Suicideofrottensouls" className="inline-block mt-3 text-[#e2b4e0] hover:text-[#b9abab] nauryz text-sm">Подпишись! →</a>
                    </div>
                    <div className="bg-linear-to-b from-[#e2b4e0]/20 to-[#f5d5f5] rounded-2xl p-6 text-center">
                        <div className="w-full h-40 bg-[#f5d5f5]/50 rounded-xl mb-4 flex items-center justify-center">
                            <Image src='/kris/tgtanya.jpg' alt="tg" width={40} height={40} className="w-40 h-40 object-cover rounded-full border-4 border-white shadow" />
                        </div>
                        <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1]">GitHub</h3>
                        <a href="https://github.com/tatianapudow" className="inline-block mt-3 text-[#e2b4e0] hover:text-[#b9abab] nauryz text-sm">Подпишись! →</a>
                    </div>
                    <div className="bg-linear-to-b from-[#e2b4e0]/20 to-[#f5d5f5] rounded-2xl p-6 text-center">
                        <div className="w-full h-40 bg-[#f5d5f5]/50 rounded-xl mb-4 flex items-center justify-center">
                            <Image src='/kris/tgkris.jpg' alt="tg" width={40} height={40} className="w-40 h-40 object-cover rounded-full border-4 border-white shadow" />
                        </div>
                        <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1]">Telegram</h3>
                        <a href="https://t.me/kirikiri07" className="inline-block mt-3 text-[#e2b4e0] hover:text-[#b9abab] nauryz text-sm">Подпишись! →</a>
                    </div>
                    <div className="bg-linear-to-b from-[#e2b4e0]/20 to-[#f5d5f5] rounded-2xl p-6 text-center">
                        <div className="w-full h-40 bg-[#f5d5f5]/50 rounded-xl mb-4 flex items-center justify-center">
                            <img src="/nika/tg.jpg" alt="tg" className="w-40 h-40 object-cover rounded-full border-4 border-white shadow" />
                        </div>
                        <h3 className="nauryz text-xl font-bold mb-2 text-[#949ab1]">Telegram</h3>
                        <a href="https://t.me/+qBX2bJLVWuc0MDJi" className="inline-block mt-3 text-[#e2b4e0] hover:text-[#b9abab] nauryz text-sm">Подпишись! →</a>
                    </div>
                </div>
            </div>

        </div>

    );
}
