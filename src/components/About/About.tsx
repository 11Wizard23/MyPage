import imagenPersonal from './../../assets/img/esteban_garcia.jpg'
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
                    Creo soluciones tecnológicas innovadoras y escalables con pasión. Fusiono creatividad y experticia técnica para convertir conceptos en productos digitales sobresalientes.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mb-6">
                    Transformo ideas complejas en código limpio y eficiente. Continuamente adopto nuevas tecnologías y metodologías para perfeccionar el desarrollo de software.
                </p>
            </div>
            <div className="relative flex items-center justify-center">
             <div className="w-80 relative">
                <img
                    src={imagenPersonal}
                    alt="Esteban García"
                    className="object-cover rounded-full transition-opacity duration-300"
                />
                <div className="absolute h-100 inset-0 bg-blue-300 opacity-50 transition-opacity duration-300 hover:opacity-0 rounded-full"></div>
             </div>
            </div>
        </div>
    );
}

export default About;