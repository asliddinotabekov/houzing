import useUniqe from "../hooks/useId";
import React from "react";
import HouseItem from "../components/HouseItem";
import RegisterPage from "../pages/Register";
import FavouritePage from "../pages/Favourite";
import MyProfilePage from "../pages/MyProfile";
import AddHousePage from "../pages/AddHouse";

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
    element: <RegisterPage/>,
    title: 'Register',
    path:'/register',
    private: false,
    hidden: true
},
{ 
    id:useUniqe,
    element: <FavouritePage/>,
    title: 'Favourite',
    path:'/favourite',
    private: true,
    hidden: true
},
{ 
    id:useUniqe,
    element: <MyProfilePage/>,
    title: 'My Profile',
    path:'/myprofile',
    private: true,
    hidden: true
},
{ 
    id:useUniqe,
    element: <AddHousePage/>,
    title: 'Add House',
    path:'/myprofile/add-house',
    private: true,
    hidden: true
},

{ 
    id:useUniqe,
    element: <AddHousePage/>,
    title: 'Add House',
    path:'/myprofile/edite-house/:id',
    private: true,
    hidden: true
},

{ 
    id:useUniqe,
    element: <HouseItem/>,
    title: 'House Item',
    path:'/properties/:id',
    private: false,
    hidden: true
},


]