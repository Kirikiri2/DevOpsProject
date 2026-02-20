export default function VeronikaPage() {
    return (
        <div className="flex min-h-screen items-center justify-center px-8 -mt-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="max-w-2xl text-center md:text-left">
                    <h1 className="nauryz text-[120px] font-bold mb-4 leading-[1.1]">
                        Привет, я Ника
                    </h1>
                    <p className="nauryz text-4xl text-gray-700">
                        Frontend разработчик
                    </p>
                </div>

                <div className="w-150 h-150 shrink-0">
                    <img
                        src="/ника.jpg"
                        alt="Ника"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}