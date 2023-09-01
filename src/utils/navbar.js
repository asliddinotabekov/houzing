import useUniqe from "../hooks/useId";
import React from "react";

const PropertiesPage = React.lazy(() => import("../components/Properties"))

export const navbar = [

    {
        id: useUniqe,
        element:
            <React.Suspense fallback={<React.Fragment>Loadinga......</React.Fragment>}>
                <PropertiesPage />
            </React.Suspense>,
        title: 'Properties',
        path: '/',
        private: false,
        hidden: false
    },




]