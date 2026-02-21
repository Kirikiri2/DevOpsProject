import PopUp from "@/app/components/PopUp";
import Star from "@/app/components/Star";
import Image from "next/image";

export default function KrisPage() {
    return (
        <div className="container flex items-center justify-center nauryz mx-auto max-w-300">
            <div className="relative bg-white rounded-3xl pt-8 shadow-xl z-0 w-full">
                <div className="flex justify-center">
                    <Image src='/kris/photo1.png' alt='photo1' width={300} height={200} className="z-0 brightness-120" priority />
                </div>

                <div className="absolute top-20 right-138">
                    <Star />
                </div>
                <div className="absolute top-15 right-95">
                    <PopUp />
                </div>
                <p className=" text-[184px] text-[#e2b4e0] absolute -z-10 top-10 left-35">Frontend</p>
                <p className=" text-[144px]  text-[#949ab1] absolute z-10 bottom-0 right-50">Developer</p>
            </div>

        </div>
    )
}