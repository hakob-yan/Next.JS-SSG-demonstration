import Link from "next/link";
import React from "react";



export default function AboutLayout({ children }: { children: React.ReactNode }) {

    return (
        <section>
            <nav>About NavBar</nav>
            <Link href='/'>Link to About</Link>
            {children}
        </section>
    )
}



