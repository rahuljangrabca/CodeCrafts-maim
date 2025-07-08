import React from 'react'
import Headerlogin from './Headerlogin';
import Bodylogin from './BodyLogin';
import FormLogin from './FormLogin';
import '../signup/Signup.module.css'
import Footer from '../signup/Footer';
export const LoginPage = () => {
    return (
    <>
    <Headerlogin />
    <Bodylogin />
    <FormLogin />
    <Footer/>
    </>
   );
 }
 
