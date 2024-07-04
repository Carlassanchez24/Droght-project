import { Outlet } from "react-router-dom";
import Header from "../components/header/header";


const Layout1 = () => {
    return (
        <>
            <Header />
            <main className="h-auto">
                <Outlet /> 

            </main>
        
        </>
    )
}

export default Layout1;