function Header() {
    return (
        <header className="bg-gray-800 text-white p-5 shadow-sm shadow-white">
            <div className="container mx-auto flex justify-evenly items-center">
                <div className="text-2xl font-bold text-nowrap">
                    {"<"} Esteban {"/"} García {">"}
                </div>

                <nav className="flex space-x-4 invisible md:visible">
                    <a href="#about" className="hover:text-blue-400">Sobre Mí</a>
                    <a href="#skills" className="hover:text-blue-400"> Habilidades </a>
                    <a href="#projects" className="hover:text-blue-400">Proyectos</a>
                    <a href="#contact" className="hover:text-blue-400">Educación</a>
                    <a href="#projects" className="hover:text-blue-400">Proyectos</a>
                </nav>

                <a
                    href="https://github.com/11Wizard23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
                >
                    GitHub
                </a>
            </div>
        </header>
    )
}

export default Header;