import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';
import { SignUp } from './signup/SignUp';
import { LoginPage } from './login/LoginPage';
import { DesignMain}  from './Design/DesignMain';
import { TemplateMain } from './Template/TemplateMain';
import AboutUs from './About-us/AboutUs';
import  ContactUs from './ContactUs/ContactUs';
import TemplatesDiscription from './Template/TemplatesDiscription';
import Aipage  from './AI-page/Aipage'
import Account from './user-account/Account';
import Pricing from './pricing/Pricing';
const allroutes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path:'/design',
    element:<DesignMain/>
  },
  {
    path:'/template',
    element:<TemplateMain/>
  },
  {
   path:'/template/:title',
   element:<TemplatesDiscription/>
  },
  {
    path:'/about',
    element:<AboutUs/>
  },
  {
    path:'/contact',
    element: <ContactUs />
  },
  {
    path:'/aiResponse',
    element:<Aipage/>
  },
  {
    path:'my-account',
    element:<Account/>
  },
  {
    path:'/pricing',
    element:<Pricing/>
  }

]);
function App() {
  return (
    <RouterProvider router={allroutes} />
  );
}

export default App;

