
function About() {
    return (
        <div id="about" className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col items-start">
                <p className="text-lg md:text-xl lg:text-2xl text-blue-400 font-medium mb-2">
                    Hola, yo soy
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2">
                    Esteban García
                </h1>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-300 mb-4">
                    Desarrollador Full Stack
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mb-6">
                    Apasionado por crear soluciones tecnológicas innovadoras y escalables.
                    Combino creatividad y experiencia técnica para transformar ideas en
                    productos digitales excepcionales.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mb-6">
                    Me destaco por transformar ideas complejas en código limpio y eficiente,
                    siempre buscando aprender nuevas tecnologías y metodologías para mejorar
                    el desarrollo de software.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <img
                    src="/img/esteban_garcia.jpg"
                    alt="Esteban García"
                    className="w-80 object-cover rounded-full"
                />
            </div>
        </div>
    );
}

export default About;