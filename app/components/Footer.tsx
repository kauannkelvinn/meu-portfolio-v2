export function Footer() {
    return (
        <footer className="w-full p-4 mt-auto border-t border-matrix-dark">
            <div className="max-w-6xl mx-auto text-center font-mono text-sm text-ghost-white">
                © {new Date().getFullYear()} Kauan Kelvin. Todos os direitos reservados.
                <br />
                <span className="text-matrix-dark">
                    Construído com Next.js e Tailwind CSS.
                </span>
            </div>
        </footer>
    )
}