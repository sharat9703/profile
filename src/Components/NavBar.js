import React, { useEffect, useState } from 'react';
import { RESUME } from '../links';

const links = [["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]];

export const NavBar = ()=>{
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <header className={scrolled ? "nav scrolled" : "nav"}>
            <div className="wrap nav-inner">
                <a href="#top" className="brand"><span className="mark">SY</span>Sharat Yaragatti</a>
                <nav className="nav-links">
                    {links.map(([label, href])=><a key={href} href={href}>{label}</a>)}
                </nav>
                <a href={RESUME} download className="btn btn-quiet">Resume</a>
            </div>
        </header>
    );
}
