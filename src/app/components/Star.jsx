"use client"

import { useEffect, useState } from "react"
import "../styles/kris.css";

export default function Star() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 150)
        return () => clearTimeout(t)
    }, [])

    return (
        <div
            className={`
        transition-all duration-1000 ease-out
        hover:scale-105 hover:-rotate-10 font-semibold nauryz star
        ${visible ? "opacity-100" : "opacity-0"}
      `}
        >
            <svg width="70" height="70" viewBox="0 0 100 100">
                <polygon
                    points="
      50,0
      56.8,29.1
      79.4,9.5
      67.8,37.1
      97.6,34.5
      72,50
      97.6,65.5
      67.8,62.9
      79.4,90.5
      56.8,70.9
      50,100
      43.2,70.9
      20.6,90.5
      32.2,62.9
      2.4,65.5
      28,50
      2.4,34.5
      32.2,37.1
      20.6,9.5
      43.2,29.1
    "
                    fill="white"
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
        </div>
    )
}