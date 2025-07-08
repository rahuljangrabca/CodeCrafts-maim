import React from 'react'
import NavbarNew from '../MainPage/NavbarNew'
import Footer from '../MainPage/Footer'
import styles from './Pricing.module.css'
export default function Pricing() {
  return (
    <>
      <NavbarNew />
      <div className={styles.pricingContainer}>
        <div className={styles.pricingBox1}>
          <p>14 days money back guarantee</p>
        </div>

        <div className={styles.pricingBox2}>
          <h1>Find the right plan for you</h1>
          <p>Create your site for free and choose a plan when you’re ready.</p>
          <button>Start for free</button>
        </div>

        <div className={styles.pricingBox3}>

          <div className={styles.pricingBox3Child}>
            <p>Get a strong foundation with every plan</p>
            <button>Start for free</button>
          </div>

          <div className={styles.pricingBox3Child2}>
               <div className={styles.gridChild}>
                <h3>900+ templates</h3>
                <p>Choose a template that fits your industry and then customize every detail with the drag-and-drop editor.</p>
              </div>   

              <div className={styles.gridChild}>
               <h3>Built-in AI features</h3>
               <p>Get your tasks done faster with AI-powered tools for content, images, marketing and more.</p>
              </div> 

              <div className={styles.gridChild}>
                <h3>Powerful business tools</h3>
                <p>Run your business with powerful tools to help you manage a store, create a blog, set up payments and more.</p>
              </div> 

              <div className={styles.gridChild}>
                <h3>Domain registration</h3>
                <p>Find and register the perfect domain for your site and get one year free with select website plans.</p>
              </div>

              <div className={styles.gridChild}>
                <h3>Reliable web hosting</h3>
                <p>Enjoy free web hosting with advanced security monitoring and 99.99% uptime for maximum reliability.</p>
              </div>

              <div className={styles.gridChild}>
                <h3>Advanced marketing</h3>
                <p>Drive more traffic to your site and boost revenue with a complete suite of built-in marketing and SEO tools.</p>
              </div>
          </div>
        </div>

        <div className={styles.pricingBox4}>
           <div className={styles.pricingBox3Child}>
              <p>We're here for you</p>
               <button>Start for free</button>
           </div>
             <div className={styles.pricingBox4Child2}>
                  <div>
                    <h2>Get answers</h2>
                    <p>Watch tutorials and read detailed articles in the Wix Help Center.</p>
                    <button>Go to Help Center</button>
                  </div>

                  <div>
                    <h2>Contact us</h2>
                    <p>Ask questions over chat or schedule a call with a Customer Care Expert.</p>
                    <button>Get in Touch</button>
                  </div>

                  <div>
                    <h2>Get in Touch</h2>
                    <p>Get help at any stage—from site creation to online growth.</p>
                    <button>Find an Expert</button>
                  </div>
             </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
