import Header from './Header'
import About from "./About/About.tsx";

function Page() {
    return (
        <div className="bg-gray-800 text-white">
            <Header/>
            <main className="p-4 md:p-8 lg:p-12 xl:p-16 mx-auto max-w-7xl">
                <About/>
            </main>
        </div>
    )
}

export default Page;