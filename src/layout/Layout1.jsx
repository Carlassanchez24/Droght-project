import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";


const Layout1 = () => {
    return (
        <>
            <Header />
            <main className="h-auto">
                <Outlet /> 

            </main>
            <Footer />
        </>
    )
}

export default Layout1;