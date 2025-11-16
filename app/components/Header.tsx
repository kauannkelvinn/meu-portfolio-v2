import Link from "next/link";

export function Header() {
    return (
        <header className="w-full p-4 border-b border-matrix-dark">
            <nav className="flex items-center justify-between max-w-6xl mx-auto">
                <Link 
                    href="/"
                    className="font-matrix text-2xl text-matrix-light hover:text-matrix transition-colors"
                >
                    KAUAN KELVIN_
                </Link>
                <div className="flex gap-4 font-mono text-ghost-white">
                    <Link href="/projetos" className="hover:text-matrix-light">
                        Projetos 
                    </Link>
                    <Link href="/contato" className="hover:text-matrix-light">
                        Contato
                    </Link>
                </div>
            </nav>
        </header>
    )
}