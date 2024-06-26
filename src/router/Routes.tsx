import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "../components/Layout/Layout.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import ColorPickerPage from "../pages/ColorPickerPage/ColorPickerPage.tsx";
import UsersPage from "../pages/UsersPage/UsersPage.tsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.tsx";

const Routes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/color-picker'} element={<ColorPickerPage/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        )
    )
    return  <RouterProvider router={router}/>
}
export default Routes
