export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t-[4px] border-pure-white bg-pure-black py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm font-mono">
                    © {currentYear} KAUAN KELVIN. ALL RIGHTS RESERVED.
                </div>

                <div className="text-sm text-gray-mid font-mono">
                    DESIGNED & DEVELOPED WITH <span className="text-neon">❤</span>
                </div>
            </div>
        </footer>
    )
}