import { Outlet } from "react-router-dom";



const Layout1 = () => {
    return (
        <>
            <main className="h-auto">
                <Outlet /> 

            </main>
        
        </>
    )
}

export default Layout1;