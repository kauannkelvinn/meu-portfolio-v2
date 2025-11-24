import GlitchText from "../effects/GlitchText"

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-40 border-b-[4px] border-pure-white bg-pure-black">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
                {/* <div className="text-2xl font-bold tracking-tighter font-display">
                    <GlitchText as="h1" intensity="medium">
                        KAUAN<span className="text-neon">_</span>KELVIN
                    </GlitchText>
                </div> */}

                <div className="flex gap-8 text-sm uppercase tracking-wider font-mono">
                    <a
                        href="#work"
                        className="hover:text-neon transition-colors duration-200"
                    >
                        <GlitchText as="span" intensity="low">Work</GlitchText>
                    </a>
                    <a
                        href="#about"
                        className="hover:text-neon transition-colors duration-200"
                    >
                        <GlitchText as="span" intensity="low">About</GlitchText>
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-neon transition-colors duration-200"
                    >
                        <GlitchText as="span" intensity="low">Contact</GlitchText>
                    </a>
                </div>
            </nav>
        </header>
    )
}