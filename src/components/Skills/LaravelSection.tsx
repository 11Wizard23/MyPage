import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import experiencia from './skillResources/laravel.json'
function LaravelSection(toastColor) {
    toastColor = '#FF2D20';
    return (
        <div className={`toast flex flex-col toast-laravel border-t-2 border-[#FF2D20]`}>
            <div className={`bg-[#FF2D20] toast-title`}>
                <h2 className="p-1 pb-2 text-2xl">Laravel</h2>
                <p className="absolute font-bold bottom-[-5px] right-1">8 - 11</p>
            </div>
            <div className="flex flex-wrap gap-4">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    {experiencia.map((exp, index) => {
                        return (
                            <div key={index} className="toastElement overflow-hidden backdrop-blur-lg bg-white/20 border border-white/20 rounded-xl px-6 pt-1.5 pb-4">
                                <span className="flex flex-row justify-between items-center text-gray-900 text-center">
                                    <h3 className="justify-between mt-0 text-xl font-bold text-gray-900">{exp.titulo}</h3>
                                    <FontAwesomeIcon icon={faCaretDown}/>
                                </span>
                                <p className="text-sm text-gray-900 mt-2">{exp.descripcion}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default LaravelSection;