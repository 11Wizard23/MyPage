import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from 'react';

/**
 * Component for skills section
 * @param tittle Toast Skill title and json element
 * @param subtitle
 * @param toastColor
 * @constructor
 */
function SkillToastSection({tittle, subtitle, toastColor}) {
    const [experiencia, setExperiencia] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        import(`./skillResources/${tittle.toLowerCase()}.json`)
            .then(data => {
                setExperiencia(data.default);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error cargando JSON:", error);
                setLoading(false);
            });
    }, [tittle]); // Dependencia en tittle para recargar si cambia

    if (loading) return <div>Cargando...</div>;

    return (
        <div className={`toast flex flex-col toast-${tittle.toLowerCase()} border-t-2`}
             style={{borderColor: toastColor}}
        >
            <div className="toast-title"
                 style={{backgroundColor: toastColor}}
            >
                <h2 className="p-1 pb-2 text-2xl">{tittle}</h2>
                <p className="absolute font-bold bottom-[-5px] right-1">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-4">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    {Array.isArray(experiencia) ? (
                        experiencia.map((exp, index) => (
                            <div key={index}
                                 className="toastElement overflow-hidden backdrop-blur-lg bg-white/20 border border-white/20 rounded-xl px-6 pt-1.5 pb-4">
                                <span className="flex flex-row justify-between items-center text-gray-900 text-center">
                                    <h3 className="justify-between mt-0 text-xl font-bold text-gray-900">{exp.titulo}</h3>
                                    <FontAwesomeIcon icon={faCaretDown}/>
                                </span>
                                <p className="text-sm text-gray-900 mt-2">{exp.descripcion}</p>
                            </div>
                        ))
                    ) : (
                        <div>No hay datos para mostrar o formato incorrecto</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SkillToastSection;