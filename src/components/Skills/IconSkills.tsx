import PhpSVG from '../../assets/svg/php.svg';
import JavaSVG from '../../assets/svg/java.svg';
import NodejsSVG from '../../assets/svg/nodejs.svg';
import MysqlSVG from '../../assets/svg/mysql.svg';
import linuxSVG from '../../assets/svg/linux.svg';
import $ from 'jquery';

function IconSkills() {
    const mouseInLogo = event => {
        const $element = $(event.target);
        $element.addClass('scale-125');
    }

    const mouseOutLogo = event => {
        const $element = $(event.target);
        $element.removeClass('scale-125')
    }

    return (
        <div className="mt-16">
            <div className="w-80 h-1 bg-gray-500 mx-auto my-5 scale-1 rounded"></div>
            <div className="flex flex-row gap-1 w-100 justify-evenly">
                <img src={PhpSVG} onMouseEnter={mouseInLogo} onMouseLeave={mouseOutLogo} alt="PHP"
                     className="h-14 cursor-pointer transition-all duration-200"/>
                <img src={NodejsSVG} onMouseEnter={mouseInLogo} onMouseLeave={mouseOutLogo} alt="NodeJs"
                     className="h-14 cursor-pointer transition-all duration-200"/>
                <img src={JavaSVG} onMouseEnter={mouseInLogo} onMouseLeave={mouseOutLogo} alt="Java"
                     className="h-14 cursor-pointer transition-all duration-200"/>
                <img src={MysqlSVG} onMouseEnter={mouseInLogo} onMouseLeave={mouseOutLogo} alt="MySQL"
                     className="h-14 cursor-pointer transition-all duration-200"/>
                <img src={linuxSVG} onMouseEnter={mouseInLogo} onMouseLeave={mouseOutLogo} alt="Linux"
                     className="h-14 cursor-pointer transition-all duration-200"/>
            </div>
            <div className="w-80 h-1 bg-gray-500 mx-auto my-7 scale-1 rounded"></div>
        </div>
    )
}

export default IconSkills;