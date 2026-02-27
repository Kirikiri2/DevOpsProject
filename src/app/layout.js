import Link from "next/link";
import "./styles/globals.css";
import "./styles/nika.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header className="border-b-[3px] border-b-[#e2b4e0] pt-2 nauryz mb-10">
          <nav className="flex  justify-between m-4 p-2">
            <Link href='/'>Home</Link>
            <div className="flex justify-between gap-x-8 items-center">
                          <Link href='/portfolio/Kate'>Kate</Link>
            <Link href='/portfolio/Kris'>Kris</Link>
            <Link href='/portfolio/Tany'>Tany</Link>
            <Link href='/portfolio/Veronika'>Veronika</Link>
            </div>

          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <div className="text-center py-8">
            <h2 className="nauryz text-5xl font-bold text-[#949ab1] mb-4">and that's</h2>
            <p className="nauryz text-3xl text-[#e2b4e0]">a wrap. ✨</p>
            <p className="text-[#b9abab] mt-4 text-sm">Thanks for stopping by!</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
