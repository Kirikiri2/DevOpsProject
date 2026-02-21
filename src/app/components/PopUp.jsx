"use client"

import { useEffect, useState } from "react"
import "../styles/kris.css";

export default function PopUp() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 150)
        return () => clearTimeout(t)
    }, [])

    return (
        <div
            className={`
        transition-all duration-800 ease-out
        hover:scale-105 hover:rotate-2 font-semibold nauryz bubble 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
      `}
        >
            Улыбочку )
        </div>
    )
}