import Header from './Header'
import About from "./About/About.tsx";
import IconSkills from "./Skills/IconSkills.tsx";
import SkillToastSection from "./Skills/SkillToastSection.tsx";
import ImagenServerSide from './../assets/img/png/server_side.png'
import Footer from "./Footer.tsx";

function Page() {
    return (
        <div className="bg-gray-800 text-white">
            <Header/>
            <main className="p-4 md:p-8 lg:p-12 xl:p-16 mx-auto max-w-7xl">
                <img
                    style={{width: 150, zIndex:1000, position: "fixed", right: -10, top: 70, boxShadow: "0px 0px 20px 3px rgba(255,255,255,1)"}}
                    src={ImagenServerSide}
                    alt="Server Side Rendering"
                    className="object-cover rounded-2xl transition-opacity duration-300"
                />
                <About/>
                <IconSkills/>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 skillsSection">
                    <SkillToastSection tittle={"Laravel"} subtitle={"8-11"} toastColor={"#FF2D20"}/>
                    <SkillToastSection tittle={"CodeIgniter"} subtitle={"3 & 4"} toastColor={"#DB4714FF"}/>
                    <SkillToastSection tittle={"Magento"} subtitle={"1 & 2"} toastColor={"#eb4919"}/>
                    <SkillToastSection tittle={"NodeJS"} toastColor={"#8bc64a"}/>
                    <SkillToastSection tittle={"Java"} toastColor={"#5281a0"}/>
                    <SkillToastSection tittle={"Linux"} toastColor={"#000"}/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Page;