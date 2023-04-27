import { Routes, Route } from "react-router-dom";

import { FrontPageRoutes } from "../index";


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<FrontPageRoutes />} />
            </Routes>
        </>
    )
}
