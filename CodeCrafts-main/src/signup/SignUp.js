import React from 'react';
import Footer from './Footer';
import Body from './Body';
import Form from './Form';
import './Signup.module.css';
import Header from './Header';
export function SignUp() {
  return (
    <>
      <div className="signup">
      <Header />
      <Body />
      <Form />
      <Footer />
      </div>
    </>
  );
}

