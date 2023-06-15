import useUniqe from "../hooks/useId";
import React from "react";

const  HomePage = React.lazy(()=> import("../pages/Home"))
const  Contact = React.lazy(()=> import("../components/Contact"))
const  PropertiesPage = React.lazy(()=> import("../pages/Properties"))

export const navbar =[
   { 
    id:useUniqe,
    element: 
    <React.Suspense fallback={<React.Fragment>Loadinga......</React.Fragment>}>
        <HomePage/>
    </React.Suspense>
    ,
    title: 'Home',
    path:'/home',
    private: false,
    hidden: false
},
{ 
    id:useUniqe,
    element:
    <React.Suspense fallback={<React.Fragment>Loadinga......</React.Fragment>}>
         <PropertiesPage/>
    </React.Suspense>,
    title: 'Properties',
    path:'/properties',
    private: false,
    hidden: false
},
{ 
    id:useUniqe,
    element: <React.Suspense fallback={<React.Fragment>Loadinga......</React.Fragment>}>
    <Contact/>
</React.Suspense>,
    title: 'Contact',
    path:'/contact',
    private: false,
    hidden: false
},
{ 
    id:useUniqe,
    element: <h1>Generic Sign In</h1>,
    title: 'Sign in',
    path:'/signin',
    private: false,
    hidden: true
},


]