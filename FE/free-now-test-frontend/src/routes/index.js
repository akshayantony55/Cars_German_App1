import React from "react";
import {
    BrowserRouter as ReactRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import FreeNowDashboard from "../views/FreeNowDashboard";
import ShareNowDashboard from "../views/ShareNowDashboard";
import DashboardLayout from "./layouts/DashboardLayout";

export default function Router() {
    const routeConfig = [
        {
            path: "/",
            component: () => { return <Navigate to="/free-now" /> },
            exact: true,
        },
        {
            path: "/free-now",
            component: FreeNowDashboard,
            exact: true,
        },
        {
            path: "/share-now",
            component: ShareNowDashboard,
            exact: true,
        },
    ];
    return (
        <ReactRouter>
            <DashboardLayout>
                <Routes>
                    {routeConfig.map((routeItem) =>
                    (
                        <Route
                            path={routeItem.path}
                            exact={routeItem.exact}
                            key={routeItem.path}
                            element={<routeItem.component />}
                        >
                        </Route>
                    )
                    )}
                </Routes>
            </DashboardLayout>
        </ReactRouter>
    );
}