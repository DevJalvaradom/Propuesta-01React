import { Navigate, Routes, Route } from "react-router-dom";
import { Navbar } from "../../ui/components";
import { ContactoPage } from "../pages";
export const FrontPageRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Navbar />} />
            </Routes>
        </>
    )
}
