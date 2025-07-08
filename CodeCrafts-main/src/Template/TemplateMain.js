import React, { useEffect, useState } from 'react';
import NavbarNew from '../MainPage/NavbarNew';
import TemplateData from '../data/TemplateData';
import Footer from '../MainPage/Footer.js';
import styles from './Template.module.css';
import { Link } from 'react-router-dom';

export function TemplateMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTemplates = TemplateData.filter(template =>
    template.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


function addTemplate(template) {
 
  const storedTemplates = localStorage.getItem("mytemplate");
  let existingTemplates = [];
  
  try {
   
    existingTemplates = storedTemplates ? JSON.parse(storedTemplates) : [];
    
   
    if (!Array.isArray(existingTemplates)) {
     
      if (typeof existingTemplates === 'object' && existingTemplates !== null) {
        existingTemplates = [existingTemplates];
      } else {
        existingTemplates = [];
      }
    }
    

    const templateExists = existingTemplates.some(t => t.title === template.title);
    
    if (!templateExists) {
      
      const updatedTemplates = [...existingTemplates, template];
      localStorage.setItem("mytemplate", JSON.stringify(updatedTemplates));
    }
  } catch (error) {
    console.error("Error processing templates:", error);
   
    localStorage.setItem("mytemplate", JSON.stringify([template]));
  }
}
  return (
    <>
      <NavbarNew />
      <div className={styles.templateMain}>
        <div className={`${styles.templateMainContent} container`}>
          <h2>Pick the Website Template You Love</h2>
          <input
            type="search"
            placeholder='Search your template...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.templateMainContent2}>
        <div className={`${styles.templateMainGrid} row`}>
          <h1>All Website Templates</h1>
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((v, i) => (
              <div key={i} className={`${styles.templateMainGridItem} col-md-4`}>
                <img src={v.Image} alt={v.title} onClick={() => addTemplate(v)} />
                <Link to={`/template/${v.title}`} >{v.title}</Link>
              </div>
            ))
          ) : (
            <p>No templates found.</p>
          )}
        </div>
      </div>

      <div className={styles.templateMainContent3}>
        <h1>Want Help Picking a Template?</h1>
        <p>Get tips for finding the template that's right for you.</p>
        <a href="">Help Me to Choose</a>
      </div>
      <Footer />
    </>
  );
}