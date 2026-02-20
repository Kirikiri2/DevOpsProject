import Link from "next/link";
import "./styles/globals.css";
import "./styles/nika.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="flex gap-x-4 items-center m-4 p-2">
            <Link href='/'>Home</Link>
            <Link href='/portfolio/Kate'>Kate</Link>
            <Link href='/portfolio/Kris'>Kris</Link>
            <Link href='/portfolio/Tany'>Tany</Link>
            <Link href='/portfolio/Veronika'>Veronika</Link>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
