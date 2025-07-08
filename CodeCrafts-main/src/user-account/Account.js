import styles from './Account.module.css'
import NavbarNew from '../MainPage/NavbarNew'
import Footer from '../MainPage/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'

export default function Account() {
  let data = localStorage.getItem('userdata')
  const [templates, setTemplates] = useState(() => {
    try {
      const template = localStorage.getItem('mytemplate');
      const parsedTemplate = template ? JSON.parse(template) : [];
      return Array.isArray(parsedTemplate) ? parsedTemplate : 
             (parsedTemplate && typeof parsedTemplate === 'object' ? [parsedTemplate] : []);
    } catch (e) {
      console.error("Error parsing templates:", e);
      return [];
    }
  });
  
  function createBackup() {
    const backup = {
      userdata: localStorage.getItem('userdata'),
      mytemplate: localStorage.getItem('mytemplate')
    };
    localStorage.setItem('backup_data', JSON.stringify(backup));
    return backup;
  }

  function logout() {
    createBackup();
    
    data = JSON.parse(data)
    localStorage.removeItem('userdata')
    toast("Logged Out Successfully")
    window.location.href = "/"
  }

  function restoreFromBackup() {
    const backup = localStorage.getItem('backup_data');
    if (backup) {
      const parsedBackup = JSON.parse(backup);
      localStorage.setItem('userdata', parsedBackup.userdata);
      localStorage.setItem('mytemplate', parsedBackup.mytemplate);
      setTemplates(parsedBackup.mytemplate ? JSON.parse(parsedBackup.mytemplate) : []);
      toast.success("Data restored successfully!");
    } else {
      toast.error("No backup found!");
    }
  }

  function removeTemplate(index) {
   
    createBackup();
    
    const updatedTemplates = templates.filter((_, i) => i !== index);
    setTemplates(updatedTemplates);    
    localStorage.setItem('mytemplate', JSON.stringify(updatedTemplates));
    toast.success("Template removed successfully!");
  }

  return (
    <>
      <ToastContainer/>
      <NavbarNew />
      <div className={styles.AccountMain}>
        <div className={`${styles.Accountcontainer} container`}>
          <div className={styles.AccountHeader}>
            <div className={styles.AccountHeaderBody}>
              <h1>Sites</h1>
              <p>View and manage all your websites in one place.</p>
            </div>
            <div className={styles.AccountHeaderBody}>
              <button>Create a new folder</button>
              <button>Create a new Website</button>
            </div>
          </div>

          <div className={styles.AccountBodyMain}>
            <h1>Your Websites</h1>
            <div className={`${styles.AccountBodyGrid} row`}>
              {templates.length > 0 ? (
                templates.map((template, index) => (
                  <div key={index} className='col-md-4 mb-4'>
                    <img 
                      src={template.Image || ""} 
                      alt={template.title || "Website"} 
                      className={styles.templateImage}
                    />
                    <div className={styles.AccountBodyGridButton}>
                      <button 
                        onClick={() => removeTemplate(index)}
                        className={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No websites found. Add some templates from the templates page.</p>
              )}
            </div>
          </div>

          <div className={styles.logOut}>
            <button onClick={logout}>Logout</button>
            
            <button 
              onClick={restoreFromBackup}
              style={{ marginLeft: '10px', backgroundColor: '#4CAF50' }}
            >
              Restore Data
            </button>
          </div> 
        </div>
      </div>
      <Footer />
    </>
  )
}