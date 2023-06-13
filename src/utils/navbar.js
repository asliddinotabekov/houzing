import {PropertiesPage} from "../pages/Properties";
import useUniqe from "../hooks/useId";
import { HomePage } from "../pages/Home";
import Contact from "../components/Contact";

export const navbar =[
   { 
    id:useUniqe,
    element: <HomePage/>,
    title: 'Home',
    path:'/home',
    private: false,
    hidden: false
},
{ 
    id:useUniqe,
    element: <PropertiesPage/>,
    title: 'Properties',
    path:'/properties',
    private: false,
    hidden: false
},
{ 
    id:useUniqe,
    element: <Contact/>,
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