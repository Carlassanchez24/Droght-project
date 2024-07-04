import { Outlet } from "react-router-dom"
import Header from "../components/header/header";

const Layout2 = () => {
    return (

        <div >
            <Header />
            <main >
                <Outlet />
            </main>

        </div>

    )
}

export default Layout2;
