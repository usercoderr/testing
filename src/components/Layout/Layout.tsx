import Header from "../Header/Header.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <div className={'flex justify-center items-center w-full'}>
                    <Outlet/>
                </div>
            </main>
        </>
    )
}
export default Layout
